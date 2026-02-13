import { Router } from "express";
import adminController from "../controller/admin.controller.js";

const router = Router();


router.get('/admin', adminController.adminPage);


export default router;