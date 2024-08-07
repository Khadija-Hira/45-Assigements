// create a program that simulates how websites ensure that everyone has a unique username.

let current_users : string[] = ["john" , "tom" , "james" , "Thomas" , "Charles"];

let new_users : string[] = ["Robert" , "ChaRles", "MArk" , "TOM" , "ThoMas"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
      
        console.log(`Sorry, the username '${newUser}'  is already taken. Please enter a new username..`);
    } 
    else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }})


   