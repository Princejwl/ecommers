import express from 'express';
import Product from '../models/Product.js'; // Import Product model

const router = express.Router();

// **Get All Products**
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Database se sabhi products fetch karein
        res.json(products); // JSON format me response bhejein
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// **Get Single Product**
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // ID ke basis pe product fetch karein
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// **Create Product**
router.post('/', async (req, res) => {
    try {
        const { name, price, description, image } = req.body;
        const newProduct = new Product({ name, price, description, image });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: "Error creating product" });
    }
});
 

export default router;
