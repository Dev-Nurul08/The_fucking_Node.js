import express from "express";
import dbConnect from "./configs/database.js";
import { env } from "./configs/dotenv.js";

const port = env.PORT || 3000;

const app = express();



app.listen(port,(error)=>{
    if(!error){
        console.log('Server started');
        console.log(`https://localhost:${port}`);
    }
    else{
        console.log(error.message);
    }
})