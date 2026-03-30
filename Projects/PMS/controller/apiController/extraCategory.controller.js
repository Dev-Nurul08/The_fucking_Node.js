import fs from "fs";
import extraCategoryModel from "../../models/extraCategoryModel.js";

export const createExtraCategory = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
        }
        const extraCategory = await extraCategoryModel.create(req.body);
        return res.json(extraCategory);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const getAllExtraCategory = async (req, res) => {
    try {
        const extraCategories = await extraCategoryModel.find({});
        return res.json(extraCategories);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const deleteExtraCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const dltExtraCategory = await extraCategoryModel.findByIdAndDelete(id);
        if (dltExtraCategory && dltExtraCategory.image && fs.existsSync(dltExtraCategory.image)) {
            fs.unlinkSync(dltExtraCategory.image);
        }
        return res.json(dltExtraCategory);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const updateExtraCategory = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.file) {
            req.body.image = req.file.path;
        }

        const update = await extraCategoryModel.findByIdAndUpdate(id, req.body);
        if (req.file && update && update.image && fs.existsSync(update.image)) {
            fs.unlinkSync(update.image);
        }

        return res.json({ message: "success" });
    } catch (error) {
        return res.json({ error: error.message })
    }
}
