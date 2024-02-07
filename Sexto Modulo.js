"use strict"

try {
    console.log('abc');
    conole.log('abc');
} catch (error) {
    console.log(error.message);
}

let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("Incorrect arguments");
}