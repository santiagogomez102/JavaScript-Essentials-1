"use strict"

console.log("start");
try {
    throw 100;
} catch (error) {
    console.log(error);
}
console.log("end");

function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(20));
console.log(factorial(1000));