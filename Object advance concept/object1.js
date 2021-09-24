// const shaikat={
//     fname:'abu shadat shaikat',
//     age:20,
//     current:function(){
//         console.log(this.age);
//     }
// }
// shaikat.current();
const coustomer1={
    name:'shaikat',
    salary:45000,
    bill:function(ecost){
        return this.salary-ecost;
    }
}
console.log(coustomer1.bill(100));
