// 1
var a = 10;
a = 20;
var a = 30;
console.log(a); // Output: 30   // Var is accept the redeclaration and reassign the value.

// 2
var a = 5;
var a = 15;
console.log(a); // Output: 15  // var is accept the redeclaration but it will take the last value assigned to it.

// 3
var a = 1;
a = 2;
a = 3;
console.log(a); // Output: 3 // var is accept the reassign the value but it will take the last value assigned to it.

// 4
var a = 7;
a = 14;
var a = 21;
a = 28;
console.log(a); // Output: 28 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 5
var a = 100;
var a = 200;
a = 300;
console.log(a); // Output: 300 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 6
var a = 9;
console.log(a); // Output: 9 // var is accept the declaration and it will take the value assigned to it.

// 7
var a = 11;
a = 22;
console.log(a); // Output: 22 // var is accept the reassign the value but it will take the last value assigned to it.

// 8
var a = 50;
var a = 60;
var a = 70;
console.log(a); // Output: 70 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 9
var a = 2;
a = 4;
a = 6;
var a = 8;
console.log(a); // Output: 8 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 10
var a = 99;
a = 88;
console.log(a); // Output: 88 // var is accept the reassign the value but it will take the last value assigned to it.


// 11
let b = 10;
b = 20;
console.log(b); // Output: 20 // let is accept the reassign the value but it will take the last value assigned to it.

// 12
let b = 5;
b = 15;
b = 25;
console.log(b); // Output: 25 // let is accept the reassign the value but it will take the last value assigned to it.

// 13
let b = 1;
console.log(b); // Output: 1 // let is accept the declaration and it will take the value assigned to it.

// 14
let b = 7;
b = 14;
console.log(b); // Output: 14 // let is accept the reassign the value but it will take the last value assigned to it.

// 15
let b = 100;
b = 200;
b = 300;
console.log(b); // Output: 300 // let is accept the reassign the value but it will take the last value assigned to it.

// 16
let b = 9;
let b = 18;
console.log(b); // Output: SyntaxError: Identifier 'b' has already been declared // let is not accept the redeclaration of the variable. It will throw an error if we try to redeclare a variable with the same name.

// 17
let b = 50;
b = 60;
let b = 70;
console.log(b); // Output: SyntaxError: Identifier 'b' has already been declared // let is not accept the redeclaration of the variable. It will throw an error if we try to redeclare a variable with the same name.

// 18
let b = 2;
b = 4;
console.log(b); // Output: 4 // let is accept the reassign the value but it will take the last value assigned to it.

// 19
let b = 99;
b = 88;
b = 77;
console.log(b); // Output: 77 // let is accept the reassign the value but it will take the last value assigned to it.

// 20
let b = 11;
b = 22;
console.log(b); // Output: 22 // let is accept the reassign the value but it will take the last value assigned to it.


// 21
const c = 10;
console.log(c); // Output: 10 // const is accept the declaration and it will take the value assigned to it.

// 22
const c = 5;
c = 15;
console.log(c); // Output: TypeError: Assignment to constant variable. // const is not accept the reassign the value. It will throw an error if we try to reassign a value to a constant variable.

// 23
const c = 1;
const c = 2;
console.log(c); // Output: SyntaxError: Identifier 'c' has already been declared // const is not accept the redeclaration of the variable. It will throw an error if we try to redeclare a variable with the same name.

// 24
const c = 7;
console.log(c); // Output: 7 // const is accept the declaration and it will take the value assigned to it.

// 25
const c = 100;
console.log(c); // Output: 100 // const is accept the declaration and it will take the value assigned to it.

// 26
const c = 50;
c = 60;
console.log(c); // Output: TypeError: Assignment to constant variable. // const is not accept the reassign the value. It will throw an error if we try to reassign a value to a constant variable.

// 27
const c = 9;
console.log(c); // Output: 9 // const is accept the declaration and it will take the value assigned to it.

// 28
const c = 20;
const c = 30;
console.log(c); // Output: SyntaxError: Identifier 'c' has already been declared // const is not accept the redeclaration of the variable. It will throw an error if we try to redeclare a variable with the same name.

// 29
const c = 99;
console.log(c); // Output: 99 // const is accept the declaration and it will take the value assigned to it.

// 30
const c = 11;
c = 22;
console.log(c); // Output: TypeError: Assignment to constant variable. // const is not accept the reassign the value. It will throw an error if we try to reassign a value to a constant variable.


// 31
var a = 1;
var a = 2;
var a = 3;
console.log(a); // Output: 3 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 32
var a = 10;
a = 20;
a = 30;
var a = 40;
console.log(a); // Output: 40 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 33
var a = 5;
a = 15;
console.log(a); // Output: 15 // var is accept the reassign the value but it will take the last value assigned to it.

// 34
var a = 100;
var a = 200;
var a = 300;
a = 400;
console.log(a); // Output: 400 // var is accept the redeclaration and reassign the value but it will take the last value assigned to it.

// 35
var a = 7;
console.log(a); // Output: 7 // var is accept the declaration and it will take the value assigned to it.

// 36
let b = 3;
b = 6;
b = 9;
console.log(b); // Output: 9 // let is accept the reassign the value but it will take the last value assigned to it.

// 37
let b = 12;
let b = 24;
console.log(b); // Output: SyntaxError: Identifier 'b' has already been declared // let is not accept the redeclaration of the variable. It will throw an error if we try to redeclare a variable with the same name.

// 38
let b = 8;
b = 16;
console.log(b); // Output: 16 // let is accept the reassign the value but it will take the last value assigned to it.

// 39
const c = 2;
console.log(c); // Output: 2 // const is accept the declaration and it will take the value assigned to it.

// 40
const c = 4;
c = 8;
console.log(c); // Output: TypeError: Assignment to constant variable. // const is not accept the reassign the value. It will throw an error if we try to reassign a value to a constant variable.
