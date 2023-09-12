// // require necessary packages and modules
// const { Sequelize } = require('sequelize');
// // const { Department, Role, Employee } = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models');
// const Department = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/department.js');
// const Role = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/role.js');
// const Employee = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/employee.js');

// const sequelize = new Sequelize('employees_db', 'root', 'happycoding', {
//   host: '127.0.0.1',
//   dialect: 'mysql',
// });

// // function to create schema
// async function createSchema(sequelize) {
//     // connect to the database
//     // const sequelize = new Sequelize('employees_db', 'root', 'happycoding', {
//     //   host: '127.0.0.1',
//     //   dialect: 'mysql',
//     // });

//     // define the models and their relationships
//     Department.init(sequelize);
//     Role.init(sequelize);
//     Employee.init(sequelize);

//     // create the database tables
//     await sequelize.sync({ force: true });

//     console.log('Database schema created successfully.');
// }

// // createSchema(sequelize);

// // function to add seeds to schema
// async function seedDatabase(sequelize) {
//     // create the departments
//     await Department.bulkCreate([
//       { id: 1, name: 'Sales' },
//       { id: 2, name: 'Engineering' },
//       { id: 3, name: 'Finance' },
//       { id: 4, name: 'Legal' },
//       // add more departments as needed
//     ]);
  
//     // create the roles
//     await Role.bulkCreate([
//       { id: 1, title: 'Sales Lead', salary: 100000, department_id: 1 },
//       { id: 2, title: 'Salesperson', salary: 80000, department_id: 1 },
//       { id: 3, title: 'Lead Engineer', salary: 150000, department_id: 2 },
//       { id: 4, title: 'Software Engineer', salary: 120000, department_id: 2 },
//       { id: 5, title: 'Account Manager', salary: 160000, department_id: 3 },
//       { id: 6, title: 'Accountant', salary: 125000, department_id: 3 },
//       { id: 7, title: 'Legal Team Lead', salary: 250000, department_id: 4 },
//       { id: 8, title: 'Lawyer', salary: 190000, department_id: 4 },
//       // add more roles as needed
//     ]);

//     // create the employees
//     await Employee.bulkCreate([
//     { id: 1, first_name: 'John', last_name: 'Doe', role_id: 1, manager_id: null },
//     { id: 2, first_name: 'Mike', last_name: 'Chan', role_id: 2, manager_id: 1 },
//     { id: 3, first_name: 'Ashley', last_name: 'Rodriguez', role_id: 3, manager_id: 3 },
//     { id: 4, first_name: 'Kevin', last_name: 'Tupik', role_id: 4, manager_id: 3 },
//     { id: 5, first_name: 'Kunal', last_name: 'Singh', role_id: 5, manager_id: 5 },
//     { id: 6, first_name: 'Malia', last_name: 'Brown', role_id: 6, manager_id: 5 },
//     { id: 7, first_name: 'Sarah', last_name: 'Lourd', role_id: 7, manager_id: 7 },
//     { id: 8, first_name: 'Tom', last_name: 'Allen', role_id: 8, manager_id: 7 },
//     // add more employees as needed
//   ]);

//     console.log('Database seeded successfully.');
// }

// // export createSchema and seedDatabase
// module.exports = {
//     createSchema,
//     seedDatabase,
// };