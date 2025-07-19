import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Models
import User from './models/user.js';
import Product from './models/Product.js';

// Routes Import
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import contactRoutes from './routes/contactRoutes.js';


console.log(User, Product); // Just to use them

dotenv.config();

const app = express();
app.use(cors({
  origin: ['https://clickncart.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);


// ✅ Default Route
app.get('/', (req, res) => {
    res.send("API is running...");
});

// ✅ **Server Start**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
