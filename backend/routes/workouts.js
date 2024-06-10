const express = require('express')
const Workout = require('../models/workoutModels')

const router = express.Router()

//creating router, adding requst handlers, exporting router to use in api/workouts path 

//GET all workouts
router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//POST a new workout
router.post('/', async (req, res) => {
    const {title, reps, weight} = req.body

    try {
        const workout = await Workout.create({title, reps, weight})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg:'Delete a new workout'})
})

//UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE a new workout'})
})



module.exports = router