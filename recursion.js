function fact(number){
    return  number*fact(number-1);
}
var result= fact(3);
console.log(result);