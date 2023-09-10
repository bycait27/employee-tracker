// This file will define the Employee model and contain methods for interacting with the employee table.

// require connection
const connection = require('../db/connection.js');

// class for employee
class Employee {
    constructor(id, name) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    // method to get all employees
    async getAllEmployees() {
        try{
            const sql = 'SELECT employee.id, CONCAT(employee.first_name, employee.last_name) AS name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id';
            const [rows] = await connection.query(sql);
            return rows;
        } catch (error) {
            console.log('Error in retrieving employees:', error);
            throw error;
        }
    }
    // method to add an employee
    async addEmployee() {
        try{
            const sql = '';
            const [result] = await connection.query(sql, [id.name, first_name.id, last_name.id, role_id.name, manager_id.name]);
            return result.insertId;
        } catch (error) {
            console.log('Error in adding employee:', error);
            throw error;
        }
    }
    // method to update employee role
    async updateEmployeeRole(roleId, employeeId) {
        try {
            const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
            await connection.query(sql, [roleId, employeeId]);
        } catch (error) {
            console.log('Error in updating employee role:', error);
            throw error;
        }
    }
    // method to delete employee
    async deleteEmployee(employeeId) {
        try {
            const sql = 'DELETE FROM employee WHERE id = ?';
            await connection.query(sql, [employeeId]);
        } catch (error) {
            console.log('Error in deleting employee', error);
            throw error; 
        }
    }
}

// export Employee class
module.exports = Employee;