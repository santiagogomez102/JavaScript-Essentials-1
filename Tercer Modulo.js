"use strict"

let n1 = 10;
let n2 = 10;

console.log(n1);
console.log(n1++);
console.log(n1);

console.log(n2);
console.log(++n2);
console.log(n2);

let n3 = 20;
let n4 = 20;

console.log(n3);
console.log(n3--);
console.log(n3);

console.log(n4);
console.log(--n4);
console.log(n4);

/*
console.log(n1++) is the same as:
console.log(n1);
n1 = n1 + 1;
while console.log(++n1) is the same as:
n1 = n1 + 1;
console.log(n1);
*/

console.log(0.2 + 0.1); // 0.30000000000000004 All these values are not precise as the number has to be divisable by 252
console.log(0.2 * 0.1); // 0.020000000000000004 All these values are not precise as the number has to be divisable by 252
console.log(0.3 / 0.1); // 2.9999999999999996 All these values are not precise as the number has to be divisable by 252