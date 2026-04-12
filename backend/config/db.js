const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mern_auth_db", // ✅ correct DB
  port: 3307 // ✅ VERY IMPORTANT
});

pool.getConnection((err, conn) => {
  if (err) {
    console.error("❌ DB ERROR:", err);
  } else {
    console.log("✅ MySQL Connected Successfully");
    conn.release();
  }
});

module.exports = pool.promise();