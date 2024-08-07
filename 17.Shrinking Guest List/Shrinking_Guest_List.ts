let Guest_List : string[] = ['Tom','John','James'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
// }

let absent_guest : string = 'James' ;

let new_guest : string = 'Arik' ;

Guest_List[2] = new_guest;

// for(let i=0; i<Guest_List.length; i++){ 
//     console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
// }

console.log(`Mr. ${absent_guest} is not coming to the party`);
console.log('Good News! We find Big Table so we are inviting 3 more guests.')

Guest_List.unshift('George');
Guest_List.splice(2 , 0 , 'Mack');
Guest_List.push('Harry');

for(let i=0; i<Guest_List.length; i++){    
    console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}

console.log('\nSorry we can not arrange big table, Only Two peoples will be invited');
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
for(let i=0; i<Guest_List.length; i++){    
    console.log('Mr. ' + Guest_List[i] + ',\n\n You are still invited.\n\n Thank You!\n\n')
}
Guest_List.splice(0 , 2);
console.log(Guest_List);