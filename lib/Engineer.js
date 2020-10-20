const Employee = require("./Employee");
// Inherit from Employee
// Add GitHub variable, add function getGithub and override getRole
class Engineer extends Employee {
    // Constructor takes in ALL of the stuff from parent
    // super then targets the parent class with it's args
    constructor(name, id, email, github, role = "Engineer") {
        super(name, id, email, role);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;