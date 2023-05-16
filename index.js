const express = require('express')
const app = express()

app.get('/test', (req,res)=>res.send("tets route working"))

app.listen(3000,'0.0.0.0',()=>{
    console.log("running on port 3000")
})