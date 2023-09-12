// require mysql2
const mysql = require('mysql2');
// require promptUser module
const { promptUser } = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/utils/prompts.js');
// require department.js functions
const {
    getAllDepartments,
    addDepartment,
    updateDepartment,
    deleteDepartment,
} = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/utils/department.js');
// require role.js functions
const {
    getAllRoles,
    addRole,
    deleteRole,
} = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/utils/role.js');
// require employee.js functions
const {
    getAllEmployees,
    addEmployee,
    updateEmployeeRole,
    deleteEmployee,
} = require('/Users/caitlinash/Desktop/coding-challenges/employee-tracker/utils/employee.js');


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
        } else if (answers.action === 'View all roles') {
            getAllRoles();
        } else if (answers.action === 'Add a role') {
            addRole();
        } else if (answers.action === 'Delete a role') {
            deleteRole();
        } else if (answers.action === 'View all employees') {
            getAllEmployees();
        } else if (answers.action === 'Add an employee') {
            addEmployee();
        } else if (answers.action === 'Update employee role') {
            updateEmployeeRole();
        } else if (answers.action === 'Delete an employee') {
            deleteEmployee();
        };
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