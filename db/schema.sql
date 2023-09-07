DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    /* add reference to employee role */
    role_id INT NOT NULL,
    /* add reference to another employee that is the manager of the current employee */
    manager_id INT NOT NULL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);