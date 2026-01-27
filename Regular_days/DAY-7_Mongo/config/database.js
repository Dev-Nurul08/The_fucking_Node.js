import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL);

const database = mongoose.connection;

database.on('connected' , (err)=> {
    if(err){
        console.log(err);
        
    }
    else{
        console.log("Database Sucessfully Conected")
    }
}) 

export default database;
