// require connection
const connection = require('../db/connection.js');
// require sequelize
const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

// class for role 
class Role {
    constructor(id, title, salary, department_id) {
      this.id = id;
      this.title = title;
      this.salary = salary;
      this.department_id = department_id;
    }
  
    // method to get all roles
    async getAllRoles() {
        try {
            const sql = 'SELECT roles.id, roles.title, roles.salary, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id';
            const [rows] = await connection.query(sql);
            return rows;
        } catch (error) {
            console.log('Error in retrieving roles:', error);
            throw error;
        }
    }
     // method to add a role
     async addRole(id, title, salary, department_id) {
        try {
            const sql = 'INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)';
            const [result] = await connection.query(sql, [id.name, title.name, salary.name, department_id.name]);
            return result.insertId;
        } catch (error) {
            console.log('Error in adding role:', error);
            throw error;
        }
    }
    // method to delete a role
    async deleteRole(roleId) {
        try {
            const sql = 'DELETE FROM roles WHERE id = ?';
            await connection.query(sql,[roleId]);
        } catch (error) {
            console.log('Error deleting role:', error);
            throw error;
        }
    }
  }

  Role.init(
    {
        // define columns and datatypes for the table here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          salary: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'department',
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
        modelName: 'role'
    }
);
  
  // Export Role class
  module.exports = Role;