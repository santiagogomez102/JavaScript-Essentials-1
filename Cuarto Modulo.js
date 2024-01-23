"use strict"

let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady)            //if can be used without brackets, but only the next line belongs to it
    alert("User ready!");

isUserReady = confirm("Are you ready?");
if (isUserReady) {
    console.log("User ready!");
    alert("User ready!");
}

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
// console.log(total);      "total" variable was declared inside the "if", therefore it doesn't exist outside

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21){
    if(cartValue >= 300 || points >= 500){
        shippingCost = 0;
    }
}

console.log(shippingCost);

if (userAge > 21 && (cartValue >= 300 || points >= 500)){   //  Using && one line gets deleted
    shippingCost = 0;
}