//todo 1 substring
var longText = "abhishekwas out here, coding.";
var shortText = longText.substring(0, 10);
console.log("shortText=", shortText);
//todo 2 string comparison
var first = "abhishek wasn't here.", second = "abhishek was here.";
var areEqual = (first === second);
console.log(areEqual);
//todo 3 string template
var product = "laptop", price = 700;
console.log("The product ".concat(product, " is priced at ").concat(price, " dollars."));
