/*map function*/
/*does not alter the existing array and returns a new array*/
const users=[
    {
        name:"Ramesh", 
        age:56, 
        address:"Delhi"
    },
    {
        name: "Reema",
        age:23,
        address:"Pune"
    },
    {
        name:"Suraj",
        age:45,
        address:"Pune"
    }
]

console.log(users.map(user=>user.name))
console.log(users.map(user=>user.address))

/*Implement own map function*//*myMap is a function, callback is the parameter of the myMap function which will double the users age*//*this gives access to the object calling myMap*/
Array.prototype.myMap = function(callback){
    const newArray = []
    this.forEach(a=>newArray.push(callback(a)));
    return newArray;
}

const ans = users.myMap(usr=>usr.age*2);
console.log(ans)

/*Filter function*//*inbuilt one in Array.prototype*/
console.log(users.filter(user=>user.age>40))//this will return the whole object, can use map to get the required property
console.log(users.filter(user=>user.age>40).map(user=>user.name))

/*Implement own Filter function*/
Array.prototype.myFilter = function(callback){
    const newArray = []
    this.forEach(a => {if(callback(a))
        newArray.push(a)}
        )
    return newArray;
}
const answer = users.myFilter(user=>user.age>40)
console.log(answer)