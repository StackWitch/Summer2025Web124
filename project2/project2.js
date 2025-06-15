// Name: Sadie Coleman
// Date: 2025-06-14

let myName = "Your Full Name";

let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 10;
let n2 = 20;

let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;


let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

let myAge = 25;
let ageCompare = myAge < numberMult;
document.getElementById("p6").textContent = ageCompare;
