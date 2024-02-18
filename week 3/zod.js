const express = require('express')
const zod = require('zod')
const app = express()

const schema = zod.array(zod.string())
app.use(express.json())

app.get('/working',(req,res)=>{
    res.status(200).json({
        "data":['shikhar','Manan']
    })
})

app.post('/readData',(req,res)=>{
    const names = req.body.name 
    const checkType = schema.safeParse(names)
    console.log(`This is type check `,checkType);
    console.log(req.body);
    res.status(200).json({
        name: names   
    })
})

app.listen(8080,()=>{
    console.log("Working on PORT 8080");
})