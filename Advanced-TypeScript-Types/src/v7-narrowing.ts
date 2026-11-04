// Narrowing down

// Typeof

let x = null;

console.log(typeof x);


// Type Guard

const print = (value : string | number) => {
    if(typeof value === "string") {
        return value.toUpperCase();
    }
    else if(typeof value === "number") {
        return value;
    }
    else {
        return value;
    }
};


// Truthiness 

type User = {
    name : string,
    address? : {
        street : string,
    }
} | null;

const LoggedInUser : User = {
    name : "Rafi",
    address : {
        street : "ABCD"
    }
};

const showAddress = (user : User) => {
    if(user && user.address) {
        console.log(user.address.street);
        return;
    }
    
    throw new Error("User not found");
}

showAddress(LoggedInUser);