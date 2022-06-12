const myfunction = () =>{
    console.log("Hello World");
}

myfunction();


const myFunction2 = () => console.log("Hello world without curly braces");
myFunction2();

const myFunction3 = (name) => console.log("Hello " + name);
myFunction3("User");

const myFunction4 = (name="user") => console.log("Hello " + name);
myFunction4();