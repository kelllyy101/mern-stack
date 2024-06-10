require('dotenv').config() //attach env varibale to process object

const express = require('express')

//express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
//function 2nd arg to handle request
app.get('/', (req, res) =>{
    res.json({mssg:'Welcome to app'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

process.env