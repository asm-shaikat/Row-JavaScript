// Spread operator
// option1
let first=[10,20,30,40];
let second=[50,60,70,80];

//  let add=first.concat(second);
let add=[...first,...second];
console.log(add);
console.log(Math.max(...second));

console.log(...first,...second);  // [10, 20, 30, 40, 50, 60, 80]
