// function shaikat(x,y){
//     if(y==undefined){
//         y=0;
//     }
//     return x+y;
// }
// console.log(shaikat(100));
// function shaikat(x,y){
//     y=y||0;
//     return x+y;
// }
// console.log(shaikat(100));
function shaikat(x,y=0){
    return x+y;
}
console.log(shaikat(100));