// // require necessary modules and packages
// const inquirer = require('inquirer');
// const { promptUser } = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/utils/prompts.js');
// const Department = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/department.js');
// const Role = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/role.js');
// const Employee = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/employee.js');
// // const sequelize = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/config/connection.js');
// const { createSchema, seedDatabase } = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/seeds/seeds.js');
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('employees_db', 'root', 'happycoding', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   });

// const newSequelize = new Sequelize('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/db/connection.js');

// require mysql2
const mysql = require('mysql2');

// connect to database
const connection = mysql.createConnection({
    hose: '127.0.0.1',
    user: 'root',
    password: 'happycoding',
    database: 'employees_db',
});

connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return;
    }
  
    console.log('Connected to the database.');
  
    // execute the SQL queries from schema.sql
    connection.query(fs.readFileSync('schema.sql', 'utf8'), (error, results) => {
      if (error) {
        console.error('Error executing schema.sql:', error);
        return;
      }
  
      console.log('Schema created.');
  
      // execute the SQL queries from seeds.sql
      connection.query(fs.readFileSync('seeds.sql', 'utf8'), (error, results) => {
        if (error) {
          console.error('Error executing seeds.sql:', error);
          return;
        }
  
        console.log('Seeds inserted.');
  
        // perform other actions or start your application here
  
        // close the connection when done
        connection.end();
      });
    });
  });

// function to start application and handle prompts
async function startApp(sequelize) {
    try {
        // create database connection
        // const connection = await createConnection;

        // create the database schema if it doesn't exist
        await createSchema(sequelize);

        // seed the database with initial data if needed
        await seedDatabase(sequelize);

        // prompt user
        const userChoices = await promptUser();

        switch(userChoices) {
            // view all departments
            case 'View all departments':
                // call the appropriate method from the Department model to view all departments
                const department = new Department(sequelize);
                department.getAllDepartments();
                // Department.getAllDepartments();
                break;
            // add a department
            case 'Add a department':
                // call the appropriate method from the Department model to add a department
                const addDepartment = new Department(sequelize);
                addDepartment.addDepartment(department);
                break;
            // update a department
            case 'Update a department':
                // call the appropriate method from the Department model to update a department
                const updateDepartment = new Department(sequelize);
                updateDepartment.updateDepartment(department);
                break;
            // delete a department
            case 'Delete a department':
                // call the appropriate method from the Department model to delete a department
                const deleteDepartment = new Department(sequelize);
                deleteDepartment.deleteDepartment(departmentId);
                break;
            // view all roles
            case 'View all roles':
                // call the appropriate method from the Role model to view all roles
                const role = new Role(sequelize);
                role.getAllRoles();
                break;
            // add a role
            case 'Add a role':
                // call the appropriate method from the Role model to add a role
                const addRole = new Role(sequelize);
                addRole.addRole(id, title, salary, department_id);
                break;
            // delete a role
            case 'Delete a role':
                // call the appropriate method from the Role model to delete a role
                const deleteRole = new Role(sequelize);
                deleteRole.deleteRole(roleId);
                break;
            // view all employees
            case 'View all employees':
                // call the appropriate method from the Employee model to view all employees
                const employee = new Employee(sequelize);
                employee.getAllEmployees();
                break;
            // add an employee
            case 'Add an employee':
                // call the appropriate method from the Employee model to add an employee
                const addEmployee = new Employee(sequelize);
                addEmployee.addEmployee();
                break;
            // update employee role
            case 'Update employee role':
                // call the appropriate method from the Employee model to update an employee role
                const updateEmployeeRole = new Employee(sequelize);
                updateEmployeeRole.updateEmployeeRole(roleId, employeeId);
                break;
            // delete an employee
            case 'Delete an employee':
                // call the appropriate method from the Employee model to delete an employee
                const deleteEmployee = new Employee(sequelize);
                deleteEmployee.deleteEmployee(employeeId);
                break;
            default:
                console.log('Goodbye!');
                break;
        }
        // end connection
        // connection.end();
    } catch (error) {
        console.error('Error:', error);
    };
};

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    // Code to start the server or perform other actions
    startApp(sequelize);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// start application
// startApp();