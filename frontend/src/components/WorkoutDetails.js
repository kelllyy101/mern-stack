const WorkoutDetails = ({workout}) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}
            </h4>
            <p><strong>Loads (kg): {workout.weight} </strong></p>
            <p><strong>Reps: {workout.reps} </strong></p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails;