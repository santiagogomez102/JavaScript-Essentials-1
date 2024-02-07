"use strict"

let a = 10;
try {
    a = b;
}  catch (error) {
    console.log("An error!");
} finally {
    console.log("Finally!");
}
console.log(a);