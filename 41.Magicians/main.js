"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        console.log(magiciansArray[i]);
    }
}
show_magicians(magicians);
