// require sequelize package
const Sequelize = require('sequelize');

// enable access to .env variables
require('dotenv').config();

// connect to employees_db database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    }
)

module.exports = sequelize;