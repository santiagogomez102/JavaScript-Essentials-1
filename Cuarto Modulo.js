"use strict"

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++){
    sum += values[i];
}
console.log(sum);