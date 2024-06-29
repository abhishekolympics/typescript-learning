//todo 1 substring

let longText:string = "abhishekwas out here, coding."

let shortText:string =longText.substring(0,10)

console.log("shortText=",shortText)


//todo 2 string comparison

let first:string="abhishek wasn't here.", second:string="abhishek was here."

let areEqual:boolean = (first === second);

console.log(areEqual);


//todo 3 string template

let product:string="laptop", price:number = 700

console.log(`The product ${product} is priced at ${price} dollars.`)
