import { Router } from "express";
import { createExtraCategory, getAllExtraCategory, updateExtraCategory, deleteExtraCategory } from "../../controller/apiController/extraCategory.controller.js";
import imageUploads from "../../middleware/imageUploads.js";

const extraCategoryRouter = Router();

extraCategoryRouter.post('/', imageUploads, createExtraCategory)
extraCategoryRouter.get('/', getAllExtraCategory);
extraCategoryRouter.delete('/:id', deleteExtraCategory);
extraCategoryRouter.patch('/:id', imageUploads, updateExtraCategory)

export default extraCategoryRouter;
