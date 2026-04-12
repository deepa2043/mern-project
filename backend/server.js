const express = require("express");
const cors = require("cors");

const app = express();

// ✅ middleware (ADD HERE)
app.use(cors());
app.use(express.json());

// routes
app.get("/test", (req, res) => {
  res.json({
    message: "Hello",
    status: "success",
    user: "Nandish"
  });
});

// start server
app.listen(5002, () => {
  console.log("Server running on port 5002");
});