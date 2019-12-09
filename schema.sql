-- Create the database employees and specified it for use.
CREATE DATABASE employeedirectory;
USE employeedirectory;

-- Create the table employees.
CREATE TABLE employees
(
  id int
  AUTO_INCREMENT,
  first_name varchar
  (30) NOT NULL,
  last_name varchar
  (30) NOT NULL,
    title varchar
  (30) NOT NULL,
  manager varchar
  (30) NOT NULL,
  PRIMARY KEY
  (id)
);
-- Create the table of roles.
CREATE TABLE roles
(
  id int
  NOT NULL,
  title varchar
  (30) NOT NULL,
  salary int NOT NULL
);

-- Create the table of departments.
CREATE TABLE departments
(
  id int
  NOT NULL,
  department VARCHAR (30) NOT NULL
);
  -- Insert a set of records.
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("John", "Doe", "Sales Lead", "Ashley Rodriguez");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Mike", "Chan", "Salesperson", "John Doe");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Ashley", "Rodriguez", "Lead Engineer", " ");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Kevin", "Tupik", "Software Engineer", "Ashley Rodriguez");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Malia", "Brown", "Accountant", " ");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Sarah", "Lourd", "Legal Team Lead", " ");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Tom", "Allen", "Lawyer", "Sarah Lourd");
  INSERT INTO employees
    (first_name, last_name, title, manager)
  VALUES
    ("Christian", "Eckenrode", "Lead Engineer", "Mike Chan");

-- Insert in the roles
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (1, "Sales Lead", 100000 );
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (2, "Salesperson", 80000 );
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (3, "Lead Engineer", 150000 );
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (4, "Software Engineer", 120000 );
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (5, "Accountant", 125000 );
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (6, "Legal Team Lead", 250000 );
  INSERT INTO roles
    (id, title, salary)
  VALUES
    (7, "Lawyer", 190000 );

-- Insert a set of departments.
  INSERT INTO departments
    (id, department)
  VALUES
    (1, "Sales");
   INSERT INTO departments
    (id, department)
  VALUES
    (2, "Engineering"); 
   INSERT INTO departments
    (id, department)
  VALUES
    (3, "Finance");   
