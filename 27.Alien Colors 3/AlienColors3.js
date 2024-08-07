"use strict";
//Turn your if-else chain from Exercise 24,26 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
//If the alien is green, print a message that the player earned 5 points.
let alien_color = "green";
if (alien_color == "green") {
    console.log("you just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("you just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("you just earned 15 points.");
}
//If the alien is yellow, print a message that the player earned 10 points.
alien_color = "yellow";
if (alien_color == "green") {
    console.log("you just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("you just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("you just earned 15 points.");
}
//If the alien is red, print a message that the player earned 15 points.
alien_color = "red";
if (alien_color == "green") {
    console.log("you just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("you just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("you just earned 15 points.");
}
