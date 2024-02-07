"use strict"

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if (a > b){
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted);

let numbers1 = [50, 10, 40, 30, 20];
console.log(numbers1.sort((a, b) => a - b));

///////////

console.log(numbers1.sort((a, b) => b - a));

////////////

function add(a, b) {
    return ((Number.isInteger(a)) && (Number.isInteger(b))) ? a + b : NaN;
}
function sub(a, b) {
    return ((Number.isInteger(a)) && (Number.isInteger(b))) ? a - b : NaN;
}
function mult(a, b) {
    return ((Number.isInteger(a)) && (Number.isInteger(b))) ? a * b : NaN;
}
console.log(`Add: 2 + 3 = ${add(2, 3)}`);
console.log(`Add: 2 + 3.2 = ${add(2, 3.2)}`);
console.log(`Sub: 2 - 3 = ${sub(2, 3)}`);
console.log(`Sub: 2 - 3.2 = ${sub(2, 3.2)}`);
console.log(`Mult: 2 * 3 = ${mult(2, 3)}`);
console.log(`Mult: 2 * 3.2 = ${mult(2, 3.2)}`);

////////////

let add1 = (a, b) => ((Number.isInteger(a)) && (Number.isInteger(b))) ? a + b : NaN;
let sub1 = (a, b) => ((Number.isInteger(a)) && (Number.isInteger(b))) ? a - b : NaN;
let mult1 = (a, b) => ((Number.isInteger(a)) && (Number.isInteger(b))) ? a * b : NaN;

console.log(`Add: 2 + 3 = ${add1(2, 3)}`);
console.log(`Add: 2 + 3.2 = ${add1(2, 3.2)}`);
console.log(`Sub: 2 - 3 = ${sub1(2, 3)}`);
console.log(`Sub: 2 - 3.2 = ${sub1(2, 3.2)}`);
console.log(`Mult: 2 * 3 = ${mult1(2, 3)}`);
console.log(`Mult: 2 * 3.2 = ${mult1(2, 3.2)}`);

/////////////

let add2 = (a, b) => ((Number.isInteger(a)) && (Number.isInteger(b))) ? a + b : NaN;
let sub2 = (a, b) => ((Number.isInteger(a)) && (Number.isInteger(b))) ? a - b : NaN;
let mult2 = (a, b) => ((Number.isInteger(a)) && (Number.isInteger(b))) ? a * b : NaN;
function action(func, num1, num2){
    return func(num1, num2);
}
console.log(`Add: 2 + 3 = ${action(add2, 2, 3)}`);
console.log(`Add: 2 + 3.2 = ${action(add2, 2, 3.2)}`);
console.log(`Sub: 2 - 3 = ${action(sub2, 2, 3)}`);
console.log(`Sub: 2 - 3.2 = ${action(sub2, 2, 3.2)}`);
console.log(`Mult: 2 * 3 = ${action(mult2, 2, 3)}`);
console.log(`Mult: 2 * 3.2 = ${action(mult2, 2, 3.2)}`);

//////////////////

let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function() {
    clearInterval(intervalId)
}, 20000);

///////////////

let fibbRec = function(n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n-1) + fibbRec(n - 2);
        }
    }
    return retVal;
}
console.log(fibbRec(7));

////////////////

let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
console.log(fibb(8));

///////////////

function fibb1(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++){
        let c = a;
        a = b;
        b += c;
    }
    return b;
}
console.log(fibb1(8));