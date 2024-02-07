"use strict"

try {
    let a = b;
} catch (e) {
    console.log("Caught " + e);
}
console.log("We handled the exception!");

try {
    let testArray1 = Array(10);
    console.log(testArray1.length);
    let testArray2 = Array(-1);
    console.log(testArray1.length);
} catch (error) {
    console.log("Caught " + error);
}
console.log("We handled the exception!");

try {
    let someNumber = 10;
    someNumber.length();
} catch (er) {
    console.log("Caught " + er);
}
console.log("We handled the exception!");

try {
    const someConstValue = 5;
    someConstValue = 7;
} catch (err) {
    console.log("Caught " + err);
}
console.log("We handled the exception!");

try {
    fun();
} catch (erro) {
    console.log("Caught " + erro);
}
console.log("We handled the exception!");

try {
    let a = b;
} catch (errorVal) {
    console.log("Caught " + errorVal);
}
console.log("We handled the exception!");