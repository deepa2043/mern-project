const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../config/db');


// ✅ CREATE ITEM
router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    await db.query(
      'INSERT INTO items (user_id, title, description) VALUES (?, ?, ?)',
      [userId, title, description]
    );

    res.json({ message: "Item created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating item" });
  }
});


// ✅ GET ALL ITEMS
router.get('/', auth, async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM items WHERE user_id = ?',
      [req.user.id]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching items" });
  }
});


// ✅ UPDATE ITEM
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, status } = req.body;

    await db.query(
      'UPDATE items SET title=?, description=?, status=? WHERE id=?',
      [title, description, status || 'pending', req.params.id]
    );

    res.json({ message: "Item updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating item" });
  }
});


// ✅ DELETE ITEM
router.delete('/:id', auth, async (req, res) => {
  try {
    await db.query(
      'DELETE FROM items WHERE id=?',
      [req.params.id]
    );

    res.json({ message: "Item deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting item" });
  }
});


module.exports = router;