// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Inherit from Employee
// Add GitHub variable, add function getGithub and override getRole
class Engineer extends Employee() {
    constructor(github) {
        this.github = github;
        this.role = "Engineer";
    }
    getGithub(github) {
        return github;
    }
}