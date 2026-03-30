import { Router } from "express";
import userRouter from "./user.route.js";
import productRouter from "./product.route.js";
import categoryRouter from "./category.route.js";
import subCategoryRouter from "./subCategory.route.js";
import extraCategoryRouter from "./extraCategory.route.js";

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/category', categoryRouter);
apiRouter.use('/subcategory', subCategoryRouter);
apiRouter.use('/extracategory', extraCategoryRouter);

export default apiRouter;