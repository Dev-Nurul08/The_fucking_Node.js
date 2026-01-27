import express from 'express';


const app = express();
const PORT = 1947;

let users = [];

app.use(express.urlencoded({extended:true}))
app.set('view engine' , 'ejs');


app.get('/',(req,res)=>{

    return res.render('index',{users}) 
})

app.post('/create' , (req,res)=>{
   
    let email = {
        id : Date.now(),
        email : req.body.email

    }
    users.push(email);

         console.log(users);
    return res.redirect(req.get('Referrer') || '/')

    
})


app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Start Server");
        console.log("http://127.0.0.1:"+PORT);
    }
})