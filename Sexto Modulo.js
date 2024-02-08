"use strict"

let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz');
let pi = part * 4;
console.log(pi);

let part1 = 0;
console.time('Leibniz1');
for(let k = 0; k < 10000000; k++) {
    part1 = part1 + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz1'); // -> Leibniz: 175.5458984375 ms
let pi1 = part1 * 4;
console.log(pi1);
