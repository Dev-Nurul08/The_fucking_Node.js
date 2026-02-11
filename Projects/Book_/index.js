import express from "express";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";

// Configuration & Database
import { envConfig } from "./config/dotenv.js";
import "./config/db.js"; // Importing this runs the connection code

// Models
import bookModel from "./models/bookModel.js";

// Middleware
import imageUploads from "./middleware/imageUploads.js";

const app = express();
const PORT = envConfig.PORT || 3000;

// Setup View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For CSS/JS if you have them
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// ================= ROUTES =================

/**
 * 1. HOME / ADD BOOK PAGE
 */
app.get('/', (req, res) => {
    return res.render('index.ejs', { data: [] });
});

/**
 * 2. POST NEW BOOK
 * Handles image upload and saving to DB.
 */
app.post('/', imageUploads, (req, res) => {
    if (req.file) {
        req.body.image = req.file.path;
    }

    bookModel.create(req.body)
        .then(() => {
            console.log("✅ Product added successfully");
            return res.redirect('/'); // Reloads the page
        })
        .catch((err) => {
            console.log(err);
            return res.redirect('/');
        });
});

/**
 * 3. VIEW ALL BOOKS (SHELF)
 */
app.get('/view-book', (req, res) => {
    bookModel.find({})
        .then((data) => {
            return res.render('./pages/view-book.ejs', { data });
        })
        .catch((err) => {
            console.log(err);
            return res.render('./pages/view-book.ejs', { data: [] });
        });
});

/**
 * 4. DELETE BOOK (FROM SHELF)
 * IMPORTANT: This removes the book AND deletes the image file to save space.
 */
app.get('/book/delete/:id', async (req, res) => {
    const bookId = req.params.id;

    try {
        const book = await bookModel.findByIdAndDelete(bookId);
        
        if (book && book.image) {
            // Check if file exists before trying to delete
            if (fs.existsSync(book.image)) {
                fs.unlinkSync(book.image);
                console.log("🗑️ Image file deleted");
            }
        }
        console.log("✅ Product deleted successfully");
        return res.redirect('/view-book');
    } catch (err) {
        console.log(err);
        return res.redirect('/view-book');
    }
});

/**
 * 5. EDIT BOOK PAGE
 */
app.get('/book/edit/:id', (req, res) => {
    const editId = req.params.id;
    bookModel.findById(editId)
        .then((data) => {
            return res.render('pages/edit-book.ejs', { data });
        })
        .catch((err) => {
            console.log(err);
        });
});

/**
 * 6. UPDATE BOOK
 * Handles replacing the image if a new one is uploaded.
 */
app.post('/book/update/:id', imageUploads, async (req, res) => {
    const updateId = req.params.id;

    try {
        // If a new file is uploaded, handle image replacement
        if (req.file) {
            const oldBook = await bookModel.findById(updateId);
            
            // Delete old image if it exists
            if (oldBook && oldBook.image && fs.existsSync(oldBook.image)) {
                fs.unlinkSync(oldBook.image);
            }
            
            // Set new image path
            req.body.image = req.file.path;
        }

        await bookModel.findByIdAndUpdate(updateId, req.body);
        console.log("✅ Product updated successfully");
        return res.redirect('/view-book');

    } catch (err) {
        console.log(err);
        return res.redirect('/view-book');
    }
});

// ================= START SERVER =================
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error starting server:", err);
    }
    console.log(`🚀 Server started on http://localhost:${PORT}`);
});