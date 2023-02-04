function Scope(){
    var name = "Abu Shadat Shaikat";
    let id = 200101057
    const batch = "10th"
}

console.log(Scope.name); // Abu Shadat Shaikat
console.log(Scope.id); // Undefined
console.log(Scope.batch); // Undefined


// function variableScope() {

//     var x = 10;
//     let y = 20;
//     const z = 30;
  
//     console.log(x); // 10
//     console.log(y); // 20
//     console.log(z); // 30
//   }
  
//   console.log(x); // ReferenceError: x is not defined
//   console.log(y); // ReferenceError: y is not defined
//   console.log(z); // ReferenceError: z is not defined
  
//   variableScope();