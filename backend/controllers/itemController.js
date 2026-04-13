const db = require('../config/db');
const authMiddleware = require('../middleware/authmiddle');

// 📥 Get all items (REAL DATA)
router.get('/', authMiddleware, (req, res) => {
    const sql = 'SELECT * FROM items';

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err
            });
        }

        res.json(result); // ✅ send actual items
    });
});