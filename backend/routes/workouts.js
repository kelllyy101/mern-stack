const express = require('express')

const router = express.Router()

//creating router, adding requst handlers, exporting router to use in api/workouts path 

//get all workouts
router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (res, req) => {
    res.json({mssg: 'GET single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg:'POST a new workout'})
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