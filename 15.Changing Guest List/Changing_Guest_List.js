var Guest_List = ['Tom', 'John', 'James'];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n');
}
var absent_guest = 'James';
var new_guest = 'Arik';
Guest_List[2] = new_guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n');
}
console.log("Mr. ".concat(absent_guest, " is not coming to the party"));
