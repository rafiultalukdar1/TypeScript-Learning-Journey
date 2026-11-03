// Literal Type

type Status = "Panding"

const status : Status = "Panding"

console.log(status)


// Basic Union

type Identity = string | number

const id : Identity = 674925

console.log(id)


// Literal Union

type Role = "User" | "Manager" | "Admin"

const userRole : Role = "Manager"

console.log(userRole)


// Object Union

type Admin = {
    id : number,
    role : "admin",
    privileges : string[],
}

type Member = {
    id : number,
    role : "member",
    plans : string[],
}

type User = Admin | Member

const user : User = { id : 1234, role : "member", plans : ["abcd"]}

console.log(user)