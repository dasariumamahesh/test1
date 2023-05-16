const express = require('express')
const app = express()
console.log("_________________Here_______________________")

app.get('/test', (req,res)=>{
    console.log("_________________Here")
    res.send("tets route working")
})
port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("running on port 3000")
})