import { Router } from "express";
import imageUploads from "../middleware/imageUploads.js";
import { 
  dashboard, addProduct, viewProducts, addCategory, addSubCategory, addExtraCategory, viewCategory, viewSubCategory, viewExtraCategory,
  addCategoryAction, updateCategoryAction, deleteCategoryAction,
  addSubCategoryAction, updateSubCategoryAction, deleteSubCategoryAction,
  addExtraCategoryAction, updateExtraCategoryAction, deleteExtraCategoryAction,
  addProductAction, updateProductAction, deleteProductAction
} from "../controller/admin.controller.js";

const adminRouter = Router();

adminRouter.get('/', dashboard);

// View Rendering Routes
adminRouter.get('/add-product', addProduct);
adminRouter.get('/view-products', viewProducts);
adminRouter.get('/add-category', addCategory);
adminRouter.get('/add-subcategory', addSubCategory);
adminRouter.get('/add-extracategory', addExtraCategory);
adminRouter.get('/view-category', viewCategory);
adminRouter.get('/view-subcategory', viewSubCategory);
adminRouter.get('/view-extracategory', viewExtraCategory);

// Action Routes (No frontend JS)
adminRouter.post('/add-category', imageUploads, addCategoryAction);
adminRouter.post('/update-category/:id', imageUploads, updateCategoryAction);
adminRouter.get('/delete-category/:id', deleteCategoryAction);

adminRouter.post('/add-subcategory', imageUploads, addSubCategoryAction);
adminRouter.post('/update-subcategory/:id', imageUploads, updateSubCategoryAction);
adminRouter.get('/delete-subcategory/:id', deleteSubCategoryAction);

adminRouter.post('/add-extracategory', imageUploads, addExtraCategoryAction);
adminRouter.post('/update-extracategory/:id', imageUploads, updateExtraCategoryAction);
adminRouter.get('/delete-extracategory/:id', deleteExtraCategoryAction);

adminRouter.post('/add-product', imageUploads, addProductAction);
adminRouter.post('/update-product/:id', imageUploads, updateProductAction);
adminRouter.get('/delete-product/:id', deleteProductAction);

export default adminRouter;