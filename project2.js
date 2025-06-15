// Name: Sadie Coleman
// Date: 2025-06-14

// Declare string variable
let myName = "Your Full Name";

// Replace content of paragraph 1
let para1 = document.getElementById("p1");
para1.textContent = myName;

// Declare two numbers
let n1 = 10;
let n2 = 20;

// Add numbers
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// Multiply numbers
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// Add string and number
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// Multiply string and number (will return NaN)
let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

// Compare age to multiplication result
let myAge = 25;
let ageCompare = myAge < numberMult;
document.getElementById("p6").textContent = ageCompare;
