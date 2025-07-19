import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.js';

dotenv.config(); // ✅ Ensure environment variables are loaded

const router = express.Router();

// ✅ User Registration Route
router.post('/register', async (req, res) => {
    try {
        console.log("🔹 Register API hit"); // ✅ Debugging log

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save();
        console.log("✅ New user registered:", newUser); // ✅ Debugging log

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("❌ Registration Error:", error); // ✅ Debugging log
        res.status(500).json({ message: "Server Error" });
    }
});

// ✅ User Login Route
router.post('/login', async (req, res) => {
    try {
        console.log("🔹 Login API hit"); // ✅ Debugging log

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user });
    } catch (error) {
        console.error("❌ Login Error:", error); // ✅ Debugging log
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
