import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fecthWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json() //array of objects each representing a workout

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fecthWorkouts();
    }, []) //empty dependency array firing only once

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
        </div>
    )
}

export default Home;