const db = require('../config/db');

// CREATE ITEM
exports.createItem = async (req, res) => {
  const { title, description } = req.body;

  await db.query(
    "INSERT INTO items (user_id, title, description) VALUES (?, ?, ?)",
    [req.user.id, title, description]
  );

  res.json({ message: "Item created" });
};

// GET ITEMS
exports.getItems = async (req, res) => {
  const [items] = await db.query(
    "SELECT * FROM items WHERE user_id = ?",
    [req.user.id]
  );

  res.json(items);
};

// DELETE ITEM
exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  await db.query(
    "DELETE FROM items WHERE id = ?",
    [id]
  );

  res.json({ message: "Deleted" });
};