import blogModel from "../model/blogModel.js";
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";

const adminPanelController = {
    adminDashboard(req, res) {
        res.render('index');
    },
    loginPage(req, res) {
        res.render('./pages/login');
    },

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;

            const user = await userModel.findOne({ email });
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    res.cookie('id', user.id);
                    return res.redirect('/admin');
                } else {
                    return res.redirect('/login');
                }
            } else {
                return res.redirect('/login');
            }
        } catch (error) {
            console.log('Login error:', error.message);
            return res.redirect('/login');
        }
    },

    registerPage(req, res) {
        res.render('./pages/register');
    },
    async registerUser(req, res) {
        try {
            const { username, email, password, confirmPassword } = req.body;

            if (password == confirmPassword) {
                const hashedPassword = await bcrypt.hash(password, 10);
                await userModel.create({ username, email, password: hashedPassword });
                return res.redirect('/login');
            } else {
                return res.redirect('/register');
            }
        } catch (error) {
            console.log('Register error:', error.message);
            return res.redirect('/register');
        }
    },

    logoutUser(req, res) {
        res.clearCookie('id');
        return res.redirect('/login');
    },

    addBlogPage(req, res) {
        res.render('./pages/add-blog');
    },
    async addBlog(req, res) {
        try {
            req.body.image = req.file.path;
            await blogModel.create(req.body);
            return res.redirect('/all-blogs');
        } catch (error) {
            console.log('Add blog error:', error.message);
            return res.redirect('/add-blog');
        }
    },

    async viewAllBlogs(req, res) {
        try {
            const blogs = await blogModel.find().sort({ date: -1 });
            res.render('./pages/view-blog', { blogs });
        } catch (error) {   
            console.log('View blogs error:', error.message);
            res.render('./pages/view-blog', { blogs: [] });
        }
    },

    async deleteBlog(req, res) {
        try {
            await blogModel.findByIdAndDelete(req.params.id);
            return res.redirect('/all-blogs');
        } catch (error) {
            console.log('Delete blog error:', error.message);
            return res.redirect('/all-blogs');
        }
    },

    async editBlogPage(req, res) {
        try {
            const blog = await blogModel.findById(req.params.id);
            if (!blog) return res.redirect('/all-blogs');
            res.render('./pages/edit-blog', { blog });
        } catch (error) {
            console.log('Edit blog page error:', error.message);
            return res.redirect('/all-blogs');
        }
    },

    async updateBlog(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }
            await blogModel.findByIdAndUpdate(req.params.id, req.body);
            return res.redirect('/all-blogs');
        } catch (error) {
            console.log('Update blog error:', error.message);
            return res.redirect('/edit-blog/' + req.params.id);
        }
    }
}

export default adminPanelController;