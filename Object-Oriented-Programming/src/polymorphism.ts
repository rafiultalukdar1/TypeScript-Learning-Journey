// Polymorphism


class Employee {
    
    constructor (
        public name : string,
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

    calculatePay (taxRate : number) {
        return this.baseSallary - this.baseSallary * taxRate;
    }

}

class Manager extends Employee {
    override calculatePay () {
        return this.baseSallary + 4000;
    }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }

  override calculatePay(taxRate: number) {
    return this.baseSallary + 5000 - this.baseSallary * taxRate;
  }
}


const employee = new Employee("Manik", 22000);
const manager = new Manager("Ratan", 22000);
const developer = new Developer("Tomal", 25000, "backend");

console.log(employee.calculatePay(0.05));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.05));