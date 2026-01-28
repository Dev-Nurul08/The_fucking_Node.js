import express from "express";

const app = express();

app.listen(3000 , (req,res)=>{
    console.log("http://localhost:3000");
})

app.get("/" , (req,res)=>{
    res.send("<h1>Hello World</h1>");
})

app.get("/about" , (req,res)=>{
    res.send("<h1>About Page</h1>");
})
app.get("/about/user" , (req,res)=>{
    res.send("<h1>About User Page</h1>");
})
app.get("/gallery" , (req,res)=>{
    res.send("<h1>Gallery Page</h1>");
})
app.get("/user/:userid" , (req,res)=>{
    res.send(req.params);
})