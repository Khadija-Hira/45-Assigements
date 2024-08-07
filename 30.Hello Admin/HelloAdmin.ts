//Make a array of five or more usernames

const usernames: string[] = ['Admin', 'tom','john','thomas','james'];
     
usernames.forEach((username) => {
  
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");

  } 
  else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});

