const http = require('http');
const fs = require('fs');

const PORT = 8082;
const handleRequest = (req,res)=>{
    let filename = "";
    switch(req.url){
        case '/' : 
            filename = 'index.html'
            break;
    }
    fs.readfile(filename,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("server start on port:",PORT)
        }
    })

}

const server = http.create.server(handleRequest);

server.listen(filename,(err,result)=>{
    if(!err){
        console.log("server Starting..");
        console.log("http://localhost:"+PORT);
    }
})