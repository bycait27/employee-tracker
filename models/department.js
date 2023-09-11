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

    // function to get all departments
    function getAllDepartments() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM department', (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
          });
    }

    // function to add a department
    function addDepartment(name) {
        return new Promise((resolve, reject) => {
        pool.query('INSERT INTO department (name) VALUES (?)', [name], (err, results) => {
            if (err) {
            reject(err);
            } else {
            resolve(results);
            }
        });
        });
    }
  
    // function to update a department
    function updateDepartment(id, name) {
        return new Promise((resolve, reject) => {
        pool.query('UPDATE department SET name = ? WHERE id = ?', [name, id], (err, results) => {
            if (err) {
            reject(err);
            } else {
            resolve(results);
            }
        });
        });
    }
    
    // function to delete a department
    function deleteDepartment(id) {
        return new Promise((resolve, reject) => {
        pool.query('DELETE FROM department WHERE id = ?', [id], (err, results) => {
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
    getAllDepartments,
    addDepartment,
    updateDepartment,
    deleteDepartment,
};