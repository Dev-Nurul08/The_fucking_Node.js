<div align="center">

# 📝 BlogSpot

#[Live LInk] (https://blog-with-cookies.onrender.com)


### A Modern Blog Management Platform

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-Template-B4CA65?style=for-the-badge&logo=ejs&logoColor=white)](https://ejs.co/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

A full-featured blog management system built with **Node.js**, **Express 5**, and **MongoDB**. Create, edit, and manage blog posts through a beautiful admin dashboard powered by the **Matrix Admin** template.

---

[Features](#-features) •
[Tech Stack](#-tech-stack) •
[Getting Started](#-getting-started) •
[Project Structure](#-project-structure) •
[API Routes](#-api-routes) •
[Contributing](#-contributing)

</div>

---

## ✨ Features

| Feature                  | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| 🔐 **Authentication**    | Secure user registration & login with bcrypt password hashing |
| 📝 **Blog CRUD**         | Create, read, update, and delete blog posts                   |
| 📸 **Image Uploads**     | Upload blog cover images via Multer                           |
| 🎨 **Admin Dashboard**   | Beautiful Matrix Admin template with responsive sidebar       |
| 🍪 **Cookie-based Auth** | Persistent sessions using secure cookies                      |
| 🛡️ **Route Protection**  | Auth middleware guards all admin routes                       |
| 📱 **Responsive Design** | Mobile-friendly UI out of the box                             |

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><b>Backend</b></td>
<td align="center"><b>Database</b></td>
<td align="center"><b>Frontend</b></td>
<td align="center"><b>Tools</b></td>
</tr>
<tr>
<td>

- Node.js
- Express 5
- Body Parser
- Cookie Parser
- Multer
- Bcrypt

</td>
<td>

- MongoDB Atlas
- Mongoose ODM

</td>
<td>

- EJS Templates
- Bootstrap 4
- Matrix Admin UI
- jQuery

</td>
<td>

- Nodemon
- Dotenv
- Morgan

</td>
</tr>
</table>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)
- **[MongoDB Atlas](https://www.mongodb.com/atlas)** account (free tier works)
- **[Git](https://git-scm.com/)**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Node-PR-07-BlogSpot.git
cd Node-PR-07-BlogSpot
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then open `.env` and fill in your values:

```env
PORT=8081
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
```

> [!IMPORTANT]
> Make sure your IP address is **whitelisted** in MongoDB Atlas under **Network Access**. For development, you can allow access from anywhere (`0.0.0.0/0`).

### 4️⃣ Create Uploads Directory

```bash
mkdir uploads
```

### 5️⃣ Start the Development Server

```bash
npm run dev
```

### 6️⃣ Open in Browser 🎉

```
http://localhost:8081/login
```

> [!TIP]
> First time? Go to `/register` to create your account, then log in to access the admin dashboard.

---

## 📁 Project Structure

```
Node-Blog_web/
│
├── config/
│   ├── databse.js          # MongoDB connection setup
│   └── dotenv.js           # Environment variable configuration
│
├── controllers/
│   └── adminPane.controller.js  # All route handlers (auth, blogs)
│
├── middleware/
│   ├── auth.js             # Authentication middleware
│   └── imageUploads.js     # Multer image upload config
│
├── model/
│   ├── userModel.js        # User schema (username, email, password)
│   └── blogModel.js        # Blog schema (title, image, description, author, date)
│
├── public/                 # Static assets (CSS, JS, images - Matrix Admin)
│
├── routes/
│   ├── index.js            # Root router
│   └── adminPanel.route.js # All app routes
│
├── uploads/                # Uploaded blog images (auto-created)
│
├── views/
│   ├── index.ejs           # Admin dashboard
│   ├── partials/
│   │   ├── header.ejs      # Navbar + sidebar
│   │   └── footer.ejs      # Footer + scripts
│   └── pages/
│       ├── login.ejs       # Login page
│       ├── register.ejs    # Registration page
│       ├── add-blog.ejs    # Create new blog form
│       ├── edit-blog.ejs   # Edit existing blog form
│       └── view-blog.ejs   # All blogs (card layout)
│
├── .env                    # Environment variables (not committed)
├── .env.example            # Environment template
├── .gitignore
├── index.js                # App entry point
└── package.json
```

---

## 🔗 API Routes

### 🔓 Public Routes

| Method | Route       | Description        |
| ------ | ----------- | ------------------ |
| `GET`  | `/login`    | Login page         |
| `POST` | `/login`    | Authenticate user  |
| `GET`  | `/register` | Registration page  |
| `POST` | `/register` | Create new account |

### 🔒 Protected Routes (Requires Authentication)

| Method | Route              | Description              |
| ------ | ------------------ | ------------------------ |
| `GET`  | `/admin`           | Admin dashboard          |
| `GET`  | `/logout`          | Logout and clear session |
| `GET`  | `/add-blog`        | Add blog form            |
| `POST` | `/add-blog`        | Create new blog post     |
| `GET`  | `/all-blogs`       | View all blogs (cards)   |
| `GET`  | `/edit-blog/:id`   | Edit blog form           |
| `POST` | `/edit-blog/:id`   | Update blog post         |
| `GET`  | `/delete-blog/:id` | Delete a blog post       |

---

## 📜 Available Scripts

| Script    | Command       | Description                      |
| --------- | ------------- | -------------------------------- |
| **Dev**   | `npm run dev` | Start with Nodemon (auto-reload) |
| **Start** | `npm start`   | Start in production mode         |

---

## ⚙️ Environment Variables

| Variable      | Description               | Example                                              |
| ------------- | ------------------------- | ---------------------------------------------------- |
| `PORT`        | Server port number        | `8081`                                               |
| `MONGODB_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

**Made with ❤️ by Nurul**

⭐ Star this repo if you found it helpful!

</div>
