import { useWorkoutsContext} from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import { formatDistanceToNow } from 'date-fns';

const WorkoutDetails = ({workout}) => {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return;
        }
        const response = await fetch('api/workouts/' + workout._id, {
            method:'DELETE',
            'Authorisation': `Bearer ${user.token}`
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload:json});
        }
    };
    
    return (
        <div className="workout-details">
            <h4>{workout.title}
            </h4>
            <p><strong>Loads (kg): {workout.weight} </strong></p>
            <p><strong>Reps: {workout.reps} </strong></p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails;