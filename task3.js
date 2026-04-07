// 1. User Input
let name = prompt("Enter Name:");
let ageInput = prompt("Enter Age:");
let salaryInput = prompt("Enter Monthly Salary:");
let loanInput = prompt("Enter Loan Amount:");

// Type Conversion Check
console.log("Before conversion (Age):", typeof ageInput);
console.log("Before conversion (Salary):", typeof salaryInput);
console.log("Before conversion (Loan):", typeof loanInput);

// Convert string to number
let age = Number(ageInput);
let salary = Number(salaryInput);
let loanAmount = Number(loanInput);

console.log("After conversion (Age):", typeof age);
console.log("After conversion (Salary):", typeof salary);
console.log("After conversion (Loan):", typeof loanAmount);

// 2. Eligibility Check (Logical Operators)
if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible ✅");
} else {
    console.log("Not Eligible ❌");
}

// 3. EMI Calculation (Assignment Operator)
let emi = loanAmount;
emi /= 12;  // assignment operator

console.log("EMI:", emi);

// 4. Loan Category (If-Else)
let loanCategory;

if (loanAmount > 500000) {
    loanCategory = "High Loan";
} else if (loanAmount > 200000) {
    loanCategory = "Medium Loan";
} else {
    loanCategory = "Low Loan";
}

console.log("Loan Category:", loanCategory);

// 5. Risk Level (Ternary Operator)
let riskLevel = (salary > 50000) ? "Low Risk" : "High Risk";

console.log("Risk Level:", riskLevel);

// 6. Customer Type (Switch based on EMI)
let customerType;

switch (true) {
    case (emi > 40000):
        customerType = "Premium Customer";
        break;
    case (emi > 20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
}

console.log("Customer Type:", customerType);
