import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import db from "./config/database.js";
import { envConfig } from "./config/dotenv.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();
const PORT = envConfig.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server Started.");
        console.log("http://localhost:" + PORT);
    }
});