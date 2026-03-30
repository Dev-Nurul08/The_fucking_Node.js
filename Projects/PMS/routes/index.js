import { Router } from "express";
import apiRouter from "./api/index.js";
import adminRouter from "./admin.route.js";

const router = Router();

router.use('/api', apiRouter);
router.use('/admin', adminRouter);

export default router;