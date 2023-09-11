// // require mysql2
// const mysql = require('mysql2');

// // connect to database
// const connectToDatabase = () => {
//     // connection pool
//     const pool = mysql.createPool({
//         host: '127.0.0.1',
//         port:'3306',
//         user :'root',
//         password: 'happycoding',
//         database: 'employees_db'
//     });

//     // return a promise that resolves when the connection is established
//     return new Promise ((resolve, reject) => {
//         pool.getConnection((err,connection) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(connection);
//         });
//     });
// };

// // export connectToDatabase function
// module.exports = connectToDatabase;

const { Sequelize } = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize('employees_db', 'root', 'happycoding', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: '127.0.0.1',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

module.exports = sequelize;