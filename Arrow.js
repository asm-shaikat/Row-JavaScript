let Arrow = (x, y) => x +y;
console.log(Arrow(10, 22)); // 32


const Arrow1 = {
    Firstname: "Abu Shadat",
    LastName : "Shaikat",
    insertArrow(){
        console.log(this.Firstname + " " + this.LastName);
    }
}
Arrow1.insertArrow(); // Abu Shadat Shaikat
