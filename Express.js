const express=require("express");
// const http = require("http");

const  app=express();

app.get('/',(req,res)=>{
    return res.send("Hello From Home Page !");
});

app.get('/about',(req,res)=>{
    return res.send("Hello From About Page ! Hey " + req.query.myname);
});

app.listen(8000,()=>console.log("server is start !"));

// use this synatx we can use upper syntax
// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("server started!"));