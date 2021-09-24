const person1={
    full_name:'abu shadat shiakt',
    age:20,
    salary:45000,
    feedbill:function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}
const person2={
    full_name:'ali arman',
    age:21,
    salary:50000
}
const persontwo=person1.feedbill.bind(person2);
console.log(persontwo(100));