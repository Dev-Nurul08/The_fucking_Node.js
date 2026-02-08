# 📚 The Cozy Library Store

A full-stack Node.js web application for managing a personal book library with shopping cart functionality. Built with Express.js, MongoDB, and EJS templating.

## ✨ Features

- **📖 Book Management**
  - Add new books with cover images
  - Edit book details (title, author, publisher, price)
  - Delete books with automatic image cleanup
  - Upload and manage book cover images

- **🛒 Shopping Cart**
  - Add books to shopping cart
  - View cart with detailed item information
  - Remove items from cart
  - Order summary with total calculation
  - Persistent cart storage in MongoDB

- **🎨 User Interface**
  - Responsive Bootstrap 5 design
  - Beautiful UI with card-based layouts
  - Smooth animations and hover effects
  - Mobile-friendly navigation

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templating engine
- **Styling**: Bootstrap 5 + Custom CSS
- **File Upload**: Multer
- **Environment**: dotenv

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running (local or MongoDB Atlas)
- npm (Node Package Manager)

## 🚀 Installation

1. **Clone or download the project**
   ```bash
   cd Book_
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Update `.env` with your configuration:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/library_store
   ```

4. **Ensure MongoDB is running**
   - Local: Make sure MongoDB service is active
   - Cloud: Use MongoDB Atlas connection string in `.env`

5. **Start the application**
   ```bash
   npm start
   # or
   node index.js
   ```

6. **Access the application**
   - Open browser and go to `http://localhost:3000`

## 📁 Project Structure

```
Book_/
├── config/
│   ├── dotenv.js          # Environment configuration loader
│   └── db.js              # MongoDB connection setup
├── models/
│   ├── bookModel.js       # Book schema definition
│   └── cartModel.js       # Cart schema definition
├── middleware/
│   └── imageUploads.js    # Multer configuration for file uploads
├── views/
│   ├── index.ejs          # Home page (Add book + Cart sidebar)
│   ├── partials/
│   │   ├── header.ejs     # Navigation header
│   │   └── footer.ejs     # Footer
│   └── pages/
│       ├── view-book.ejs  # Library shelf display
│       ├── view-cart.ejs  # Shopping cart page
│       └── edit-book.ejs  # Edit book form
├── uploads/               # Uploaded book cover images
├── public/                # Static files (CSS, JS, images)
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (not committed)
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
└── index.js               # Main application server
```

## 🔌 API Routes

### Home & Books
- `GET /` - Home page with add book form and cart preview
- `POST /` - Create new book with image upload
- `GET /view-book` - View all books in collection
- `GET /book/edit/:id` - Edit book page
- `POST /book/update/:id` - Update book details
- `GET /book/delete/:id` - Delete book and remove image file

### Shopping Cart
- `GET /view-cart` - View full shopping cart
- `POST /book/cart/:id` - Add book to cart
- `GET /cart/delete/:id` - Remove item from cart

## 🗄️ Database Schema

### Book Model
```javascript
{
  name: String,          // Book title
  author: String,        // Author name
  publisher: String,     // Publisher name
  price: Number,         // Book price
  image: String,         // Image file path
  createdAt: Date        // Creation timestamp
}
```

### Cart Model
```javascript
{
  name: String,          // Book title
  author: String,        // Author name
  publisher: String,     // Publisher name
  price: Number,         // Book price
  image: String,         // Image file path
  addedAt: Date          // Addition timestamp
}
```

## 📤 File Upload

The application uses Multer for file uploads with the following settings:
- **Allowed formats**: JPG, JPEG, PNG
- **Max file size**: 5MB
- **Upload directory**: `./uploads/`
- **File naming**: Timestamp + random number + extension

## 🎯 Usage Examples

### Adding a Book
1. Navigate to home page (/)
2. Fill in book details (Title, Author, Publisher, Price)
3. Upload a cover image
4. Click "Add Product to Database"

### Viewing Books
1. Go to "View Shelf" in navigation
2. Browse all books in grid layout
3. See book details and price
4. Add to cart or edit/delete books

### Managing Cart
1. Click "Cart" in navigation
2. View all items with images
3. See order summary and total price
4. Remove items as needed

## 🔒 Security Notes

- Image uploads are restricted to image formats only
- File size limits prevent large uploads
- MongoDB queries use Mongoose to prevent injection
- Always keep `.env` file private and never commit it

## 🚀 Future Enhancements

- User authentication and accounts
- Search and filter books
- Book ratings and reviews
- Checkout and payment processing
- Email notifications
- Admin dashboard
- Book categories/genres
- Advanced search filters

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/library_store |

## ⚠️ Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod` (local) or check connection string (Atlas)
- Verify `MONGO_URI` in `.env` file
- Check network connectivity for MongoDB Atlas

### Image Upload Issues
- Ensure `uploads/` directory exists
- Check file size (max 5MB)
- Verify file format (JPG, JPEG, PNG only)
- Check write permissions on uploads directory

### Port Already in Use
- Change `PORT` in `.env` file
- Or kill process using the port: `lsof -i :3000` (Mac/Linux)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with Node.js, Express.js, and MongoDB

## 💡 Tips

- Use MongoDB Compass for database visualization
- Keep images optimized for faster loading
- Backup your MongoDB database regularly
- Use MongoDB Atlas for cloud-hosted database

---

**Happy Reading! 📖**
