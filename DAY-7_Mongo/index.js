import express from "express";
import bodyParser from "body-parser";
import {env} from "./config/dotenv.js"


const app = express();
const users = [];

const port = env.PORT || 3000;

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  return res.render('index');
});

app.post('/', (req, res) => {
    const user = {
        email : req.body.email,
        password : req.body.password,
        id : Date.now()
    }
    users.push(user);
    console.table(users);
    return res.redirect('/');
});

app.get('/view-data', (req, res) => {
    if (users.length === 0) {
        return res.render('pages/view-data', { data: [] }); // Render with empty data
    }
    res.render('pages/view-data', { data: users });
});



app.listen(port , (err)=>{
if(err){
    console.log(err);
    
}else{
    console.log("Server Started");
    console.log(`http://localhost:${port}`);
}
})