import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title : String,
    rating : String,
    image : String,
    about : String,

});
const MovieModel = mongoose.model("movieTbl" ,movieSchema);

export default MovieModel;