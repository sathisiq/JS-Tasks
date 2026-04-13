 console.log("===== Task 1: E-commerce Cart System =====");

let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}
];

let cart2 = [
  {name: "Watch", price: 2000}
];

// Merge carts
let mergedCart = [...cart1, ...cart2];

// Add new product
mergedCart.push({name: "Bag", price: 1000});

// Remove last product
mergedCart.pop();

// Calculate total price
let total = mergedCart.reduce((sum, item) => sum + item.price, 0);

console.log("Merged Cart:", mergedCart);
console.log("Total Price:", total);


console.log("\n===== Task 2: User Profile Management =====");

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

// Merge
let updatedUser = {...user, ...update};

// Destructure
let {name, role, salary} = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);


console.log("\n===== Task 3: Team Score System =====");

function teamScore(teamName, ...scores) {
  console.log("Team:", teamName);
  console.log("Scores:", scores);

  let total = scores.reduce((a, b) => a + b, 0);
  let highest = Math.max(...scores);

  console.log("Total Score:", total);
  console.log("Highest Score:", highest);
}

teamScore("Warriors", 50, 60, 70);


console.log("\n===== Task 4: Nested Data Extraction =====");

let apiData = {
  user: {
    name: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

let {
  user: {
    name: userName,
    address: {city, pincode}
  }
} = apiData;

console.log(`${userName} lives in ${city} - ${pincode}`);


console.log("\n===== Task 5: Array Dashboard =====");

let users = ["A", "B", "C", "D", "E"];

users.splice(2, 2, "X", "Y");

console.log("Updated Users:", users);

// First 3 users
let firstThree = users.slice(0, 3);
console.log("First 3:", firstThree);

// Check B exists
console.log("B exists:", users.includes("B"));

// Index of E
console.log("Index of E:", users.indexOf("E"));


console.log("\n===== Task 6: Data Cleaning Tool =====");

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

// Flatten
let flatData = messyData.flat(Infinity);

// Remove null & undefined
let cleanData = flatData.filter(item => item != null);

console.log("Clean Data:", cleanData);


console.log("\n===== Task 7: Sorting Bug Fix =====");

let prices = [1000, 200, 50, 5000];

// Correct sort
prices.sort((a, b) => a - b);

console.log("Sorted Prices:", prices);

// Explanation
console.log("Default sort treats numbers as strings (lexicographic).");


console.log("\n===== Task 8: Analytics Report =====");

let orders = [
  {id:1, amount:100},
  {id:2, amount:200},
  {id:3, amount:300}
];

// Total revenue
let revenue = orders.reduce((sum, o) => sum + o.amount, 0);

// Average
let avg = revenue / orders.length;

console.log("Total Revenue:", revenue);
console.log("Average Order Value:", avg);


console.log("\n===== Task 9: Inventory System =====");

let inventory1 = ["Laptop", "Phone"];
let inventory2 = ["Tablet", "Watch"];

// Add item
inventory1.push("Camera");

// Remove item
inventory1.pop();

// Update item
inventory1.splice(1, 1, "Smartphone");

// Search
console.log("Has Laptop:", inventory1.includes("Laptop"));

// Merge
let finalInventory = [...inventory1, ...inventory2];

console.log("Final Inventory:", finalInventory);


console.log("\n===== Task 10: Interview Challenge =====");

function processData(...data) {
  // Flatten
  let flat = data.flat(Infinity);

  // Remove duplicates
  let unique = [...new Set(flat)];

  // Sort ascending
  return unique.sort((a, b) => a - b);
}

let result = processData(1, 2, [3, 4], [5, [6]]);
console.log("Final Output:", result);
