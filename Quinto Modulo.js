"use strict"

let add = function(a, b) {
    return a + b;
}
console.log(add(10, 20));

//////////

add = (a, b) => {
    return a + b;
}
console.log(add(10, 20));

///////////

add = (a, b) => a + b;
console.log(add(10, 20));

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5));

//////////////

let names = ['Alice', 'Eve', 'John'];
function showName(element) {
    console.log(element);
}
names.forEach(showName);

showName = (element) => console.log(element);
names.forEach(showName);