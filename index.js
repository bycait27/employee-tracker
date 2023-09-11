// require necessary modules and packages
const inquirer = require('inquirer');
const { promptUser } = require('/utils/prompts.js');
const Department = require('/models/department.js');
const Role = require('/models/role.js');
const Employee = require('/models/employee.js');
const { createConnection } = require('/db/connection.js');
const { createSchema, seedDatabase } = require('/seeds.js');

// function to start application and handle prompts
async function startApp() {
    try {
        // create database connection
        const connection = await createConnection();

        // create the database schema if it doesn't exist
        await createSchema(connection);

        // seed the database with initial data if needed
        await seedDatabase(connection);

        // prompt user
        const userChoices = await promptUser();

        switch(userChoices) {
            // view all departments
            case 'View all departments':
                // call the appropriate method from the Department model to view all departments
                const department = new Department();
                department.getAllDepartments();
                // Department.getAllDepartments();
                break;
            // add a department
            case 'Add a department':
                // call the appropriate method from the Department model to add a department
                const addDepartment = new Department();
                addDepartment.addDepartment(department);
                break;
            // update a department
            case 'Update a department':
                // call the appropriate method from the Department model to update a department
                const updateDepartment = new Department();
                updateDepartment.updateDepartment(department);
                break;
            // delete a department
            case 'Delete a department':
                // call the appropriate method from the Department model to delete a department
                const deleteDepartment = new Department();
                deleteDepartment.deleteDepartment(departmentId);
                break;
            // view all roles
            case 'View all roles':
                // call the appropriate method from the Role model to view all roles
                const role = new Role();
                role.getAllRoles();
                break;
            // add a role
            case 'Add a role':
                // call the appropriate method from the Role model to add a role
                const addRole = new Role();
                addRole.addRole(id, title, salary, department_id);
                break;
            // delete a role
            case 'Delete a role':
                // call the appropriate method from the Role model to delete a role
                const deleteRole = new Role();
                deleteRole.();
                break;
            // view all employees
            case 'View all employees':
                // call the appropriate method from the Employee model to view all employees
                const employee = new Employee();
                employee.getAllEmployees();
                break;
            // add an employee
            case 'Add an employee':
                // call the appropriate method from the Employee model to add an employee
                const addEmployee = new Employee();
                addEmployee.addEmployee();
                break;
            // update employee role
            case 'Update employee role':
                // call the appropriate method from the Employee model to update an employee role
                const updateEmployeeRole = new Employee();
                updateEmployeeRole.updateEmployeeRole(roleId, employeeId);
                break;
            // delete an employee
            case 'Delete an employee':
                // call the appropriate method from the Employee model to delete an employee
                const deleteEmployee = new Employee();
                deleteEmployee.deleteEmployee(employeeId);
                break;
            default:
                console.log('Goodbye!');
                break;
        }
        // end connection
        connection.end();
    } catch (error) {
        console.error('Error:', error);
    };
};

// start application
startApp();