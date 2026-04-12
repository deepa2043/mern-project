exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== "test@gmail.com" || password !== "123456") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    token: "dummy-token-123"
  });
};