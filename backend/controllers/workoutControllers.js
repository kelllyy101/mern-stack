const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}) //blank object to get all
    
    res.status(200).json(workouts) 
}

//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params //grabs id from router params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


//create new workout
const createWorkout = async (req, res) => {
    const {title, reps, weight} = req.body
//add doc to db
    try {
        const workout = await Workout.create({title, reps, weight})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete workout

//update a workout

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
}