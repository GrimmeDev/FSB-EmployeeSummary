// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Inherit from Employee
// Add Office Number
class Engineer extends Employee() {
    constructor(officeNum) {
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getOffice(officeNum) {
        return officeNum;
    }
}