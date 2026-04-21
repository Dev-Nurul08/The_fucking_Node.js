import dotenv from "dotenv"
dotenv.config();

export const envConfig  = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    USER_KEY: process.env.USER_KEY,
    JWT_SECRET: process.env.JWT_SECRET || 'thisisasupersecretkey123'
}