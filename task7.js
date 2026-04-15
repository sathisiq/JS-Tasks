console.log("===== Task 1: Order System (setTimeout) =====");

console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 2000);

setTimeout(() => {
  console.log("Food ready");
}, 4000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);



console.log("\n===== Task 2: Digital Clock (setInterval) =====");

let count = 0;

let clock = setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());

  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);

console.log("\n===== Task 3: Callback Hell Simulation =====");

function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 2000);
}

function getUserPosts() {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 3000);
}

loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});



console.log("\n===== Task 4: Fake API Promise =====");

function getProducts() {
  return new Promise((resolve, reject) => {
    let success = true;  

    setTimeout(() => {
      if (success) {
        resolve([
          { id: 1, name: "Shirt" },
          { id: 2, name: "Shoes" }
        ]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

getProducts()
  .then((data) => {
    console.log("Products:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request Completed");
  });



console.log("\n===== Task 5: E-commerce Cart Total =====");

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
let expensive = cart.filter(item => item.price > 1000);
let names = cart.map(item => item.name.toUpperCase());

console.log("Total Price:", total);
console.log("Above 1000:", expensive);
console.log("Uppercase Names:", names);



console.log("\n===== Task 6: Student Result System =====");

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failed = students.filter(s => s.marks < 50);
let distinction = students.some(s => s.marks > 80);
let allPassed = students.every(s => s.marks > 35);
let firstFail = students.find(s => s.marks < 50);

console.log("Failed:", failed);
console.log("Any Distinction:", distinction);
console.log("All Passed:", allPassed);
console.log("First Failed:", firstFail);



console.log("\n===== Task 7: Employee Salary Analysis =====");

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

let updated = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.1
}));

let highSalary = employees.filter(emp => emp.salary > 30000);
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
let sorted = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Updated:", updated);
console.log("High Salary:", highSalary);
console.log("Total Salary:", totalSalary);
console.log("Sorted:", sorted);



console.log("\n===== Task 8: String Search System =====");

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

let exists = products.includes("Mobile");
let lower = products.map(p => p.toLowerCase());
let index = products.indexOf("Tablet");
let joined = products.join("-");

console.log("Has Mobile:", exists);
console.log("Lowercase:", lower);
console.log("Tablet Index:", index);
console.log("Joined:", joined);



console.log("\n===== Task 9: Age Calculator =====");

let dob = new Date("2002-04-10");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

console.log(`You are ${age} years old`);



console.log("\n===== Task 10: Login Validation System =====");

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



console.log("\n===== Task 11: Even Number Analyzer =====");

let numbers = [10, 15, 20, 25, 30];

let even = numbers.filter(n => n % 2 === 0);
let hasOdd = numbers.some(n => n % 2 !== 0);
let allEven = numbers.every(n => n % 2 === 0);
let first = numbers.find(n => n > 20);

console.log("Even Numbers:", even);
console.log("Has Odd:", hasOdd);
console.log("All Even:", allEven);
console.log("First > 20:", first);



console.log("\n===== Task 12: Bonus Order System =====");

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);

let pending = orders.filter(o => o.status === "pending");
let bigOrder = orders.some(o => o.amount > 1000);
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);

console.log("Revenue:", revenue);
console.log("Pending Orders:", pending);
console.log("Any Order >1000:", bigOrder);
console.log("Sorted Orders:", sortedOrders);