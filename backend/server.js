const express = require('express')

//express app
const app = express();

//routes
//function 2nd arg to handle request
app.get('/', (req, res) =>{
    res.json({mssg:'Welcome to app'})
})

//listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000')
})