require('dotenv').config();

const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

const query = util.promisify(pool.query).bind(pool);

module.exports = { query };