// require inquirer package
const inquirer = require('inquirer');
// require mysql2
// const mysql = require('mysql2');

// create connection to mysql database
// const connection = mysql.createConnection({
//     hose: '127.0.0.1',
//     user: 'root',
//     password: 'happycoding',
//     database: 'employees_db',
// });

// function to prompt user with questions
const promptUser = () => {
    // handles prompts and returns a promise
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                // prompt menu
                {
                    type: 'list',
                    name: 'choice',
                    message: 'What would you like to do?:',
                    choices: ['View all departments', 'Add a department', 'Update a department', 'Delete a department', 
                    'View all roles', 'Add a role', 'Delete a role', 
                    'View all employees', 'Add an employee', 'Update employee role', 'Delete an employee'],
                },

                // prompts for 'Add a department'
                {
                    type: 'input',
                    name: 'addDepartment',
                    message: 'What is the name of the department?',
                    when: (answers) => answers.choice === 'Add a department',
                },
                // added (department) to the database.
                console.log(`Added ${answers} to the database.`),

                // prompts for 'Update a department'
                {
                    type: 'list',
                    name: 'updateDepartmentChoice',
                    message: 'Which department would you like to update?',
                    when: (answers) => answers.choice === 'Update a department',
                    choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
                },
                {
                    type: 'input',
                    name: 'updateDepartment',
                    message: 'What is the new name of the department?',
                    when: (answers) => answers.updateDepartmentChoice === 'Sales' || 'Engineering' || 'Finance' || 'Legal',
                },
                // department name updated in database
                console.log(`${answers} updated in database.`),

                // prompts for 'Delete a department'
                {
                    type: 'list',
                    name: 'deleteDepartment',
                    message: 'Which department would you like to delete?',
                    when: (answers) => answers.choice === 'Delete a department',
                    choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
                },
                // removed (department) from database
                console.log(`Removed ${answers} from the database.`),

                // prompts for 'Add a role'
                {
                    type: 'input',
                    name: 'addRoleName',
                    message: 'What is the name of the role?',
                    when: (answers) => answers.choice === 'Add a role',
                },
                {
                    type: 'input',
                    name: 'addRoleSalary',
                    message: 'What is the salary of the role?',
                    when: (answers) => answers.choice === 'Add a role',
                },
                {
                    type: 'input',
                    name: 'addRoleDepartment',
                    message: 'Which department does the role belong to?',
                    when: (answers) => answers.choice === 'Add a role',
                },
                // added (role) to the database.
                console.log(`Added ${answers} to the database.`),

                // prompts for 'Delete a role'
                {
                    type: 'input',
                    name: 'deleteRole',
                    message: 'What is the name of the role?',
                    when: (answers) => answers.choice === 'Delete a role',
                },
                // removed (role) from database
                console.log(`Removed ${answers} from the database.`),

                // prompts for 'Add an employee'
                {
                    type: 'input',
                    name: 'addEmployeeFirstName',
                    message: 'What is the employee\'s first name?',
                    when: (answers) => answers.choice === 'Add an employee',
                },
                {
                    type: 'input',
                    name: 'addEmployeeLastName',
                    message: 'What is the employee\'s last name?',
                    when: (answers) => answers.choice === 'Add an employee',
                },
                {
                    type: 'input',
                    name: 'addEmployeeRole',
                    message: 'What is the employee\'s role?',
                    when: (answers) => answers.choice === 'Add an employee',
                },
                {
                    type: 'input',
                    name: 'addEmployeeManager',
                    message: 'Who is the employee\'s manager?',
                    when: (answers) => answers.choice === 'Add an employee',
                },
                // added new employee to database
                console.log(`Added ${answers} to the database.`),

                // prompts for 'Update employee role'
                {
                    type: 'list',
                    name: 'updateEmployee',
                    message: 'Which employee\'s role do you want to update?',
                    when: (answers) => answers.choice === 'Update employee role',
                    choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sara Lourd', 'Tom Allen'],
                },
                {
                    type: 'input',
                    name: 'updateEmployeeRole',
                    message: 'What is the employee\'s new role?',
                    when: (answers) => answers.updateEmployee === 'John Doe' || 'Mike Chan' || 'Ashley Rodriguez' || 'Kevin Tupik' || 'Kunal Singh' || 'Malia Brown' || 'Sara Lourd' || 'Tom Allen',
                },
                // added (employee's) new role of (role) to the database
                console.log(`Added employee's new role of ${answers} to the database.`),

                // prompts for 'Delete an employee'
                {
                    type: 'list',
                    name: 'deleteEmployee',
                    message: 'Which employee do you want to delete?',
                    when: (answers) => answers.choice === 'Delete an employee',
                    choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sara Lourd', 'Tom Allen'],
                },
                // removed (employee) from database
                console.log(`Removed ${answers} from the database.`)

            ])
            // fullfills promise and provides user responses to the caller of promptUser function
            .then((answers) => {
                resolve(answers);
            })
            // rejects promise and provides error to the caller of promptUser function
            .catch((error) => {
                reject(error);
            })
    })
}

module.exports = promptUser;