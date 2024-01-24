"use strict"

let isOver;
let counter = 1;
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);

let condition = false;
while (condition) {
    console.log("A while loop iteration.");
}
do {
    console.log("A do ... while loop iteration");
} while (condition);