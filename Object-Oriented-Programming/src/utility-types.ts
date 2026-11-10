// Utility Classes


// Partial
interface User {
    id: string;
    name: string;
    email: string;
}

const updateProfile = (id: string, date: Partial<User>) => {
    // some backend logic
};

updateProfile("abcd", { name: "Manik" });


// Required

interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {
  console.log("API Key:", config.apiKey);
  console.log("Timeout:", config.timeout);
};

initialize({
  apiKey: "asdfasdfa",
  timeout: 30000,
});


// Pick

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "ABC",
  description: "EFG",
};

console.log(preview);
// console.log(preview.name);
// console.log(preview.description);


// Omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 42,
  name: "Bob",
};

console.log(directoryEntry);
// console.log(directoryEntry.id);
// console.log(directoryEntry.name);


// Record

type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "http://localhost:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};

console.log(apiUrls);
// console.log(apiUrls.development);
// console.log(apiUrls.staging);
// console.log(apiUrls.production);


//* Partial

interface BlogPost {
  title: string;
  content: string;
  category: string;
  published: boolean;
}

const updateBlogPost = (data: Partial<BlogPost>) => {
  console.log("Updated Blog:", data);
};

updateBlogPost({
  title: "Learning TypeScript",
  published: true,
});


//* Required

interface ServerSettings {
  hostname?: string;
  port?: number;
  protocol?: string;
}

const configureServer = (settings: Required<ServerSettings>) => {
  console.log("Server Settings:", settings);
};

configureServer({
  hostname: "localhost",
  port: 8080,
  protocol: "https",
});


//* Pick

interface Movie {
  title: string;
  director: string;
  releaseYear: number;
  rating: number;
  genre: string;
}

type MovieCard = Pick<Movie, "title" | "rating" | "genre">;

const featuredMovie: MovieCard = {
  title: "Inception",
  rating: 8.8,
  genre: "Sci-Fi",
};

console.log(featuredMovie);


//* Omit

interface BankAccount {
  accountNumber: string;
  accountHolder: string;
  balance: number;
  pin: number;
}

type AccountInfo = Omit<BankAccount, "pin">;

const publicAccount: AccountInfo = {
  accountNumber: "BD123456",
  accountHolder: "Rafiul",
  balance: 50000,
};

console.log(publicAccount);


//* Record

type TrafficLight = "red" | "yellow" | "green";

const trafficRules: Record<TrafficLight, string> = {
  red: "Stop",
  yellow: "Wait",
  green: "Go",
};

console.log(trafficRules);