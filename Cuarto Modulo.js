"use strict"

let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
for (let i = 0; i < names.length ; i++) {
    console.log(names[i]);
}

let values = [10, 30, 50, 100];
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
}
for (let i = 0; i < values.length; i+=2){
    console.log(values[i]);
}