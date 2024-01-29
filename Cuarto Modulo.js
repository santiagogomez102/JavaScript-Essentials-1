"use strict"

let n1 = Number(prompt("Number 1: ", "Higher number"));
let n2 = Number(prompt("Number 2", "Lower number"));

if ((!Number.isNaN(n1)) && (!Number.isNaN(n2)) && (n1 > n2)) {
    for (let i = n1; i >= n2; i -= 10) {
        console.log(i);
    }
} else {
    alert("Error");
}

////////////

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (let number of numbers) {
    console.log(number);
}

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(`Number ${number} is even`);
    }
}

for (let number of numbers) {
    if ((number > 10) && (number < 60)) {
        console.log(`Number ${number} higher than 10 and lower than 60`);
    }
}

////////////

let movies = [];
let badMovies = [];
let goodMovies = [];
let userInput1 = true;
let userInput2 = true;

while (userInput1 && userInput2) {
    userInput1 = prompt("Write the name of the movie:", "Name of the movie");
    userInput2 = prompt("Write the rating of the movie:", "Rating of the movie");
    if (userInput1 && userInput2 && (!Number.isNaN(userInput2))) {
        movies.push({
            name: userInput1,
            rating: userInput2
        });
        if (Number(userInput2)  < 7){
            badMovies.push({
                name: userInput1,
                rating: userInput2
            });
        }
        if (Number(userInput2)  >= 7){
            goodMovies.push({
                name: userInput1,
                rating: userInput2
            });
        }
    }
}
console.log("Bad movies");
for (let numrat of badMovies) {
    console.log(`${numrat.name} (${numrat.rating})`);
}
console.log("Good movies");
for (let numrat of goodMovies) {
    console.log(`${numrat.name} (${numrat.rating})`);
}

////////////

let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
};

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}

////////////

alert("Input 2 numbers:");

let num1 = Number(prompt("Number 1", 0));
let num2 = Number(prompt("Number 2", 0));

alert("Input a character from the following options: +, -, *, /");

let s1 = prompt("Symbol 1", "+, -, *, /");

let t1;

if((!Number.isNaN(num1)) && (!Number.isNaN(num2))){
    switch (s1) {
        case "+": t1 = num1 + num2; break;
        case "-": t1 = num1 - num2; break;
        case "*": t1 = num1 * num2; break;
        case "/": t1 = num1 / num2; break;
        default: t1 = "An error has ocurred with the symbols";
    }
} else {
    alert("An error has ocurred with the numbers");
}
alert(t1)