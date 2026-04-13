const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mern_auth_db', // ✅ correct DB
    port: 3307 // ✅ correct port
});

db.connect((err) => {
    if (err) {
        console.log('DB Error:', err);
    } else {
        console.log('MySQL Connected');
    }
});

module.exports = db;