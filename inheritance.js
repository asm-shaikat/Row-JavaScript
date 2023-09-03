class Car{
    constructor(name){
        this.name = name;
    }

    start(){
        console.log(`${this.name} is starting`);
    }
}

class Model extends Car{
    constructor(name, model){
        super(name);
        this.model = model;
    }
    stop(){
        console.log(`${this.model} is stopping`);
    }
}

const car1 = new Model('Audi',"X20");

car1.start();
car1.stop();