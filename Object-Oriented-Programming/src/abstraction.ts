// Abstraction

abstract class Employee {
    
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

    abstract calculatePay(): number;
    // abstract getResources(): string[];
    // abstract registerEntryTime(): string;

}

class Manager extends Employee {
  calculatePay() {
    return this.baseSallary + 5000;
  }
}

class Developer extends Employee {
  calculatePay() {
    return this.baseSallary + 3000;
  }
}