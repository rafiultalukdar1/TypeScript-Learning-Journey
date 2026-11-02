// Basic types in TypeScript

let myString : string = "Rafiul Talukdar"
let myNumber : number = 1234567
let myBoolean : boolean = true
let mySymble : symbol = Symbol()
let myBigInt : bigint = 100n


const addTwo = (a : number, b : number) : number => {
    return a + b
}

console.log(addTwo(30, 20))

// Array, Tuple and readonly modifier

const arr : string[] = ["Programming", "Hero", "Level-02"] // String Array

const numArr : number[] = [1, 2, 3, 4, 5] // Number Array

const newArr : Array<string> = ["Manik", "Ratan"] // Generic Array

// TypeScript Tuple

const dhakaLatLong: readonly [number, number] = [23.810331, 90.412521] // Readonly Tuple - A tuple whose values cannot be changed

// Optional, Default and Rest Parameters in function

const concatName = (firstName : string, lastName ?: string) => {
    if(!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
};

console.log(concatName("Rafiul", "Talukdar"))

// Default Parameters in function

const greetings = (fullName : string, greeting = "!!") => {
    console.log(fullName + " " + greeting);
}

greetings("Rafi");

// Rest Parameters in function

const sum = (...numbers : number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));


const userInfo = (...args : [name : string, age : number, isActive : true]) => {
    const [name, age] = args;
    console.log("Name : " + name + ", " + "Age : " + age);
}

userInfo("Rafi", 22, true)

