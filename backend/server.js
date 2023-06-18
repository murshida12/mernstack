const express = require('express')
const app = express();
const PORT = 5000
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://userone:userone@cluster0.vr48sxf.mongodb.net/")
.then(()=>{
console.log("connected suceccfully");
}).catch((err)=>{
console.log(err);
})
app.get('/',(req,res)=>{
    res.send('server is running')

})

app.get('about',(req,res)=>{
    res.send('Abou')

})
app.listen(PORT,()=>{
    console.log(`listening on port  ${PORT}`);
});