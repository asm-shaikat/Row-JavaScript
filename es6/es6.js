let fname = 'Abu Shadat';
let lname = 'Shaikat';
// With es5/ old js
// console.log('My first name is '+fname+'.'+'\nMy Last name is '+lname+'.');

// with modern js/es6
// console.log(`My first name ${fname}.
// My Last name is ${lname}.`)

// sum =  b+c
// let c = 10;
// let b = 20;
// console.log(`Sum = ${b+c}`);

// es6 string method
// console.log(`${fname} `.repeat(5));
// console.log(`${fname}`.includes("b"));
// console.log(`${fname}`.startsWith("A"));
// console.log(`${fname}`.endsWith('T'));

//  array destructuring
let x = ['abu','shadat','shaikat'];
let [one,,three] = x;
console.log(`${one} ${three}`);