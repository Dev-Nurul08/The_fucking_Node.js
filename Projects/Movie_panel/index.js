import express from "express";
import dotenv from "dotenv";

dotenv.config(); 
import { connectDB } from "./configs/dataBase.js";
import morgan from "morgan";
import router from './routers/index.js';
import adminRouter from './routers/admin.route.js';

const app = express();

connectDB();



const PORT = process.env.PORT || 8081;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));


app.use('/', router);   
app.use('/admin', adminRouter ,router);   
 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});