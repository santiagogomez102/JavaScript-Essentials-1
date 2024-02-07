"use strict"

let a = 10;
try {
    a = b;
}  catch (error) {
    try {
        console.log(b);
    } catch {
        console.log("Second catch!");
    }
} finally {
    console.log("Finally!")
}