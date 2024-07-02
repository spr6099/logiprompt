let express = require("express");
let path = require('path')
const app=express()


app.use(express.static('img'))
app.get('/',(req,res)=>{
    res.send("hello express home")
})

app.get('/about/:aboutid',(req,res)=>{
    // res.send("hello express about")
    res.send(req.params)
})

app.get('/paragraph',(req,res)=>{
    res.sendFile(path.join(__dirname,'para.html'))
})
app.listen(5000)