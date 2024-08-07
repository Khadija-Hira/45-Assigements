"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Store the numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach((num) => {
    // Use an if-else chain to determine the ordinal ending
    if (num === 1) {
        console.log(`${num}st`);
    }
    else if (num === 2) {
        console.log(`${num}nd`);
    }
    else if (num === 3) {
        console.log(`${num}rd`);
    }
    else {
        console.log(`${num}th`);
    }
});
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNumbers.length; i++) {
    let number = ordinalNumbers[i];
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
