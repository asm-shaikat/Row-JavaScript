// object apply mewthod
const person1={
    full_name:'abu shadat shiakt',
    age:20,
    salary:45000,
    feedbill:function(amount,tips,tax){
        this.salary=this.salary-amount-tips-tax;
        return this.salary;
    }
}
const person2={
    full_name:'ali arman',
    age:21,
    salary:50000
}
person1.feedbill.apply(person2,[10,10,10]);
console.log(person2)
