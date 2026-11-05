// Class and Object

class Employee {
    name : String;
    role : string;
    baseSallary : number;

    constructor (name : string, role : string, baseSallary : number) {
        this.name = name;
        this.role = role;
        this.baseSallary = baseSallary
    }
}

const employee01 = new Employee("Manik", "Developer", 22000);
const employee02 = new Employee("Ratan", "Developer", 24000);

console.log(employee01);
console.log(employee02);