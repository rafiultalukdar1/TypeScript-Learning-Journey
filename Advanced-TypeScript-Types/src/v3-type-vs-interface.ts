// Type alias vs Interface

console.log('Type alias vs Interface')

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

//TODO: Type alias

type ID = number;

//! interface id = number

type Role = "admin" | "member";

//! interface "admin" | "member"

interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = {
  id: 123,
  name: "abc",
  role: "member",
};

console.log(user)


//TODO : Interface

interface Animal {
    species : string;
}

interface Cat extends Animal{
    breed : string;
}

const cat : Cat = {
    breed : "Persian",
    species : "felis catus"
}

console.log(cat)


//TODO: Type alias

type Vehicle = {
    brand : string
}

type Car = Vehicle & {
    //? "&" symbol is used to perform intersection
    model : string
}

const car : Car = {
    brand : "Totota",
    model : "Crown"
}

console.log(car);

// Another Example

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee : IEmployee = {
    id : 123,
    name : "Manik"
}

console.log(employee)


///! This is not valid

// type TEmployee = {
//     id : number
// }

// type TEmployee = {
//   name: string;
// };