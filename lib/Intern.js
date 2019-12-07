const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  returnName(){
      return this.name;
  }

  returnGitHub(){
      return this.github;
  }
}

module.exports=Intern;