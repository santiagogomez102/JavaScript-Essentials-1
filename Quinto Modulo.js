"use strict"

function showMessage(message) {
    console.log(`Message: ${message}`);
}
let sm = showMessage;

sm("This works!");
console.log(typeof sm);

function doNothing() {
    return undefined;
}
let a = doNothing();
let b = doNothing;
console.log(typeof a);
console.log(typeof b);

function add(a, b) {
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function operation(func, first, second) {
    return func(first, second);
}
console.log(operation(add, 10, 20));
console.log(operation(multiply, 10, 20));