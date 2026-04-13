const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 📥 GET ITEMS FROM DB
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM items';

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });
});

module.exports = router;