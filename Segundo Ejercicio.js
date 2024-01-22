"use strict"

let names = ["Olivia", "Emma", "Mateo", "Samuel"];

//.length returns the length of the array

console.log(names.length);

names[5] = "Amelia";
console.log(names.length);

console.log(names);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);

//.indexOf returns the position of the element

console.log(names.indexOf("Mateo"));
console.log(names.indexOf("Victor"));

//.push places the element to the end of the array

names.push("Santiago");
console.log(names.length);
console.log(names);

//.unshift places the element at the beginning of the array

names.unshift("Paula");
console.log(names.length);
console.log(names);

//.pop returns the last element of the array and deletes it from the array

let name = names.pop();
console.log(names.length);
console.log(name);
console.log(names);

//.shift returns the first element of the array and deletes it from the array

let name1 = names.shift();
console.log(names.length);
console.log(name1);
console.log(names);

//.reverse reverses the arrays, making the first element the last, the second will be the last but one, ...

names.reverse();
console.log(names);

//.slice creates a new array from selected elements of the original array

let n1 = names.slice(2);        //Copies from position 2 to end
console.log(n1);

let n2 = names.slice(1,3);      //Copies from position 1 to 3
console.log(n2);

let n3 = names.slice(0,-1);     //Copies from position 0 to the end -1
console.log(n3);

let n4 = names.slice(-1);       //Copies from end to end -1
console.log(n4);

//.concat creates a new array attaching elements from an array to the original

let otherNames = ["William", "Jane"];
let allNames = names.concat(otherNames);

console.log(names);
console.log(otherNames);
console.log(allNames);