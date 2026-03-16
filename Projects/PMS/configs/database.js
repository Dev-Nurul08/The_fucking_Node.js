import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(env.MONGODB_URI);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default dbConnect();