console.log("Examples of different types")

// Top types

let helloWorld : any = "Hello World!";

helloWorld = 1234;

helloWorld.length;

const something : unknown = "Hello World"; // something.length;


// Core types

let something2 : unknown;

const num : number = 1234;

something2 = num;


// Core types 0.2

type Status = "Pandding" | "Success";

let someStatus : string;

let status : Status = "Success";

someStatus = status;


// Nullish types

interface User {
    name : "Manik"
};

type LoggedinUser = User | null;

const currentUser : LoggedinUser = null;

console.log(currentUser);


// Unit type

const greet = () => {
  console.log("Unit type");
};

greet();

// Sub-type of unit type

const anotherGreet = () : undefined => {
  console.log("Sub-type of unit type");
  return undefined;
};

const greetins : void = anotherGreet();
console.log(greetins);

// Bottom type

// let neverHeppening : never = 7;

const getError = (msg : string) : never => {
    throw new Error(msg);
}

console.log(getError)