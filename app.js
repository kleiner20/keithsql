const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
var mysql = require("mysql");
var Choices = require('prompt-choices');
   const Engineer = require('./lib/Engineer');
   const Intern = require('./lib/Intern');
   const Manager = require('./lib/Manager');

   var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Mysqul20!',
    database : 'employeedirectory'
  });
  connection.connect();

const writeFileAsync = util.promisify(fs.writeFile);

function rolePrompts(selectedRole){
  console.log(selectedRole)
  if(selectedRole === "Manager"){
    return inquirer.prompt([
      {
        type: "input",
        name: "office",
        message: "What is your office number?"
      }
    ])
  }
  else if(selectedRole === "View All Employees"){
    connection.query("SELECT * FROM employeedirectory.employees;", function(err, rows, fields) {
      if (err) throw err;
      console.log(rows[0]);


    });

  }
  else if(selectedRole === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "gitHub",
          message: "What is your GitHub?"
        }
      ])
    }
  else if(selectedRole === "Intern"){
        return inquirer.prompt([
          {
            type: "input",
            name: "school",
            message: "What School do you attend?"
          }
        ])
  }
  else if(selectedRole === "Stop"){
    return false
  }
};

function promptUser() {
  return inquirer.prompt([
    {
      type: 'checkbox',
      name: "title",
      message: "What would you like to do?",
      choices: [
       'View All Employees','View All Employees By Department', 'View All Employees By Manager', 'Add Employee']
    },
    {
      type: "input",
      name: "name",
      message: "Trying again eh?"
    }
    // {
    //   type: 'checkbox',
    //   name: "title",
    //   message: "What is your employee role?",
    //   choices: [
    //    'Manager','Engineer', 'Intern', 'Stop']
    // }
  ])
};


function generateMgr(employees) {
  console.log("Here with the literal")
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header card text-white"><h3>${employees.name}</h3>
  <p><h3>${employees.title}</h3></p></div>
  <div class="card-body text-black">
    <ul class="list-group">
      <li class="list-group-item text-black">ID: ${employees.id}</li>
      <li class="list-group-item">Email: ${employees.email}</li>
      <li class="list-group-item">${employees.office}</li>
      <li class="list-group-item">${employees.school}</li>
      <li class="list-group-item">${employees.gitHub}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
};
function quit() {
  console.log("Goodbye!")
  process.exit(0);
}

async function init() {
  console.log("--------------------");
  console.log("|  Employee Manager |");
  console.log("--------------------");
  //Start comment out
  let myEmployees = []
  try {
    const employees = await promptUser();
    console.log("I'm here")
    const roleInfo = await rolePrompts(employees.title[0]);
//start comment out
    const html = generateMgr(employees);

    await writeFileAsync("index.html", html);
    //End comment out
    function enterNew() {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "choice",
            message: "Continue?"
          }
        ])
        .then(val => {
          // If the user says yes to end, sort again, otherwise quit the directory
          if (val.choice) {
            init();
          } else {
            // this.quit();
            process.exit(1);
          }
        })
      };
    
    
    
    
    
    
    if(employees.title[0] === "Stop"){
      quit()
    } else{
      enterNew()
    }
    
    // console.log("Successfully wrote to index.html");


  } catch (err) {
    console.log(err);
  } 
//another rotation?  
};

init();
