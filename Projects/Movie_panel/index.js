import express from "express";
import { envConfig } from "./configs/dotenv.js";
import { connectDB } from "./configs/dataBase.js";


const app = express();

connectDB();

app.listen(envConfig.PORT, (err) => {
  if(err){
    console.log(err);
  }
  else{
    console.log(`Server is running on port ${envConfig.PORT}`);
  }
});