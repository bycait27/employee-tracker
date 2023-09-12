// require mysql2
const mysql = require('mysql2');

// create a connection pool 
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'happycoding',
    database: 'employees_db',
    connectionLimit: 10, // adjust the connection limit as needed
  });

    // function to get all roles
    function getAllRoles() {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM role`, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // function to add a role
    function addRole(id, title, salary, department_id) {
        return new Promise ((resolve, reject) => {
            pool.query('INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)', [id, title, salary, department_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // function to delete a role
    function deleteRole(id) {
        return new Promise ((resolve, reject) => {
            pool.query('DELETE FROM role WHERE id = ?', [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

// export all functions
module.exports = {
    getAllRoles,
    addRole,
    deleteRole,
};