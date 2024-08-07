
function makeSandwich(items:string[]) {
    console.log("\nMaking a sandwich with the following items:");
        
    for (let i = 0; i < items.length; i++) {

       console.log(`- ${items[i]}`);
    }
    console.log("Your sandwich is ready !\n");
    }

    makeSandwich(["Cheese", "Lettuce"]);
    makeSandwich(["Turkey", "Tomato", "Mayo", "Mustard"]);
    makeSandwich(["Peanut Butter", "Jelly"]);