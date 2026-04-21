import bcrypt from 'bcrypt';
import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee.model.js';
import Task from '../models/task.model.js';
import envConfig from '../config/dotenv.js';

const JWT_SECRET = envConfig.JWT_SECRET || 'secret';

const adminController = {
    async dashboard(req, res) {
        try {
            const employeeCount = await Employee.countDocuments();
            const taskCount = await Task.countDocuments();
            res.render('pages/admin/dashboard', {
                admin: req.admin,
                employeeCount,
                taskCount
            });
        } catch (error) {
            console.error(error);
            res.render('pages/admin/dashboard', {
                admin: req.admin,
                employeeCount: 0,
                taskCount: 0
            });
        }
    },
    loginPage(req, res) {
        res.render('pages/admin/login.ejs');
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.render('pages/admin/login.ejs', {
                    error: 'Email and password are required'
                });
            }

            const admin = await Admin.findOne({ email });
            if (!admin) {
                return res.render('pages/admin/login.ejs', {
                    error: 'Invalid email or password'
                });
            }

            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.render('pages/admin/login.ejs', {
                    error: 'Invalid email or password'
                });
            }

            const payload = {
                id: admin._id,
                name: admin.name,
                role: admin.role
            };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token);
            return res.redirect('/');
        } catch (error) {
            console.error(error);
            return res.render('pages/admin/login.ejs', {
                error: 'Something went wrong. Please try again.'
            });
        }
    },
    logout(req, res) {
        res.clearCookie('token');
        return res.redirect('/admin/login');
    },
    createEmployeePage(req, res) {
        res.render('pages/admin/createEmployee.ejs', { admin: req.admin });
    },
    async createEmployee(req, res) {
        try {
            const { name, email, password, role } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            await Employee.create({ name, email, password: hashedPassword, role: role || 'employee' });
            return res.redirect('/admin/viewEmployees');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating employee');
        }
    },
    async viewEmployeesPage(req, res) {
        try {
            const employees = await Employee.find();
            res.render('pages/admin/viewEmployees.ejs', { employees, admin: req.admin });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching employees');
        }
    },
    async deleteEmployee(req, res) {
        try {
            const { id } = req.params;
            await Employee.findByIdAndDelete(id);
            return res.redirect('/admin/viewEmployees');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting employee');
        }
    },
    async editEmployeePage(req, res) {
        try {
            const { id } = req.params;
            const employee = await Employee.findById(id);
            if (!employee) {
                return res.redirect('/admin/viewEmployees');
            }
            res.render('pages/admin/editEmployee.ejs', { employee, admin: req.admin });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching employee');
        }
    },
    async editEmployee(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password, role } = req.body;
            const updateData = { name, email, role };
            if (password) {
                updateData.password = await bcrypt.hash(password, 10);
            }
            await Employee.findByIdAndUpdate(id, updateData);
            return res.redirect('/admin/viewEmployees');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error updating employee');
        }
    },
    async createTaskPage(req, res) {
        try {
            const employees = await Employee.find({});
            res.render('pages/admin/addTask.ejs', { employees, admin: req.admin });
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
                createdby: req.adminId
            };
            await Task.create(taskData);
            return res.redirect('/admin/viewTasks');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating task');
        }
    },
    async viewTasksPage(req, res) {
        try {
            const tasks = await Task.find().populate('assignedTo').populate('createdby');
            res.render('pages/admin/viewTasks.ejs', { tasks, admin: req.admin });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching tasks');
        }
    }
};

export default adminController;