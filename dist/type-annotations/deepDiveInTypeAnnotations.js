"use strict";
//todo 1 substring
let longText = "abhishekwas out here, coding.";
let shortText = longText.substring(0, 10);
console.log("shortText=", shortText);
//todo 2 string comparison
let first = "abhishek wasn't here.", second = "abhishek was here.";
let areEqual = (first === second);
console.log(areEqual);
//todo 3 string template
let product = "laptop", price = 700;
console.log(`The product ${product} is priced at ${price} dollars.`);
