"use strict"

console.log(BigInt(11));
console.log(BigInt(0x11));
console.log(BigInt(11e2));

console.log(BigInt(true));

console.log(BigInt("11"));
console.log(BigInt("0x11"));

//console.log(BigInt(null));        Converting from "null" doesn't work

//console.log(BigInt(undefined));   Converting from "undefined" doesn't work

//console.log(BigInt(NaN));         Converting from "NaN" doesn't work