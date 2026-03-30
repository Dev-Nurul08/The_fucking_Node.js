import { envConfig } from "../config/dotenv.js";
import fs from 'fs';
import { Blob } from 'buffer';

const apiBase = `http://localhost:${envConfig.PORT || 3000}/api`;

const handleApiProxy = async (endpoint, req, res, redirectUrl, method = 'POST') => {
    try {
        let options = { method };
        if (['POST', 'PATCH'].includes(method)) {
            const formData = new FormData();
            for (const key in req.body) {
                formData.append(key, req.body[key]);
            }
            if (req.file) {
                const buffer = fs.readFileSync(req.file.path);
                const blob = new Blob([buffer], { type: req.file.mimetype });
                formData.append('image', blob, req.file.originalname);
            }
            options.body = formData;
        }

        await fetch(`${apiBase}/${endpoint}`, options);
        res.redirect(redirectUrl);
    } catch (err) {
        console.error("API Proxy Error:", err);
        res.redirect('back');
    }
};

export const addCategoryAction = (req, res) => handleApiProxy('category', req, res, '/admin/view-category', 'POST');
export const updateCategoryAction = (req, res) => handleApiProxy(`category/${req.params.id}`, req, res, '/admin/view-category', 'PATCH');
export const deleteCategoryAction = (req, res) => handleApiProxy(`category/${req.params.id}`, req, res, '/admin/view-category', 'DELETE');

export const addSubCategoryAction = (req, res) => handleApiProxy('subcategory', req, res, '/admin/view-subcategory', 'POST');
export const updateSubCategoryAction = (req, res) => handleApiProxy(`subcategory/${req.params.id}`, req, res, '/admin/view-subcategory', 'PATCH');
export const deleteSubCategoryAction = (req, res) => handleApiProxy(`subcategory/${req.params.id}`, req, res, '/admin/view-subcategory', 'DELETE');

export const addExtraCategoryAction = (req, res) => handleApiProxy('extracategory', req, res, '/admin/view-extracategory', 'POST');
export const updateExtraCategoryAction = (req, res) => handleApiProxy(`extracategory/${req.params.id}`, req, res, '/admin/view-extracategory', 'PATCH');
export const deleteExtraCategoryAction = (req, res) => handleApiProxy(`extracategory/${req.params.id}`, req, res, '/admin/view-extracategory', 'DELETE');

export const addProductAction = (req, res) => handleApiProxy('product', req, res, '/admin/view-products', 'POST');
export const updateProductAction = (req, res) => handleApiProxy(`product/${req.params.id}`, req, res, '/admin/view-products', 'PATCH');
export const deleteProductAction = (req, res) => handleApiProxy(`product/${req.params.id}`, req, res, '/admin/view-products', 'DELETE');

export const dashboard = async (req, res) => {
    const productsRes = await fetch(`${apiBase}/product`);
    const products = await productsRes.json();
    const categoriesRes = await fetch(`${apiBase}/category`);
    const categories = await categoriesRes.json();
    res.render('pages/dashboard', { productsCount: products.length || 0, categoriesCount: categories.length || 0 });
};

export const addProduct = async (req, res) => {
    const categories = await (await fetch(`${apiBase}/category`)).json();
    const subCategories = await (await fetch(`${apiBase}/subcategory`)).json();
    const extraCategories = await (await fetch(`${apiBase}/extracategory`)).json();
    res.render('pages/add-product', { categories, subCategories, extraCategories });
};

export const viewProducts = async (req, res) => {
    const products = await (await fetch(`${apiBase}/product`)).json();
    const categories = await (await fetch(`${apiBase}/category`)).json();
    const subCategories = await (await fetch(`${apiBase}/subcategory`)).json();
    const extraCategories = await (await fetch(`${apiBase}/extracategory`)).json();
    res.render('pages/view-products', { products, categories, subCategories, extraCategories });
};

export const addCategory = (req, res) => {
    res.render('pages/add-category');
};

export const addSubCategory = (req, res) => {
    res.render('pages/add-subcategory');
};

export const addExtraCategory = (req, res) => {
    res.render('pages/add-extracategory');
};

export const viewCategory = async (req, res) => {
    const categories = await (await fetch(`${apiBase}/category`)).json();
    res.render('pages/view-category', { categories });
};

export const viewSubCategory = async (req, res) => {
    const subCategories = await (await fetch(`${apiBase}/subcategory`)).json();
    res.render('pages/view-subcategory', { subCategories });
};

export const viewExtraCategory = async (req, res) => {
    const extraCategories = await (await fetch(`${apiBase}/extracategory`)).json();
    res.render('pages/view-extracategory', { extraCategories });
};