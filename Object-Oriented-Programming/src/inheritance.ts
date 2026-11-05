// Inheritance

class Employee {
    
    constructor (
        public name : string,
        public role : string,
        protected _baseSallary : number,
    ) {}

    get baseSallary() : number {
        return this._baseSallary;
    }

    set baseSallary(newSallary : number) {
        if (newSallary < 0) {
            throw new Error("Sallary cannor be negative value");
        }
        this._baseSallary = newSallary;
    }

    describe() : string {
        return `${this.name} earns ${this.baseSallary} tk`;
    }

}


class Manager extends Employee {

    // teamMemberCount : number;

    // constructor(
    //     teamMemberCount : number,
    //     name : string,
    //     role : string,
    //     _baseSallary : number
    // ) {
    //     super(name, role, _baseSallary);
    //     this.teamMemberCount = teamMemberCount;
    // }

    constructor(
        public teamMemberCount : number,
        name : string,
        role : string,
        _baseSallary : number,
    ) {
        super(name, role, _baseSallary);
    }

    describeWork() : string {
        return `${this.name} manages ${this.teamMemberCount}`;
    }

    describeManager() : string {
        return `${this.name} earns ${this._baseSallary} tk`;
    }
}

const employee01 = new Employee("Manik", "Developer", 22000);
const employee02 = new Employee("Ratan", "Developer", 24000);

console.log(employee01.describe());

const manager = new Manager(5, "Tomal", "Manager", 36000);

console.log(manager);
// console.log(manager.describe());
console.log(manager.describeWork());
console.log(manager.describeManager());