import productModel from "../../models/productModel.js"
import fs from "fs";

export const creatProduct = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
        }
        const product = await productModel.create(req.body);
        return res.json(product);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category').populate('subcategory').populate('extracategory');
        return res.json(products);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const dltProduct = await productModel.findByIdAndDelete(id);
        if (dltProduct && dltProduct.image && fs.existsSync(dltProduct.image)) {
            fs.unlinkSync(dltProduct.image);
        }
        return res.json(dltProduct);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.file) {
            req.body.image = req.file.path;
        }

        const update = await productModel.findByIdAndUpdate(id, req.body);
        if (req.file && update && update.image && fs.existsSync(update.image)) {
            fs.unlinkSync(update.image);
        }

        return res.json({ message: "success" });
    } catch (error) {
        return res.json({ error: error.message })
    }
}