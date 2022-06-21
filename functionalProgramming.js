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

/*reduce function to find the user with the maximum age*/
const maxAge = users.reduce((max, user)=>Math.max(max, user.age),Number.NEGATIVE_INFINITY);
console.log(maxAge)

/*create own reduce function*/
Array.prototype.myReduce = function(callback, initial)
{
    let ans = initial;
    for(let i = 0;i<this.length;i++)
    {
        ans = callback(ans,this[i]);
    }
    return ans
}
const sumAge = users.myReduce((sum, user)=>sum+user.age,0);
console.log(sumAge)

/*slice function*/
const arr=[1,2,4,5]
console.log(arr.slice(1,3))
console.log(arr)/*does not change the original array*/

/*concat function*/
const num = [1,2]
console.log(num.push([4,5])) //[1,2,[4,5]]
console.log(num)/*push modifies the existing array*/
console.log(num.concat([12,13]))//[1,2,[4,5],12,13]
console.log(num)/* does not modify this*/
console.log(num.concat([4])) /*same as console.log(num.concat(4))*/
console.log(num.push([30]))/*not the same output as console.log(num.push(30))*/
console.log(num)

/*sort function*/
console.log(arr.sort((a,b) => {return a===b?0:a<b?1:-1}))  /*descending order*/

let demo = "this IS a DEMO string"
let ans1="";

/*tolowercase*/
console.log(ans1=demo.toLowerCase()) //this returns a new string so in principal with functional programming
console.log(ans1)

/*touppercase*/
console.log(demo.toUpperCase()) //same as above

/*flat*/
let anotherarr = [[1,2],[3,4]]
console.log(anotherarr.flat()) //this returns a new Array so in principle with functional programming

//some string and float and number functions coming up
//toFixed
//parseFloat
//parseInt
//charCodeAt
//fromCharCode

