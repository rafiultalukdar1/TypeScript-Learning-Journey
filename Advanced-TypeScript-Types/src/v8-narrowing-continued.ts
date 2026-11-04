// Narrowing continued

// Some Caveat of Type Guard

const printAll = (x : string | string[] | null) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};

printAll(null);


// Equality

const compare = (x : string | number, y : string | boolean) => {
    if (x === y) {
        console.log(x, y);
    }
};

const compareAll = (x : string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for(let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};

compareAll("Compare");


// "in" operator

type Bird = {fly : () => void};
type Fish = {swim : () => void};
type Cat = {meow: () => void};

const move = (animal : Bird | Fish | Cat) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    else if ("swim" in animal) {
        animal.swim();
        return;
    }
    else {
        animal.meow();
    }
}

const bird : Bird = {
    fly : () => console.log("Bird is flying")
};

const fish: Fish = {
    swim: () => console.log("Fish is swimming")
};

const cat: Cat = {
    meow: () => console.log("Cat is meowing")
};

move(bird);
move(fish);
move(cat);


// Instanceof check

const showDate = (x : Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    const date = new Date(x);
    console.log(date.toISOString());
}

showDate("01-25-2005");


// Discriminated union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};


const circle: Circle = {
    kind: "circle",
    radius: 10
};

const square: Square = {
    kind: "square",
    sideLength: 5
};

getArea(circle);
getArea(square);