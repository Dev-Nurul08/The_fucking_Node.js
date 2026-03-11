import userModel from "../model/userModel.js";

const auth = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.cookies.id);
        if (user) {
            req.user = user;
            next();
        } else {
            res.redirect('/login');
        }
    } catch {
        res.redirect('/login');
    }
}

export default auth;
