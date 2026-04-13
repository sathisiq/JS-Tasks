console.log("===== Task 1: E-commerce Cart Total =====");

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];
// Total price
let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// Above 1000
let expensive = cart.filter(item => item.price > 1000);

// Uppercase names
let names = cart.map(item => item.name.toUpperCase());

console.log("Total Price:", total);
console.log("Above 1000:", expensive);
console.log("Uppercase Names:", names);


console.log("\n===== Task 2: Student Result System =====");

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

// Failed students
let failed = students.filter(s => s.marks < 50);

// Any distinction
let distinction = students.some(s => s.marks > 80);

// All passed
let allPassed = students.every(s => s.marks > 35);

// First failed
let firstFail = students.find(s => s.marks < 50);

console.log("Failed:", failed);
console.log("Any Distinction:", distinction);
console.log("All Passed:", allPassed);
console.log("First Failed:", firstFail);


console.log("\n===== Task 3: Employee Salary Analysis =====");

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

// Increase 10%
let updated = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.1
}));

// Salary > 30000
let highSalary = employees.filter(emp => emp.salary > 30000);

// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

// Sort descending
let sorted = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Updated:", updated);
console.log("High Salary:", highSalary);
console.log("Total Salary:", totalSalary);
console.log("Sorted:", sorted);


console.log("\n===== Task 4: String Search System =====");

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

// Includes
let exists = products.includes("Mobile");

// Lowercase
let lower = products.map(p => p.toLowerCase());

// Index
let index = products.indexOf("Tablet");

// Join
let joined = products.join("-");

console.log("Has Mobile:", exists);
console.log("Lowercase:", lower);
console.log("Tablet Index:", index);
console.log("Joined:", joined);


console.log("\n===== Task 5: Age Calculator =====");

let dob = new Date("2002-04-10");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

console.log(`You are ${age} years old`);


console.log("\n===== Task 6: Login Validation System =====");

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUser = "admin";
let inputPass = "1234";

let foundUser = users.find(u => u.username === inputUser);

if (foundUser && foundUser.password === inputPass) {
  console.log("Login Success ✅");
} else {
  console.log("Invalid Credentials ❌");
}


console.log("\n===== Task 7: Even Number Analyzer =====");

let numbers = [10, 15, 20, 25, 30];

// Even numbers
let even = numbers.filter(n => n % 2 === 0);

// Any odd
let hasOdd = numbers.some(n => n % 2 !== 0);

// All even
let allEven = numbers.every(n => n % 2 === 0);

// First > 20
let first = numbers.find(n => n > 20);

console.log("Even Numbers:", even);
console.log("Has Odd:", hasOdd);
console.log("All Even:", allEven);
console.log("First > 20:", first);


console.log("\n===== Bonus Challenge: Order System =====");

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

// Revenue (delivered)
let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);

// Pending orders
let pending = orders.filter(o => o.status === "pending");

let bigOrder = orders.some(o => o.amount > 1000);

// Sort ascending
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);

console.log("Revenue:", revenue);
console.log("Pending Orders:", pending);
console.log("Any Order >1000:", bigOrder);
console.log("Sorted Orders:", sortedOrders);