const express = require("express");
const app = express();

app.use(express.json());

// auth routes
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

app.listen(5002, () => {
  console.log("Server running on port 5002");
});