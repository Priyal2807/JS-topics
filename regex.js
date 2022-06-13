const print = (str, reg) => console.log(str.match(reg));

/* using the test function to find the regular expression */
let myStr = "Hello World";
let reg = /Hello/;
console.log(reg.test(myStr));

/*ignoring case*/
let myStr2 = "hello world";
let reg2 = /Hello/i;
console.log(reg2.test(myStr2));

/*ignoring case and global*/
myStr = "Hello hello world"
reg = /Hello/ig;
print(myStr,reg);

/*finding all vowels in the given string using character classes*/
myStr = "this is a test string"
reg = /[aeiou]/gi;
print(myStr,reg); //without global it gives the first vowel i 

/*Wildcard character - match only one character*/
myStr = "try matching this"
reg = /tr..m/;
print(myStr,reg);

/* match range of character */
myStr = "all letters"
reg = /[a-z]/; //gives only first letter a
print(myStr,reg);

/* match range of character - global */
myStr = "all letters"
reg = /[a-z]/g; //gives all the letters in myStr
print(myStr,reg);

/* match range of characters and digits- global */
myStr = "all Letters123"
reg = /[a-zA-Z0-9]/g; //gives all the letters in myStr
print(myStr,reg);

