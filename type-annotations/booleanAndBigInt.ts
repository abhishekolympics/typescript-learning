//check even number

const isEven = (val:number):boolean => {
    return (val%2 === 0);
}

console.log(isEven(444));
console.log(isEven(463453));

//check for divisibility by 4 and 8

const isDivisibleBy4And8 = (value:number):boolean => {
    return (value%4 === 0 && value%8 === 0);
}

console.log(isDivisibleBy4And8(48))
console.log(isDivisibleBy4And8(52))
