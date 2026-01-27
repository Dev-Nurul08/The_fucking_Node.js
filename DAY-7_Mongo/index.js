import express from "express";
import bodyParser from "body-parser";
import {env} from "./config/dotenv.js"


const app = express();

const port = env.PORT || 3000;

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  return res.render('index');
});




app.listen(port , (err)=>{
if(err){
    console.log(err);
    
}else{
    console.log("Server Started");
    console.log(`http://localhost:${port}`);
}
})