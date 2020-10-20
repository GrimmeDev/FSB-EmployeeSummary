const Employee = require("./Employee");
// Inherit from Employee
// Add School
class Intern extends Employee {
    constructor(name, id, email, school, role = "Intern") {
        super(name, id, email, role);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;