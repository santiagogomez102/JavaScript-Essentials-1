let country = "Malawi";
let continent = 'Africa';

console.log(country);
console.log(typeof country);
console.log(continent);
console.log(typeof continent);

//////////////////

let message1 = "The vessel 'Mars' called ar the port.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';

console.log(message1);
console.log(message2);

//////////////////

let message3 = 'The vessel \'Mars\' called ar the port.';
let message4 = "Cyclone \"Cilida\" to pass close to Mauritius.";

console.log(message3);
console.log(message4);

let path = "C:\\Windows";
console.log(path);

//////////////////

let path2 = "C:\\Windows" - "Windows";
console.log(path2);

let test = "100" - "10";
console.log(test);
console.log(typeof test);

//////////////////

let path3 = "C:\\" + "Windows";
console.log(path3);

let test2 = "100" + "10";
console.log(test2);
console.log(typeof test2);

//////////////////

let country2 = "Malawi";
let continent2 = "Africa";

let sentence = `${country2} is located in ${continent2}.`;
console.log(sentence);

//////////////////

console.time();
console.log("test console");
console.timeEnd();

//////////////////

let river = "Mekong";
let character = river.charAt(2);
console.log(character);

//////////////////

let str = "java script language";

console.log(str.length);
console.log('test'.length);

console.log(str.charAt(15));
console.log("abc".charAt(1));

console.log(str.slice(2,9));
console.log('test'.slice(1,3));

console.log(str.split(" "));
console.log("192.168.1.1".split('.',3));  // Limited to 3