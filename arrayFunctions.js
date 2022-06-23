/*adding elements in an array*/

let arr=[1,2,3,4]
arr.push(5)
arr.push(6)

console.log(arr)

/* implementation of push*/
/*https://stackoverflow.com/questions/27386264/how-does-the-javascript-array-push-code-work-internally*/
Array.prototype.myPush = function(x)
{
    let len = this.length;
    this[len] = x;
    len++;
    this.length = len;
  return this;

}

console.log(arr.myPush(90));
console.log(arr)
