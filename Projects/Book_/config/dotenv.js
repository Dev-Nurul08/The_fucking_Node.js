import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const envConfig = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI 
};

export default envConfig;