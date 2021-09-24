class Parent{
    constructor(lname){
        this.lname=lname;
    }
    show(){
        return this.lname;
    }
}
class Child extends Parent{
    constructor(fname,lname){
        super(lname); //for calling parent class constractor
        this.fname=fname;
    }
    result(){
        console.log(`${this.fname} ${this.lname}`);
    }
}
// const father=new Parent("Uddin");
// console.log(father.show());
const child1=new Child("Md Shaikat","Uddin");
child1.result();
