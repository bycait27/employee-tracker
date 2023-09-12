// require mysql2
const mysql = require('mysql2');

// create a connection pool 
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'haooycoding',
    database: 'employees_db',
    connectionLimit: 10, // adjust the connection limit as needed
  });

// function to get all employees
function getAllEmployees() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM employee', (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
}

// function to add an employee
function addEmployee(id, first_name, last_name, role_id, manager_id) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [id, first_name, last_name, role_id, manager_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
}

// function to update employee role
function updateEmployeeRole(id, role_id) {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE employee SET role_id = ? WHERE id = ?', [id, role_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
}

// function to delete employee
function deleteEmployee(id) {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM employee WHERE id = ?', [id], (err, results) => {
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
    getAllEmployees,
    addEmployee,
    updateEmployeeRole,
    deleteEmployee,
};
