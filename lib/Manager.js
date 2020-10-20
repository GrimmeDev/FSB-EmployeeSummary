const Employee = require("./Employee");
// Inherit from Employee
// Add Office Number
class Manager extends Employee {
    constructor(name, id, email, officeNumber, role = "Manager") {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;