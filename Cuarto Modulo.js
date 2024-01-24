"use strict"

let i = 0;
while (true) {
    console.log(i);
    i++;
    if (i >= 5){
        break;
    }
}
alert(`Exited the loop with a break (${i})`);

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}