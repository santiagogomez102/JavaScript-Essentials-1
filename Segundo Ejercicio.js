let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);
console.log(typeof big);

console.log(big2);
console.log(7n / 4n);

let big3 = 1000n + 20;  //BigInt can't be added with normal numbers

let big4 = 1000n / 0n;  //Dividing by 0 returns an error