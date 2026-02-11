import mongoose from "mongoose";
import { envConfig } from "./dotenv.js";

const url = envConfig.MONGO_URI;

mongoose.connect(url)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

export default mongoose;