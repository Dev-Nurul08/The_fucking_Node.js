import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email : {
        type :String,
        required : true,
        unique : true
    },
    password :{
        type :String,
        required :true
    }
});

const userModel = mongoose.model("users",Schema);

export default userModel;