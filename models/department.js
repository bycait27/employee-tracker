// this file will define the Department model and contain methods for interacting with the department table.

// require connection
const connection = require('../db/connection.js');

class Department {
    constructor(connection) {
        this.connection = connection;
    }
    // method to get all departments
    getAllDepartments() {
        try {
            return this.connection.promise().query('SELECT * FROM department');
        } catch (error) {
            console.log('Error in retrieving departments:', error);
            throw error;
        }
    }
    // method to add a new department
    addDepartment(department) {
        try {
            return this.connection.promise().query('INSERT INTO department (name) VALUES (?)', [department]);
        } catch (error) {
            console.log('Error adding department:', error);
            throw error;
          }
    }

    // method to update a department
    updateDepartment(department) {
        try {
            return this.connection.promise().query('UPDATE department SET name = ? WHERE id = ?', [department]);
        } catch (error) {
            console.log('Error updating department:', error);
            throw error;
        }
    }
    // method to delete a department
    deleteDepartment(departmentId) {
        try {
            return this.connection.promise().query('DELETE FROM department WHERE id = ?', [departmentId]);
        } catch (error) {
            console.log('Error deleting department:', error);
            throw error;
        }
    }
}

module.exports = Department;