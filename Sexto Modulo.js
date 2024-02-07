"use strict"

let div = function(n1, n2) {
    if (n2 == 0) {
        throw new RangeError("Value of divisor can't be 0");
    }
    return n1 / n2;
}

let numbers = [10, 40, 0, 20, 50];
for(let number of numbers) {
    try {
        console.log(div(1000, number));
    } catch (error) {
        console.log(error.message);
    }
}