//@ts-ignore
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
//to not create js file whenever there is an error in 
// ts file, just write tsc --noEmitOnError index.ts and
// it'll not create corresponding js file whenever there
// is an error in index.ts file.
