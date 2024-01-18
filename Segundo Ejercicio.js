"use strict"

let priceRose = 8;
let quantityRose = 70;
let priceLily = 10;
let quantityLily = 50;
let priceTulip = 2;
let quantityTulip = 120;

let valueRose;
let valueLily;
let valueTulip;

valueRose = priceRose * quantityRose;
valueLily = priceLily * quantityLily;
valueTulip = priceTulip * quantityTulip;

let total = valueRose + valueLily + valueTulip;

console.log("Rose - unit price: " + priceRose + " , quantity: " + quantityRose + " , value: " + valueRose);
console.log("Lily - unit price: " + priceLily + " , quantity: " + quantityLily + " , value: " + valueLily);
console.log("Tulip - unit price: " + priceTulip + " , quantity: " + quantityTulip + " , value: " + valueTulip);
console.log("Total: " + total);

const priceRosec = 8;
let quantityRose2 = 70;
const priceLilyc = 10;
let quantityLily2 = 50;
const priceTulipc = 2;
let quantityTulip2 = 120;

let valueRose2;
let valueLily2;
let valueTulip2;

quantityRose2 = quantityRose2 - 20;
quantityLily2 = quantityLily2 - 30;

valueRose2 = priceRosec * quantityRose2;
valueLily2 = priceLilyc * quantityLily2;
valueTulip2 = priceTulipc * quantityTulip2;

let total2 = valueRose2 + valueLily2 + valueTulip2;

console.log("Rose - unit price: " + priceRosec + " , quantity: " + quantityRose2 + " , value: " + valueRose2);
console.log("Lily - unit price: " + priceLilyc + " , quantity: " + quantityLily2 + " , value: " + valueLily2);
console.log("Tulip - unit price: " + priceTulipc + " , quantity: " + quantityTulip2 + " , value: " + valueTulip2);
console.log("Total: " + total2);