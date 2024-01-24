"use strict"

let numberInput = prompt("Input a number here!", "Number");
if (numberInput > 90 && numberInput < 110){
    alert("Bingo!");
} else {
    alert("Miss!");
};

let number = prompt("Input a number here!", "Number");
let message = (number > 90 && number < 110) ? "Bingo!" : "Miss!";
alert(message);

alert("Input 2 numbers:");

let n1 = Number(prompt("Number 1", 0));
let n2 = Number(prompt("Number 2", 0));

alert("Input a character from the following options: +, -, *, /");

let s1 = prompt("Symbol 1", "+, -, *, /");

let t1;

if((!Number.isNaN(n1)) && (!Number.isNaN(n2))){
    switch (s1) {
        case "+": t1 = n1 + n2; break;
        case "-": t1 = n1 - n2; break;
        case "*": t1 = n1 * n2; break;
        case "/": t1 = n1 / n2; break;
        default: t1 = "An error has ocurred with the symbols";
    }
} else {
    alert("An error has ocurred with the numbers");
}
alert(t1)