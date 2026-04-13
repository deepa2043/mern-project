const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🔹 MIDDLEWARE
app.use(cors());
app.use(express.json());

// 🔹 IMPORT ROUTES (HERE 👇)
const itemRoutes = require('./routes/itemRoutes');
const authRoutes = require('./routes/authRoutes');

// 🔹 USE ROUTES (HERE 👇)
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);

// 🔹 TEST ROUTE
app.get('/', (req, res) => {
    res.send('API Running...');
});

// 🔹 START SERVER
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});