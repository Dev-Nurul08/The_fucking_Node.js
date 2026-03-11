import { Router } from "express";
import adminPanelController from "../controllers/adminPane.controller.js";
import auth from "../middleware/auth.js";
import imageUploads from "../middleware/imageUploads.js";

const adminRouter = Router();

adminRouter.get('/admin', auth, adminPanelController.adminDashboard);

adminRouter.get('/login', adminPanelController.loginPage);
adminRouter.post('/login', adminPanelController.loginUser);

adminRouter.get('/register', adminPanelController.registerPage);
adminRouter.post('/register', adminPanelController.registerUser);

adminRouter.get('/logout', auth, adminPanelController.logoutUser);  

adminRouter.get('/add-blog',auth, imageUploads, adminPanelController.addBlogPage);
adminRouter.post('/add-blog',auth, imageUploads, adminPanelController.addBlog);

adminRouter.get('/all-blogs', auth, adminPanelController.viewAllBlogs);
adminRouter.get('/delete-blog/:id', auth, adminPanelController.deleteBlog); 

adminRouter.get('/edit-blog/:id',auth, imageUploads, adminPanelController.editBlogPage);
adminRouter.post('/edit-blog/:id',auth, imageUploads, adminPanelController.updateBlog);

export default adminRouter;