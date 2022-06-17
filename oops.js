//own properties
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

function Vehicle(){}
Vehicle.prototype={
    print: function(){
        return "I am a vehicle";
    }
}

let truck = new Vehicle(); //Vehicle is the super type
console.log(truck.print());
let bus = Object.create(Vehicle.prototype);
console.log(bus.print())

//car is the subtype
Car.prototype = Object.create(Vehicle.prototype); //this will remove the wheels and noofwheels property for any new object defined but will keep the new  print function defined for vehicle
let swift = new Car(3456,"Swift")
console.log(swift.print());//I am a vehicle
console.log(swift instanceof Car);//true
console.log(swift.constructor === Car);//false
console.log(swift.constructor === Vehicle);//false
console.log(swift.constructor === Object);//true

Car.prototype.constructor = Car;
console.log(Car.prototype);//{constructor: ƒ}
Car.prototype.print = function(){
    return "I have overridden the function"
}

console.log(swift.print());//I have overridden the function
console.log(Car.prototype);//{constructor: ƒ, print: ƒ}