// Type Assertion

// "as" syntex 

type Status = "Pandind" | "Aproved" | "Rejected";

const someStatus : string = "Pandding";

const showStatu = (status : Status) => {
    console.log("Your current application status is " + status);
};

showStatu(someStatus as Status);


// Non-null Assertion

interface Config {
    port ?: number;
};

const config : Config = {
    port : 5000,
};

const currentPort : number = config.port!; // (Shortcut) & mostly use

// const currentPort : number = config.port as number;

console.log(currentPort);


// Constant Assertion

const configuration = {
    port : 8080,
    prefix : "/api/v1",
} as const;

console.log(configuration);