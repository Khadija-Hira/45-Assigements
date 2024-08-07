import { ADDRCONFIG } from "dns";

//Tests for equality and inequality with strings 
console.log("equality and inequality tests with strings:");

console.log("apple" == "apple");//true
console.log("apple" === "apple");//false


//Tests using the lower case function
console.log("Tests with lower case function")
console.log("Apple".toLowerCase()== "apple" );


//Numerical tests
console.log("Numerical tests");

console.log(20>13);//true
console.log(7<4);//false


//Tests using "and" and "or" operators
const x: number = 10;
const y: number = 20;
const z: number = 30;

console.log("AND operator")  
console.log(x < y && y < z);//true

console.log("OR operator")
console.log(x > y || y < z);//true


// //Test whether an item is in a array
let number = [2, 4, 6, 8, 10];
console.log("Are '4' and '6' even numbers?"); 
console.log(number.includes(4) && number.includes(6));


//Test whether an item is not in a array
console.log("is '3 , 5' even numbers?");
console.log(number.includes (3)&& number.includes(5));//false
