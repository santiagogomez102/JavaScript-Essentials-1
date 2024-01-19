"use strict"

let testObj = {
    nr: 600,
    str: "text"
};

console.log(testObj.nr);
console.log(testObj.str);

//////////////

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
}

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
}

console.log(user1.name);
console.log(user2.name);

console.log(user1.age);
user1.age = 67;
console.log(user1.age);

console.log(user2.phone);       //property doesn't exist
user2.phone = "904-3997557";    //new property defined that didn't exist
console.log(user2.phone);
delete user2.phone;             //property deleted
console.log(user2.phone);