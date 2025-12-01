const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'myprogress'
});

console.log("HOST: ", process.env.MYSQL_HOST);
console.log("USER: ", process.env.MYSQL_USER);

connection.connect((err: Error) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database 'myprogress'");
});

module.exports = connection;
