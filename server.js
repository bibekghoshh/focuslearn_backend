const express=require('express');

const app=express();
const port=4000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(port,(error)=>{
    if(!error){
        console.log("server is succesfully running on port"+port);
    }else{
        console.log("error occured "+error)
    }
})