import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import adminAuth from "../middlewares/adminAuth.js";

const adminRouter = Router();

// Auth routes
adminRouter.get('/login', adminController.loginPage);
adminRouter.post('/login', adminController.login);
adminRouter.get('/logout', adminController.logout);

// Employee routes
adminRouter.get('/createEmployee', adminAuth, adminController.createEmployeePage);
adminRouter.post('/createEmployee', adminAuth, adminController.createEmployee);
adminRouter.get('/viewEmployees', adminAuth, adminController.viewEmployeesPage);
adminRouter.get('/delete/:id', adminAuth, adminController.deleteEmployee);
adminRouter.get('/edit/:id', adminAuth, adminController.editEmployeePage);
adminRouter.post('/edit/:id', adminAuth, adminController.editEmployee);

// Task routes
adminRouter.get('/addTask', adminAuth, adminController.createTaskPage);
adminRouter.post('/addTask', adminAuth, adminController.createTask);
adminRouter.get('/viewTasks', adminAuth, adminController.viewTasksPage);

export default adminRouter;