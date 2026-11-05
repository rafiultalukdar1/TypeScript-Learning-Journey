// Encapsulation

// Access Modifier
// 01. public
// 02. private
// 03. protected

// readonly


class Employee {
    
    constructor (
        public name : String,
        public role : string,
        private _baseSallary : number,
    ) {}

    get baseSallary() : number {
        return this._baseSallary;
    }

    get sallaryWithBobus() : number {
        return this._baseSallary + 5000;
    }

    set baseSallary(newSallary : number) {
        if (newSallary < 0) {
            throw new Error("Sallary cannor be negative value");
        }
        this._baseSallary = newSallary;
    }

}

const employee01 = new Employee("Manik", "Developer", 22000);
const employee02 = new Employee("Ratan", "Developer", 24000);

// employee02.baseSallary = -77;

console.log(employee02.sallaryWithBobus);