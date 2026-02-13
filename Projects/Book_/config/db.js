import mongoose from "mongoose";
import { envConfig } from "./dotenv.js";



const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
};



export default connectDB();