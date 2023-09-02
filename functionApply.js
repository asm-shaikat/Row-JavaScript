// Same as call function but send parameters as array
const Details = {
    firstName: 'Abu Shadat ',
    lastName:  'Shaikat',
    name: function(mark,mark1,mark2) {
        return `${this.firstName} ${this.lastName},best score ${mark}`;
    }
}

const Details1 ={
    firstName : "Md",
    lastName : "Shaikat"
}

console.log(Details.name.apply(Details1,[13,12,15]));