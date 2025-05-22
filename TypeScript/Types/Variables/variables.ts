// 1. string
let movieTitle: string = "Inception";
movieTitle = "Interstellar"; // This is valid
// movieTitle = 123; // This will cause a TypeScript error

// 2. number
let numCatLives:number = 9;
numCatLives += 1;
// numCatLives = "Zero"; // This will cause a TypeScript error

// 3. boolean
let isCatAlive: boolean = true;
isCatAlive = false; // This is valid

// 4. null
let emptyValue: null = null;

// 5. undefined
let uninitializedValue: undefined = undefined;

// 6. any
let randomValue: any = 10;
randomValue = "Hello"; // This is valid
randomValue = true; // This is also valid

// 7. void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, World!"); // This is valid

// 8. never
function throwError(message: string): never {
    throw new Error(message);
}
// throwError("This is an error!"); // This will throw an error

// Type Inference
let tvShow = "Breaking Bad";
// tvShow = 2;