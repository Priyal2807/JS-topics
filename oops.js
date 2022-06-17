function Car(id, model) {
    this.id = id;
    this.model = model;
    this.printModel = function() {
        return "The model is " + this.model;
    }
}
//Car.prototype.wheels = 4; one way to define prototypes
//this is another way using objects
Car.prototype = {
    constructor: Car,
    wheels : 4,
    noofwheels: function(){
        return "this car has these many wheels " + this.wheels;
    }
}
// if we define the prototype this way, then the contructor becomes Object for the instance so put constructor prop in prototype
let maruti = new Car(1234, "Maruti");
console.log(maruti.printModel() +" and has this many wheels " + maruti.wheels);
console.log(maruti.printModel() + " " + maruti.noofwheels());
console.log(maruti instanceof Car);
console.log(maruti.constructor === Car);
console.log(Car.prototype.isPrototypeOf(maruti));
console.log(Object.prototype.isPrototypeOf(Car.prototype));


//Inheritance

