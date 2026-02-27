# 🎬 FilmVault

A modern, intuitive movie collection management platform. Organize, manage, and celebrate your favorite films with FilmVault — your personal cinema vault.

![FilmVault UI](https://img.shields.io/badge/UI-Modern%20%26%20Responsive-6366f1?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-13aa52?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)


<h1>Filvault Link  :  (https://the-fucking-node-js-1.onrender.com)</h1>

---

## ✨ Features

🎯 **Smart Organization**
- Organize films by genre, rating, year, and personal categories
- Keep your collection perfectly structured and accessible

⚡ **Quick Management**
- Add, edit, or delete movies in seconds
- Intuitive interface for seamless movie management
- Drag-and-drop movie cards for easy organization

🔎 **Powerful Search & Filter**
- Find any movie instantly with advanced search
- Filter by genre, rating, and other criteria
- Discover what you want to watch in moments

🎬 **Movie Posters & Metadata**
- Upload and display movie posters
- Store detailed information: title, genre, synopsis, rating
- Quick access to all movie details

👤 **User Accounts**
- Secure authentication with login/signup
- Personal movie collections for each user
- Encrypted password storage

✨ **Modern UI/UX**
- Beautiful gradient design with modern aesthetics
- Fully responsive on mobile, tablet, and desktop
- Smooth animations and micro-interactions
- Professional component library

---

## 🛠️ Tech Stack

### **Frontend**
- **EJS** - Templating engine for dynamic HTML
- **HTML5/CSS3** - Modern, responsive styling
- **JavaScript (Vanilla)** - Interactive features without jQuery
- **Responsive Design** - Mobile-first approach

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for routing and middleware
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - ODM for MongoDB validation and modeling
- **Multer** - File upload middleware for movie posters

### **Security & Environment**
- **dotenv** - Environment variable management
- **bcrypt** - Password hashing and encryption
- **CORS** - Cross-origin resource sharing
- **Express Validator** - Input validation

---

## 📋 Project Structure

```
Movie_panel/
├── config/                 # Configuration files
│   ├── database.js        # MongoDB connection setup
│   └── dotenv.js          # Environment variables loader
├── controller/            # Business logic controllers
│   ├── admin.controller.js    # Admin/home controller
│   ├── auth.controller.js     # Authentication logic
│   └── movie.controller.js    # Movie CRUD operations
├── models/                # Mongoose schemas
│   ├── movieModel.js      # Movie schema definition
│   └── userModel.js       # User schema definition
├── middleware/            # Custom middleware
│   └── imageUploads.js    # Image upload configuration
├── routers/               # Route handlers
│   ├── admin.route.js     # Admin routes
│   ├── auth.route.js      # Authentication routes
│   ├── movie.route.js     # Movie CRUD routes
│   └── index.js           # Route aggregator
├── views/                 # EJS templates
│   ├── index.ejs          # Home page
│   ├── pages/             # Page templates
│   │   ├── login.ejs      # Login page
│   │   ├── sign-up.ejs    # Signup page
│   │   ├── add-movie.ejs  # Add movie form
│   │   ├── edit-movie.ejs # Edit movie form
│   │   └── view-movie.ejs # Browse movies
│   └── partials/          # Reusable components
│       ├── header.ejs     # Navigation & header
│       └── footer.ejs     # Footer component
├── public/
│   ├── styles.css         # Modern stylesheet (1200+ lines)
│   └── uploads/           # Movie poster storage
├── index.js               # Application entry point
├── package.json           # Dependencies & scripts
├── jsconfig.json          # JS config for IDE
└── .env                   # Environment variables (not in repo)
```

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js v18 or higher
- MongoDB (local or Atlas)
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone <repository-url>
cd Movie_panel
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
# Server
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/filmvault

# Session Secret
SESSION_SECRET=your_secret_key_here

# App Settings
APP_NAME=FilmVault
```

4. **Start the application**
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

5. **Access the application**
Open your browser and navigate to: `http://localhost:3000`

---

## 📖 Usage

### **Getting Started**
1. **Sign Up**: Create a new account on the signup page
2. **Add Movies**: Click "Add Movie" to add films to your collection
3. **Browse**: View all your movies on the Browse page with search & filter
4. **Manage**: Edit or delete movies as needed
5. **Organize**: Keep your collection organized by genre and rating

### **Main Features**

**🏠 Home Page**
- Welcome screen with collection overview
- Quick links to browse and add movies
- Display of collection statistics

**➕ Add Movie**
- Enter movie title, genre, synopsis
- Rate with star ratings (1-5 stars)
- Upload movie poster (PNG, JPG, WEBP up to 5MB)
- Instant collection addition

**🎬 Browse Movies**
- View all movies in your collection
- Real-time search by title or genre
- Filter by genre with quick access filters
- Movie cards with poster, title, genre, synopsis
- Edit/Delete individual movies

**✏️ Edit Movie**
- Update any movie details
- Change genre or rating
- Upload new poster
- Instant save with AJAX

**🔐 Authentication**
- Secure login/signup system
- Personal movie collections per user
- Encrypted password storage
- Session-based authentication

---

## 🎨 Design System

### **Color Palette**
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Dark**: `#0f172a` (Very Dark Blue)
- **Light**: `#f8fafc` (Off White)

### **Typography**
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Sizes**: Responsive using `clamp()`

### **Components**
- **Buttons**: Primary, Ghost, Edit, Delete with hover effects
- **Cards**: Movie cards with image preview and actions
- **Forms**: Modern input fields with focus states
- **Navigation**: Sticky header with gradient background
- **Footer**: Multi-section professional footer

---

## 🔌 API Endpoints

### **Authentication**
- `POST /auth/login` - User login
- `POST /auth/register` - User signup
- `GET /auth/logout` - User logout

### **Movies**
- `GET /movies/view-movies` - Get all user movies
- `POST /movies/add-movies` - Create new movie
- `GET /movies/edit-movies/:id` - Get movie edit page
- `PUT /movies/update-movie/:id` - Update movie details
- `DELETE /movies/delete-movie/:id` - Delete movie

### **Admin**
- `GET /admin` - Dashboard/home page
- `GET /` - Redirect to admin

---

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

All pages are fully responsive with:
- Flexible grid layouts
- Touch-friendly buttons and inputs
- Optimized navigation for mobile
- Adaptive font sizes using `clamp()`

---

## 🔒 Security Features

✅ **Password Security**
- Bcrypt hashing for password encryption
- Minimum 8 characters required
- Must include uppercase, lowercase, digit, special character

✅ **Input Validation**
- Server-side validation on all inputs
- Client-side validation for better UX
- Sanitization of form data

✅ **File Upload Security**
- MIME type validation (images only)
- File size limits (max 5MB)
- Storage in isolated uploads directory

✅ **Session Management**
- Secure session tokens
- Optional remember-me functionality
- Automatic logout after inactivity

---

## 🐛 Troubleshooting

### **MongoDB Connection Issues**
- Verify MongoDB URI in `.env`
- Check network access in MongoDB Atlas
- Ensure IP whitelist includes your IP

### **File Upload Errors**
- Check file size (max 5MB)
- Verify file type (PNG, JPG, WEBP only)
- Ensure `uploads/` directory has write permissions

### **Port Already in Use**
- Change `PORT` in `.env`
- Or kill process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### **Page Not Loading**
- Clear browser cache (Ctrl+Shift+Del)
- Check browser console for errors (F12)
- Restart the server

---

## 📦 Dependencies

### **Core**
- `express` - Web framework
- `ejs` - Template engine
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables
- `cors` - Cross-origin requests

### **Security**
- `bcryptjs` - Password hashing
- `express-validator` - Input validation

### **File Handling**
- `multer` - File upload middleware
- `sharp` - Image processing (optional)

### **Development**
- `nodemon` - Auto-restart on file changes

---

## 📝 Environment Variables

```env
# Application
PORT=3000
NODE_ENV=development
APP_NAME=FilmVault

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/filmvault

# Security
SESSION_SECRET=your-secret-key
JWT_SECRET=your-jwt-secret

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes
```

---

## 🚀 Deployment

### **Heroku**
1. Add Procfile:
   ```
   web: node index.js
   ```
2. Set environment variables in Heroku dashboard
3. Deploy: `git push heroku main`

### **Vercel (Frontend Only)**
1. Export views and public as static
2. Deploy Node backend separately

### **VPS/Self-Hosted**
1. Install Node.js on server
2. Clone repository
3. Install dependencies
4. Configure `.env` with production values
5. Use `pm2` for process management:
   ```bash
   npm install -g pm2
   pm2 start index.js --name "filmvault"
   ```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Your Name** - *Full Stack Developer*

- GitHub: [@yourprofile](https://github.com)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- **Icons**: SVG icons from the community
- **Fonts**: Google Fonts (Poppins)
- **Inspiration**: Modern SaaS applications
- **Community**: Express.js and MongoDB communities

---

## 📞 Support

For support, email support@filmvault.com or open an issue on GitHub.

---

## ❤️ Show Your Support

Give a ⭐ if this project helped you!

---

**Last Updated**: February 27, 2026
**Version**: 1.0.0
**Status**: Active Development
