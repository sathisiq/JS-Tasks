// 🔹 Section 1: Printing & User Interaction
// Print name & designation
console.log("Name: Innoval Iq");
console.log("Designation: Full Stack Developer");

// Alert message
alert("Welcome to JavaScript Session");

// Confirm box
let likeCoding = confirm("Do you like coding?");
console.log("Do you like coding? ", likeCoding);

// Prompt input
let favFood = prompt("Enter your favorite food:");
console.log("Favorite Food: ", favFood);

// Display on UI
document.writeln("Good Evening Team <br>");

// ================================
// 🔹 Section 2: Console Methods
// ================================

console.log(100);
console.warn("This is a warning");
console.error("Something went wrong!");

// Clear console
console.clear();

// ================================
// 🔹 Section 3: Data Types
// ================================

let name = "Innoval";
console.log(name, typeof name);

let age = 23;
console.log(age, typeof age);

let isCoding = true;
console.log(isCoding, typeof isCoding);

let x;
console.log(x, typeof x);

let y = null;
console.log(y, typeof y);

// ================================
// 🔹 Section 4: Arrays
// ================================

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

// First & last
console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);

// Add element
fruits.push("Pineapple");
console.log("After Add:", fruits);

// Remove last
fruits.pop();
console.log("After Remove:", fruits);

// Length
console.log("Length:", fruits.length);

// ================================
// 🔹 Section 5: Objects
// ================================

let student = {
  name: "Naveen",
  age: 22,
  course: "BSc CS",
  fruits: ["Apple", "Mango", "Banana"]
};

// Print student name
console.log(student.name);

// Add property
student.college = "ABC College";
console.log(student);

// Access nested array
console.log(student.fruits[1]);

// Update property
student.age = 23;
console.log(student);

// ================================
// 🔹 Section 6: Operators
// ================================

let a = 10, b = 5;

console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

// ================================
// 🔹 Section 7: Increment & Decrement
// ================================

let num1 = 5;
console.log("Post Increment:", num1++); // prints 5
console.log("After:", num1); // 6

let num2 = 5;
console.log("Pre Increment:", ++num2); // prints 6

// Difference
let num3 = 5;
console.log(num3++); // 5
console.log(++num3); // 7

// Decrement
let num4 = 5;
console.log(num4--); // 5
console.log(--num4); // 3

// Logic Task
let a1 = 5;
let b1 = a1++;
let c1 = ++a1;
console.log("a:", a1); // 7
console.log("b:", b1); // 5
console.log("c:", c1); // 7

// ================================
// 🔹 Section 8: Real-Time Logic Tasks
// ================================

// Voting eligibility
let userAge = prompt("Enter your age:");
if (userAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Greeting
let userName = prompt("Enter your name:");
console.log("Hello " + userName);

// Highest marks
let marks = [78, 85, 90, 66, 88];
let max = Math.max(...marks);
console.log("Highest Marks:", max);

// Fruits object
let fruitObj = {
  category: "Tropical",
  items: ["Mango", "Pineapple", "Papaya"]
};
console.log(fruitObj.items[0]);

// Prompt + Array
let favFruits = [];
favFruits.push(prompt("Enter fruit 1:"));
favFruits.push(prompt("Enter fruit 2:"));
favFruits.push(prompt("Enter fruit 3:"));

console.log("Your Favorite Fruits:", favFruits);
