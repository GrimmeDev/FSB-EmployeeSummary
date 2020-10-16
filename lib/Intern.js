// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Inherit from Employee
// Add School
class Engineer extends Employee() {
    constructor(school) {
        this.school = school
        this.role = "Intern";
    }
    getSchool(school) {
        return school;
    }
}