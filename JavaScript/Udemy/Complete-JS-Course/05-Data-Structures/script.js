'use strict'
const restaurents = {
    name: "Classico Italiano",
    location: "Via Roma, 1",
    cuisine: "Italian",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    rating: 4.5,
    reviews: [
        { user: "Alice", comment: "Great food!", rating: 5 },
        { user: "Bob", comment: "Nice ambiance.", rating: 4 }
    ],
    mainMenu: [
        { name: "Pasta", price: 12 },
        { name: "Pizza", price: 10 },
        { name: "Salad", price: 8 }
    ],
    starterMenu: [
        { name: "Bruschetta", price: 5 },
        { name: "Garlic Bread", price: 4 },
        { name: "Caprese Salad", price: 6 }
    ],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
}

// Destructuring arrays
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = arr[0], b = arr[1], c = arr[2];
const [x, y, z] = arr;

console.log(x, y, z);

let [first, , , second] = restaurents.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [starter, main] = restaurents.order(2, 0);
console.log(starter, main);

// Nested destructuring
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring objects
const { name, location, cuisine } = restaurents;
console.log(name, location, cuisine);

const { name: restaurantName, location: restaurantLocation, cuisine: restaurantCuisine } = restaurents;
console.log(restaurantName, restaurantLocation, restaurantCuisine);