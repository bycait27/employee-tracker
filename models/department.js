// require connection
const connection = require('../db/connection.js');

// class for department
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
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

// export Department class 
module.exports = Department;