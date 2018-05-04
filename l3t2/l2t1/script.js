"use strict";

const a = [1, 2,-1, 3, 6, -2, -4, -109, 0, 6, -2, 0];

let b = a.filter(number => (number > 0));
let c = a.filter(number => (number < 0));

console.log(`Array with positive numbers: ${b}`);
console.log(`Array with positive numbers: ${c}`);