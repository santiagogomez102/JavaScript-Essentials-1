"use strict"

function add(first, second) {
    return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second));
console.log(add(second, third));
console.log(add(third, fourth));

let a = 100, b = 200, c = 300;
function test(a) {
    let b = 10;
    console.log(a);
    console.log(b);
    console.log(c);
}
test(1);
console.log(a);
console.log(b);
console.log(c);