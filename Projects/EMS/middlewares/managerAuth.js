import jwt from 'jsonwebtoken';
import envConfig from '../config/dotenv.js';

const JWT_SECRET = envConfig.JWT_SECRET || 'secret';

const managerAuth = (req, res, next) => {
    try {
        const token = req.cookies.managerToken;

        if (!token) {
            return res.redirect('/manager/login');
        }
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.role !== 'manager') {
            return res.redirect('/manager/login');
        }

        req.manager = decoded;
        req.managerId = decoded.id;
        res.locals.manager = decoded;
        res.locals.role = 'manager'; // For UI differentiation if needed

        next();

    } catch (error) {
        console.log('Manager auth error:', error.message);
        res.clearCookie('managerToken');
        return res.redirect('/manager/login');
    }
};

export default managerAuth;
