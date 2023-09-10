// require mysql2
const mysql = require('mysql2');

// connect to database
const connectToDatabase = () => {
    // connection pool
    const pool = mysql.createPool({
        host: '127.0.0.1',
        port:'3306',
        user :'root',
        password: 'happycoding',
        database: 'employees_db'
    });

    // return a promise that resolves when the connection is established
    return new Promise ((resolve, reject) => {
        pool.getConnection((err,connection) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(connection);
        });
    });
};

// export connectToDatabase function
module.exports = connectToDatabase;