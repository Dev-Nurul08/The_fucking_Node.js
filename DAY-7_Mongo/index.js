import express from "express";
import bodyParser from "body-parser";
import {env} from "./config/dotenv.js"
import database from "./config/database.js";
import userModel from "./model/userTable.js";



const app = express();
const users = [];

const port = env.PORT || 3000;

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  return res.render('index');
});

app.post('/', (req, res) => {
    console.log(req.body);
    
    userModel.create(req.body)
    .then((user) => {
        console.log(user);
        return res.redirect(req.get('Referrer')|| '/');
    })
    .catch((err) =>{
        console.log(err);
        return res.redirect(req.get('Referrer')|| '/');
    })
    // console.table(users);
});

app.get('/view-data', (req, res) => {
    userModel.find({})
    .then((user)=>{
        return res.render("./pages/view-data.ejs" , { user });
    })
    .catch((err)=>{
        console.log(err);
        return res.render("./pages/view-data.ejs" , { user })
        
    })
});

app.get('/delete/:id' , (req ,res) =>{
    let {id} = req.params;

    userModel.findByIdAndDelete(id)
    .then((user)=>{
        return res.render("./pages/view-data.ejs" , { user });
    })
    .catch((err)=>{
        console.log(err);
        return res.render("./pages/view-data.ejs" , { user })
        
    })
})



app.listen(port , (err)=>{
if(err){
    console.log(err);
    
}else{
    console.log("Server Started");
    console.log(`http://localhost:${port}`);
}
})