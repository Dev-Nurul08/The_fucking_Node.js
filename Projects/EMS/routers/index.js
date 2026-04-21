import { Router } from "express";

import adminRouter from "./admin.route.js";
import adminController from "../controllers/admin.controller.js";
import adminAuth from "../middlewares/adminAuth.js";

import managerRouter from "./manager.route.js";

const router = Router();
router.get('/',adminAuth,adminController.dashboard)
router.use('/admin',adminRouter);
router.use('/manager', managerRouter);

export default router;