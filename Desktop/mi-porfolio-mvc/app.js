const express= require('express');
const app= express();

app.get('/',(req,res)=>
    res.sendFile(path.join(__dirname,'views','home.html')));
app.listen(3000,()=>{
    console.log('servidor funcionando')
})