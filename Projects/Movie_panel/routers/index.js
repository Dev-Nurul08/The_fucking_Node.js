

import { Router } from "express";
import adminRouter from "./admin.route.js";
import adminController from "../controller/admin.controller.js";


const router = Router();

router.get('/', adminController.homePages); 
router.use('/admin', adminRouter); // Use the admin router for /admin routes  
router.use('/addMovie', adminRouter); // Use the admin router for /addMovie routes 
router.use('/viewMovie', adminRouter); // Use the admin router for /addMovie routes 

export default router;