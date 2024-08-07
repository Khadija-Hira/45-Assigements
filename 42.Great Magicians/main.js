"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
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
makeGreat(magicians);
show_magicians(magicians);
