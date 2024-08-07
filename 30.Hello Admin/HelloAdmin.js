"use strict";
//Make a array of five or more usernames
Object.defineProperty(exports, "__esModule", { value: true });
const usernames = ['Admin', 'tom', 'john', 'thomas', 'james'];
// for (let i=0; 1<usernames.length; i++) {
// if (usernames[i] == "admin") { 
//     console.log("hello admin, would you like to see a status report?");
// } 
// else {
//     console.log(`Hello ${usernames[i]} , thank you for logging in again.`);
// }}
usernames.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for loggin in again.`);
    }
});
