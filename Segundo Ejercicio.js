"use strict"

let b1 = true;
let b2 = Boolean(false);
let n1 = 69;
let n2 = Number(420);
let bi1 = 100n;
let bi2 = BigInt(200);
let s1 = "Hello, World!";
let s2 = String("World, Hello!");
let u1;
let u2 = undefined;

//////////////

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);
console.log(`${u2} [${typeof u2}]`);

//////////////

let str = "1234";
let num = Number(str);
let bii = BigInt(num);
let bool = Boolean(bii);

console.log(bool + " " + typeof bool);

let num1 = Boolean(BigInt(Number("1234")));

console.log(`${num1} ${typeof num1}`);

//////////////

let b = true + false;
let n = 69 + 420;
let bi = 100n + 200n;
let s = "Hello" + " World!";
let u = undefined + undefined;

console.log(`${b} ${typeof b}`);
console.log(`${n} ${typeof n}`);
console.log(`${bi} ${typeof bi}`);
console.log(`${s} ${typeof s}`);
console.log(`${u} ${typeof u}`);

//////////////

const str1 = 42 + +"1";

console.log(`${str1} ${typeof str1}`);