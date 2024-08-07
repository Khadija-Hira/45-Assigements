let Guest_List : string[] = ['Tom','John','James'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}

let absent_guest : string = 'James' ;

let new_guest : string = 'Arik' ;

Guest_List[2] = new_guest;

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}

console.log(`Mr. ${absent_guest} is not coming to the party`);

console.log('Good News! We find Big Table so we are inviting 3 more guests.')

Guest_List.unshift('George');
Guest_List.splice(2 , 0 , 'Mack');
Guest_List.push('Harry');

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}