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

// class for department
class Department extends Model {
    // constructor(sequelize) {
    //     this.sequelize = sequelize;
    // }
    // method to get all departments
    async getAllDepartments() {
        try {
            const sql = 'SELECT * FROM department';
            const [rows] = await connection.query(sql);
            return rows;
        } catch (error) {
            console.log('Error in retrieving departments:', error);
            throw error;
        }
    }
    // method to add a new departments
    async addDepartment(department) {
        try {
            const sql = 'INSERT INTO department (name) VALUES (?)';
            const [result] = await connection.query(sql, [department.name]);
            return result.insertId;
        } catch (error) {
            console.log('Error in adding department:', error);
            throw error;
        }
    }
    // method to update a department
    async updateDepartment(department) {
        try {
            const sql = 'UPDATE department SET name = ? WHERE id = ?';
            await connection.query(sql, [department.name, department.id]);
        } catch (error) {
            console.log('Error updating department:', error);
            throw error;
        }
    }
    // method to delete a department
    async deleteDepartment(departmentId) {
        try {
            const sql = 'DELETE FROM department WHERE id = ?';
            await connection.query(sql,[departmentId]);
        } catch (error) {
            console.log('Error deleting department:', error);
            throw error;
        }
    }  
} 

Department.init(
    {
        // define columns and datatypes for the table here
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING(30),
            allowNull: false,
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Department'
    }
);

// export Department class 
module.exports = Department;