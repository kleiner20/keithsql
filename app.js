const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
var Choices = require('prompt-choices');
   const Engineer = require('./lib/Engineer');
   const Intern = require('./lib/Intern');
   const Manager = require('./lib/Manager');




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
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    {
      type: 'checkbox',
      name: "title",
      message: "What is your employee role?",
      choices: [
       'Manager','Engineer', 'Intern', 'Stop']
    }
  ])
};


function generateMgr(employees) {
  console.log(employees.office)
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
  console.log("Please enter your employee information");
  let myEmployees = []
  try {
    const employees = await promptUser();
    console.log(employees)
    const roleInfo = await rolePrompts(employees.title[0]);

    const html = generateMgr(employees);

    await writeFileAsync("index.html", html);
    //Enter new code here
    function enterNew() {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "choice",
            message: "Add another employee?"
          }
        ])
        .then(val => {
          // If the user says yes to another game, play again, otherwise quit the game
          if (val.choice) {
            init();
          } else {
            this.quit();
          }
        })
      };
    
    
    
    
    
    
    if(employees.title[0] === "Stop"){
      quit()
    } else{
      enterNew()
    }
    
    console.log("Successfully wrote to index.html");


  } catch (err) {
    console.log(err);
  } 
//another rotation?  
};

init();
