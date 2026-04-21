import bcrypt from 'bcrypt';
import Employee from '../models/employee.model.js';
import Task from '../models/task.model.js';
import jwt from 'jsonwebtoken';
import envConfig from '../config/dotenv.js';

const JWT_SECRET = envConfig.JWT_SECRET || 'secret';

const managerController = {
    async dashboard(req, res) {
        try {
            const employeeCount = await Employee.countDocuments();
            const taskCount = await Task.countDocuments();
            res.render('pages/admin/dashboard', {
                admin: req.manager,
                employeeCount,
                taskCount,
                role: res.locals.role
            }); 
        } catch (error) {
            console.error(error);
            res.render('pages/admin/dashboard', {
                admin: req.manager,
                employeeCount: 0,
                taskCount: 0,
                role: res.locals.role
            });
        }
    },
    loginPage(req, res) {
        res.render('pages/admin/login.ejs', { error: null, actionUrl: '/manager/login' }); 
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.render('pages/admin/login.ejs', {
                    error: 'Email and password are required', actionUrl: '/manager/login'
                });
            }

            const manager = await Employee.findOne({ email, role: 'manager' });
            if (!manager) {
                return res.render('pages/admin/login.ejs', {
                    error: 'Invalid manager email or password', actionUrl: '/manager/login'
                });
            }

            const isMatch = await bcrypt.compare(password, manager.password);
            if (!isMatch) {
                return res.render('pages/admin/login.ejs', {
                    error: 'Invalid email or password', actionUrl: '/manager/login'
                });
            }

            const payload = {
                id: manager._id,
                name: manager.name,
                role: manager.role
            };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('managerToken', token);
            return res.redirect('/manager');
        } catch (error) {
            console.error(error);
            return res.render('pages/admin/login.ejs', {
                error: 'Something went wrong. Please try again.', actionUrl: '/manager/login'
            });
        }
    },
    logout(req, res) {
        res.clearCookie('managerToken');
        return res.redirect('/manager/login');
    },
    async viewEmployeesPage(req, res) {
        try {
            const employees = await Employee.find();
            res.render('pages/admin/viewEmployees.ejs', { employees, admin: req.manager, role: res.locals.role });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching employees');
        }
    },
    async createTaskPage(req, res) {
        try {
            const employees = await Employee.find({});
            res.render('pages/admin/addTask.ejs', { employees, admin: req.manager, role: res.locals.role });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching employees');
        }
    },
    async createTask(req, res) {
        try {
            const { name, description, assignedTo } = req.body;
            const taskData = {
                name,
                description,
                assignedTo: assignedTo || undefined,
                createdby: req.managerId
            };
            await Task.create(taskData);
            return res.redirect('/manager/viewTasks');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating task');
        }
    },
    async viewTasksPage(req, res) {
        try {
            const tasks = await Task.find().populate('assignedTo').populate('createdby');
            res.render('pages/admin/viewTasks.ejs', { tasks, admin: req.manager, role: res.locals.role });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching tasks');
        }
    }
};

export default managerController;
