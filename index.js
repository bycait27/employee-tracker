// require mysql2
const mysql = require('mysql2');

const { promptUser } = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/utils/prompts.js');

const {
    getAllDepartments,
    addDepartment,
    updateDepartment,
    deleteDepartment,
} = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/models/department.js');

// connect to database
const connection = mysql.createConnection({
    hose: '127.0.0.1',
    user: 'root',
    password: 'happycoding',
    database: 'employees_db',
});

// function startApp
  function startApp() {
    inquirer.prompt(promptUser)
    .then(answers => {
        if (answers.action === 'View all departments') {
            getAllDepartments();
        } else if (answers.action === 'Add a department') {
            addDepartment();
        } else if (answers.action === 'Update a department') {
            updateDepartment();
        } else if (answers.action === 'Delete a department') {
            deleteDepartment();
        } 
    })
    .catch(err => {
        console.log(err);
    });
  }

  // connect to database and initialize app
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
  
        // start your application
        startApp();
  
        // close the connection when done
        connection.end();
      });
    });
  });
//        
//             // view all roles
//             case 'View all roles':
//                 // call the appropriate method from the Role model to view all roles
//                 const role = new Role(sequelize);
//                 role.getAllRoles();
//                 break;
//             // add a role
//             case 'Add a role':
//                 // call the appropriate method from the Role model to add a role
//                 const addRole = new Role(sequelize);
//                 addRole.addRole(id, title, salary, department_id);
//                 break;
//             // delete a role
//             case 'Delete a role':
//                 // call the appropriate method from the Role model to delete a role
//                 const deleteRole = new Role(sequelize);
//                 deleteRole.deleteRole(roleId);
//                 break;
//             // view all employees
//             case 'View all employees':
//                 // call the appropriate method from the Employee model to view all employees
//                 const employee = new Employee(sequelize);
//                 employee.getAllEmployees();
//                 break;
//             // add an employee
//             case 'Add an employee':
//                 // call the appropriate method from the Employee model to add an employee
//                 const addEmployee = new Employee(sequelize);
//                 addEmployee.addEmployee();
//                 break;
//             // update employee role
//             case 'Update employee role':
//                 // call the appropriate method from the Employee model to update an employee role
//                 const updateEmployeeRole = new Employee(sequelize);
//                 updateEmployeeRole.updateEmployeeRole(roleId, employeeId);
//                 break;
//             // delete an employee
//             case 'Delete an employee':
//                 // call the appropriate method from the Employee model to delete an employee
//                 const deleteEmployee = new Employee(sequelize);
//                 deleteEmployee.deleteEmployee(employeeId);
//                 break;
//             default:
//                 console.log('Goodbye!');
//                 break;
//         }