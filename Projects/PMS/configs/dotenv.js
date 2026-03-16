import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT : process.env.port,
    MONGODB_URI : process.env.MONGODB_URI
};