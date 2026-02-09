
import { envConfig } from "./dotenv.js";

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(envConfig.MONGO_URI);
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log(error);
    }
}