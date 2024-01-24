"use strict"

let price = 100;
let shippingCost = (price > 50) ? 0 : 5 ;
console.log(`price = ${price}, shipping = ${shippingCost}`);

let start = confirm("Start?");
let message = start ? "Here we go!" : "Aborted!";
alert(message);