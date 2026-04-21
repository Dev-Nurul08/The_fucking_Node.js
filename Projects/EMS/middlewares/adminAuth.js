import jwt from 'jsonwebtoken';
import envConfig from '../config/dotenv.js';

const JWT_SECRET = envConfig.JWT_SECRET || 'secret';

const adminAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.redirect('/admin/login');
        }
        const decoded = jwt.verify(token, JWT_SECRET);

        req.admin = decoded;
        req.adminId = decoded.id;
        res.locals.admin = decoded;
        res.locals.role = 'admin';

        next();

    } catch (error) {
        console.log('Auth error:', error.message);
        res.clearCookie('token');
        return res.redirect('/admin/login');
    }
};

export default adminAuth;