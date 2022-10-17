const express = require('express')

const app = express()

const StarterPage = __dirname + '/index.html'
app.get('/',(req,res)=>{
    res.sendFile(StarterPage)
})

app.listen(4000)