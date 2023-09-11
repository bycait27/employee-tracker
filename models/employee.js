// require connection
// const connection = require('../config/connection.js');
// require sequelize
// const sequelize = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/config/connection.js');
// const { Model, DataTypes } = require('sequelize');

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

// class for employee
class Employee extends Model {
    constructor(sequelize) {
        this.sequelize = sequelize;
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

Employee.init(
    {
        // define columns and datatypes for the table here
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          first_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          last_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'role',
                key: 'id',
                onDelete: 'CASCADE',
            }
          },
          manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id',
                onDelete: 'CASCADE',
            }
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Employee'
    }
);

// export Employee class
module.exports = Employee;