const details ={
    name : "Abu Shadat Shaikat",
    password: function(){
        return `Password of ${this.name} is randomTest`
    }
};

const details1 = {
    name : "asm shaikat"
}

console.log(details.password.call(details1));