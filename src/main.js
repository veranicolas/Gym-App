// core
const express = require('express')
const app = express()
require('./db/mongoose');

// middleware
app.use(express.json())

// consts 
const PORT = process.env.PORT || 3000



app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})
