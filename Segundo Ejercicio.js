const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year);
console.log(typeof year);

//////////////////////

let a = 10;    // 0 1 2  3  4   5   6   7   8  9  10 11 12 13 14 15 16 17 18 19 20
let b = 0x10;  // 0 1 2  3  4   5   6   7   8  9  a  b  c  d  e  f  10 11 12 13 14 15 16 17 18 19 1a 1b 1c 1d 1e 1f 20
let c = 0o10;  // 0 1 2  3  4   5   6   7   10 11 12 13 14 15 16 17 20
let d = 0b10;  // 0 1 10 11 100 101 110 111

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let x = 9e3;
let y = 123e-5;

console.log(x);
console.log(y);

//////////////////////

let a1 = 1/0;
let b1 = -Infinity;

console.log(a1);
console.log(b1);
console.log(typeof a1);
console.log(typeof b1);

let s = "it's defenitely not a number";
let n = s * 10;
console.log(n);
console.log(typeof n);