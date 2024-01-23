"use strict"

let a = true;
console.log(a);
a &&= false;    // Same as a = a && false;
console.log(a);

let b = false;
console.log(b);
b ||= true;     // Same as b = b || true;
console.log(b);