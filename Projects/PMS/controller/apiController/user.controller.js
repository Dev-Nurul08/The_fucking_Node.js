import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { envConfig } from "../../config/dotenv.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
    try {
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const user = await userModel.create(req.body);
        return res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            envConfig.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.json({ 
            message: 'Login successful', 
            token, 
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email, 
                role: user.role 
            } 
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getAllUser = async (req, res) => {
    try {
        let users = await userModel.find({});
        return res.json(users);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        return res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const dltUser = await userModel.findByIdAndDelete(id);
        return res.json(dltUser);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

let OTP = null;

export const verifyEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email });

        if (user) {
            OTP = Math.floor(10000 + Math.random() * 900000);

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                port: 587,
                secure: false,
                auth: {
                    user: 'shaikhnurul8200@gmail.co',
                    pass: envConfig.USER_KEY
                }
            })

            const info = await transporter.sendMail({
                from: 'saixerox5075@gmail.com',
                to: email,
                subject: 'OTP for Change Password',
                html: `
                        <h2>${user.name}</h2>
                        <p><strong>${OTP}</strong></p>
                    `
            })

            return res.json({ message: 'OTP Sent' })
        }
    } catch (error) {
        return res.json({ message: 'error', error: error.message });
    }
}

export const verifyOTP = (req, res) => {
    if (req.body.otp == OTP) {
        return res.json({ message: 'OTP Verified' });
    } else {
        return res.json({ message: 'OTP Not Match' });
    }
}