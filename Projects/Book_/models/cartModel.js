import mongoose from "mongoose";

/**
 * Cart Schema
 * Stores shopping cart items (copies of book data)
 */
const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publisher: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
