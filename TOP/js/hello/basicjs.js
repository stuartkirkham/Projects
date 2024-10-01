// let a = 10;
// let age = "53";
// console.log(age);
// age = 54;
// console.log(age);

// const pi = 3.14;
// // pi = 10;
// // console.log(pi); // throws an error

// console.log(23+97);
// console.log(1+2+3+4+5+6);
// let num = (4+6+9) / 77;
// console.log(num);
// console.log(a);
// console.log(9*a);
// let b = 7*a;
// console.log(b);

// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;
// console.log(percentage);

// // strings

// const string = "The revolution will not be televised.";
// console.log(string);

// const badString1 = 'This is a test';
// const badString2 = 'This is a test';
// const badString3 = 'This is a test';

// const badString = string;
// console.log(badString);

// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

// // const badQuotes = 'This is not allowed!";
// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting); // "Hello, Chris"

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"


// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);

// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);

// const name = "Front ";
// const number = 242;
// console.log(name + number); // "Front 242"
// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);
// // number

// const myNum2 = 123;
// const myString2 = String(myNum2);
// console.log(typeof myString2);
// string
// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
   numPlusSeven = (number + 7);
   return numPlusSeven;
}
console.log(add7(1));
// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(number1,number2) {
    multNum = number1 * number2;
    return multNum;
}
console.log(multiply(1,2));
// Write a function called capitalize that takes a string and
//  returns that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); 
}
console.log(cap("hello, friend! How aRe YoU?"));
// Write a function called lastLetter that takes a 
// string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function last(string) {
    return string.charAt(string.length - 1);
}
console.log(last("this is my string"));


