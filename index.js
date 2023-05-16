const express = require('express')
const app = express()
console.log("_________________Here_______________________")

app.get('/test', (req,res)=>{
    console.log("_________________Here")
    res.send("tets route working")
})

app.listen(3000,'0.0.0.0',()=>{
    console.log("running on port 3000")
})