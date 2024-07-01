"use strict";
//check even number
const isEven = (val) => {
    return (val % 2 === 0);
};
console.log(isEven(444));
console.log(isEven(463453));
//check for divisibility by 4 and 8
const isDivisibleBy4And8 = (value) => {
    return (value % 4 === 0 && value % 8 === 0);
};
console.log(isDivisibleBy4And8(48));
console.log(isDivisibleBy4And8(52));
// bigint - used for storing number more than 2^52
let smallNumber = 2 ** 53 + 29 ** 53 + 13523423 ** 35346345345;
console.log(smallNumber);
let bigNumber = 2n ** 53n + 29n ** 53n;
console.log(bigNumber);
console.log(bigNumber);
