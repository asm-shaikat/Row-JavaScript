let first=[10,20,30,40];
let second=[50,60,70,80];
// option1

//  let add=first.concat(second);
let add=[...first,...second];
console.log(add);
console.log(Math.max(...second));