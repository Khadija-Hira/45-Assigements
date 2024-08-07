"use strict";
// create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["john", "tom", "james", "Thomas", "Charles"];
let new_users = ["Robert", "ChaRles", "MArk", "TOM", "ThoMas"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}'  is already taken. Please enter a new username..`);
    }
    else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
});
// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
// new_users.forEach((newUser) => {
//   if (
//     current_users.some(
//       (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//     )
//   ) {
//     console.log(`${newUser} will need to enter a new username.`);
//   } else {
//     console.log(`${newUser} is available.`);
//   }
// });
// let current_users: string[] = ["John", "TOM", "James", "ThoMas", "ChaRles"];
// let new_users: string[] = ["Robert", "ChaRles", "MArk", "TOM", "ThoMas"];
// // Convert current_users list to lowercase for case-insensitive comparison
// let current_users_lower = current_users.map(user => user.toLowerCase());
// for (let i = 0; i < new_users.length; i++) {
//     let lowercase_new_username = new_users[i].toLowerCase();
//     if (current_users_lower.includes(lowercase_new_username)) {
//         console.log(`Sorry, the username '${new_users[i]}' is not available. Please choose a different one.`);
//     } else {
//         console.log(`Congratulations! The username '${new_users[i]}' is available.`);
//     }
// }
// // List of current usernames
// let currentUsers: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// // List of new usernames to check
// let newUsers: string[] = ['alice', 'Faythe', 'Gina', 'Charlie', 'Mallory'];
// // Convert currentUsers list to lowercase for case-insensitive comparison
// let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());
// // Loop through the newUsers list
// for (let newUser of newUsers) {
//     // Check if the new username (in lowercase) is in the list of current users
//     if (currentUsersLower.includes(newUser.toLowerCase())) {
//         console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${newUser}' is available.`);
//     }
// }
