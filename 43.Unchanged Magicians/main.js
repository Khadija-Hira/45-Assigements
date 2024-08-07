"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(myarray) {
    return [...myarray];
}
function makeGreat(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        magicians[i] = 'The Great ' + myArray[i];
    }
}
function show_magicians(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        console.log(magiciansArray[i]);
    }
    ;
}
const copyMagicianArray = copyArray(magicians);
makeGreat(copyMagicianArray);
console.log('\nThis is my original array:');
show_magicians(magicians);
console.log('\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);
