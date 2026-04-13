const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // ⚠️ important

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email !== "test@gmail.com" || password !== "123456") {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { id: 1, email },
        process.env.JWT_SECRET || "secretkey",
        { expiresIn: '1h' }
    );

    res.json({
        success: true,
        message: "Login successful",
        token
    });
});

module.exports = router;