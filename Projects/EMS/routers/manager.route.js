import { Router } from "express";
import managerController from "../controllers/manager.controller.js";
import managerAuth from "../middlewares/managerAuth.js";

const managerRouter = Router();

managerRouter.get('/', managerAuth, managerController.dashboard);
managerRouter.get('/login', managerController.loginPage);
managerRouter.post('/login', managerController.login);
managerRouter.get('/logout', managerController.logout);

managerRouter.get('/viewEmployees', managerAuth, managerController.viewEmployeesPage);
managerRouter.get('/addTask', managerAuth, managerController.createTaskPage);
managerRouter.post('/addTask', managerAuth, managerController.createTask);
managerRouter.get('/viewTasks', managerAuth, managerController.viewTasksPage);

export default managerRouter;
