// ===== TASK 1 =====
console.log("\n===== TASK 1 =====");

function calculateDiscount(product, price) {
  let finalPrice = price > 1000 ? price * 0.8 : price * 0.9;
  console.log(`Product: ${product}`);
  console.log(`Final Price: ${finalPrice}`);
}
calculateDiscount("Shoes", 2000);


// ===== TASK 2 =====
console.log("\n===== TASK 2 =====");

function payment(amount, callback) {
  console.log(`Payment of ${amount} successful`);
  callback();
}

function orderSuccess() {
  console.log("Order delivered");
}

function placeOrder(callback) {
  console.log("Order placed");
  callback(500, orderSuccess);
}

placeOrder(payment);


// ===== TASK 3 =====
console.log("\n===== TASK 3 =====");

let employees = [
  { name: "Rakesh", salary: 50000 },
  { name: "Jero", salary: 70000 }
];

for (let emp of employees) {
  if (emp.salary > 60000) {
    console.log(`${emp.name}: High Salary`);
  } else {
    console.log(`${emp.name}: Normal Salary`);
  }
}


// ===== TASK 4 =====
console.log("\n===== TASK 4 =====");

let correctPassword = "1234";
let attempt = 1;

while (attempt <= 3) {
  console.log(`Attempt ${attempt}`);
  if (attempt === 3) {
    console.log("Login success");
    break;
  }
  attempt++;
}


// ===== TASK 5 =====
console.log("\n===== TASK 5 =====");

function* couponGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Cashback";
}

let offerGen = couponGenerator();

function nextOffer() {
  let result = offerGen.next();
  if (!result.done) {
    console.log("Offer:", result.value);
  } else {
    console.log("No more offers");
  }
}


// ===== TASK 6 =====
console.log("\n===== TASK 6 =====");

let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
  total += price;
}

console.log("Total Bill:", total);


// ===== TASK 7 =====
console.log("\n===== TASK 7 =====");

let user = {
  name: "Rakesh",
  role: "Developer",
  location: "India"
};

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}


// ===== TASK 8 =====
console.log("\n===== TASK 8 =====");

function createPhone() {
  return "Phone";
}
function createBattery() {
  return "Battery";
}
function createCharger() {
  return "Charger";
}

function createOrder() {
  return `${createPhone()} + ${createBattery()} + ${createCharger()}`;
}

console.log("Your Order:", createOrder());


// ===== TASK 9 =====
console.log("\n===== TASK 9 =====");

function collegeForm(name, dept = "Not Assigned") {
  console.log(`Name: ${name}, Department: ${dept}`);
}

collegeForm("Rakesh", "Computer Science");


// ===== TASK 10 =====
console.log("\n===== TASK 10 =====");

function emi(p) {
  return function (r) {
    return function (t) {
      let result = (p * r * t) / 100;
      console.log("EMI:", result);
    };
  };
}

emi(10000)(2)(12);


// ===== TASK 11 =====
console.log("\n===== TASK 11 =====");

for (let i = 1; i <= 10; i++) {
  console.log(i, i % 2 === 0 ? "Even" : "Odd");
}


// ===== TASK 12 =====
console.log("\n===== TASK 12 =====");

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log("var works outside:", a);
// console.log(b); // Error
// console.log(c); // Error


// ===== TASK 13 =====
console.log("\n===== TASK 13 =====");

(function () {
  console.log(" Flash Sale: 50% OFF on Shirts");
})();


// ===== TASK 14 =====
console.log("\n===== TASK 14 =====");

function marks(a, b, c) {
  let total = a + b + c;
  let avg = total / 3;
  console.log("Total:", total);
  console.log("Average:", avg);
}

marks(80, 90, 70);


// ===== TASK 15 =====
console.log("\n===== TASK 15 =====");

function* retryGenerator() {
  yield "10% OFF";
  yield "20% OFF";
}

let retryGen = retryGenerator();

function retryOffer() {
  let res = retryGen.next();
  if (res.done) {
    console.log("All offers expired");
  } else {
    console.log("Offer:", res.value);
  }
}

//  CALL FUNCTION
retryOffer();
retryOffer();
retryOffer();
