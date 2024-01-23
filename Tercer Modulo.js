"use strict"

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

const a = false;
const b = true;
const c = false;
const d = true;
console.log(a && b && c || d);
console.log(a && b && (c || d));