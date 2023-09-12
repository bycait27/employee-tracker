/* this is the default data that will be added to each table */

/* use employees_db */
USE employees_db;

/* here we have the values for the department id and the department name */
INSERT INTO department (id, name)
VALUES (1, 'Sales'),
       (2, 'Engineering'),
       (3, 'Finance'),
       (4, 'Legal'); 

/* here we have the values for the role id, role title, role salary, and 
role department id */
INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Sales Lead', 100000, 1),
       (2, 'Salesperson', 80000, 1),
       (3, 'Lead Engineer', 150000, 2),
       (4, 'Software Engineer', 120000, 2),
       (5, 'Account Manager', 160000, 3),
       (6, 'Accountant', 125000, 3),
       (7, 'Legal Team Lead', 250000, 4),
       (8, 'Lawyer', 190000, 4); 

/* here we have the values for the employee id, employee first name, employee
last name, employee role id, and employee manager id */
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Doe', 1, NULL),
       (2, 'Mike', 'Chan', 2, 1),
       (3, 'Ashley', 'Rodriquez', 3, 3),
       (4, 'Kevin', 'Tupik', 4, 3),
       (5, 'Kunal', 'Singh', 5, 5),
       (6, 'Malia', 'Brown', 6, 5),
       (7, 'Sarah', 'Lourd', 7, 7),
       (8, 'Tom', 'Allen', 8, 7); 