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

/*match characters except for the ones in reg-expressions*/
reg2 = /[^al]/g
print(myStr,reg2);  //this ends up matching space also

/* match range of characters and digits- global */
myStr = "all Letters123"
reg = /[a-zA-Z0-9]/g; //gives all the letters in myStr
print(myStr,reg);

/*match character appearing more than once but should be continous*/

myStr="aaaaahh got it"
reg=/a+/
print(myStr,reg);

/*match character appearing more than once if not continous in other parts of string - use global*/
myStr="aaaaahh got it aaa"
reg=/a+/g
print(myStr,reg);

/*match characters with zero or more character */
myStr = "new string new"
myStr2 = "nice string nice"
reg = /ne*/g
print(myStr,reg);
print(myStr2,reg)

/*lazy matching and greedy matching - this is by default*/
myStr = "titanic"
reg = /t[a-z]*i/  //this matches the longest string starting from t and ending in i -- greedy
print(myStr,reg);

//for lazy matching
reg = /t[a-z]*?i/
print(myStr,reg);   //also without global it gives an array with other properties also like index, input, groups

/* match pattern in beginning and end of string */
myStr = "Hello world"
reg = /^Hello/
reg2 = /world$/
print(myStr,reg)
print(myStr,reg2)

/*shorthand for matching alphabets, digits etc*/
myStr = "this is a test for shorthand 23324"
reg = /[a-zA-Z0-9]+/
print(myStr,reg)  //matches 'this' only -- put global

myStr = "this is a test for shorthand 23324"
reg = /[a-zA-Z0-9]+/g
print(myStr,reg)

reg = /\w+/g   //shorthand for the character class mentioned above
print(myStr,reg)

reg = /\W+/g  //matches everything excepts the letters and digits 
print(myStr,reg)

reg = /\d+/g  //only digits
print(myStr,reg)

reg = /\D+/g  //anything except digits, so spaces also and it will count the whole string as one if it does not encounter a digit in between
print(myStr,reg)

reg = /\s+/g  //all whitespaces
print(myStr,reg)

reg = /\S+/g   //anything but whitespaces
print(myStr,reg)

/*matching characters in a range*/
myStr = "please match aaaaaah"  //also it matches the highest number of a that fall in 3 and 6
reg=/a{3,6}h/   //even though we have 7 a but this will match 6 of them also
print(myStr,reg)

reg=/a{7}h/
print(myStr,reg)

/*making a character optional*/
myStr = "color"
myStr2 = "colour"
reg = /colou?r/
print(myStr,reg)
print(myStr2,reg)

