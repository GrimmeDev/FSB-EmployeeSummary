// TODO: Write code to define and export the Employee class
// EMPLOYEEs all share Name, Title, ID, Email, and Role (Default = Employee)
class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(name) {
        return name;
    }
    getID(id) {
        return id;
    }
    getEmail(email) {
        return email;
    }
    getRole(role) {
        return role;
    }
}