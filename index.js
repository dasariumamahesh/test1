const express = require('express')
const app = express()
console.log("_________________Here_______________________")


const redis = require('redis');
const client = redis.createClient();

client.on('error', err => console.log('Redis Client Error', err));



app.get('/test', async (req,res)=>{
    
await client.connect();

await client.set('key', 'value111111111111111111');
const value = await client.get('key');
    console.log("_________________Here", value)
    res.send("tets route working", value)
})
app.get('/', (req,res)=>{
    console.log("_________________Here")
    res.send("+++++++++++++++++++==tets route working")
})
port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("running on port 3000")
})