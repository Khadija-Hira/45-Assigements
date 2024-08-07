"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'Large', message = 'I love Typescript!') {
    console.log(`The shirt size is ${size} and it has the message: "${message}"`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'JavaScript is awesome!');
