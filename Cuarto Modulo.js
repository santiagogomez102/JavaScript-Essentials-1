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

while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, *, /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+": result = firstNumber + secondNumber; break;
            case "+": result = firstNumber - secondNumber; break;
            case "+": result = firstNumber * secondNumber; break;
            case "+": result = firstNumber / secondNumber; break;
            default: result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    
    alert(result);
}