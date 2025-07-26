// Name: Sadie Coleman
// Date: 7/25/2025
// JS for JavaScript Calculator Project

const inputNum = document.getElementById('num');
const addPara = document.getElementById('addition');
const subPara = document.getElementById('subtraction');
const mulPara = document.getElementById('multiplication');
const divPara = document.getElementById('division');
const btn = document.getElementById('calculateBtn');

function calculateAddition(num) {
  let result = '';
  for(let i = 1; i <= 10; i++) {
    result += `${i} + ${num} = ${i + num}\n`;
  }
  addPara.textContent = result.trim();
}

function calculateSubtraction(num) {
  let result = '';
  let i = 1;
  while(i <= 10) {
    result += `${i} - ${num} = ${i - num}\n`;
    i++;
  }
  subPara.textContent = result.trim();
}

function calculateMultiplication(num) {
  let result = '';
  let i = 1;
  do {
    result += `${i} * ${num} = ${i * num}\n`;
    i++;
  } while(i <= 10);
  mulPara.textContent = result.trim();
}

function calculateDivision(num) {
  let result = '';
  for(let i = 1; i <= 10; i++) {
    let divVal = (i / num).toFixed(2);
    result += `${i} / ${num} = ${divVal}\n`;
  }
  divPara.textContent = result.trim();
}

function runCalculations() {
  const num = Number(inputNum.value);
  if(isNaN(num) || num === 0) {
    alert("Please enter a valid non-zero number.");
    return;
  }
  
  calculateAddition(num);
  calculateSubtraction(num);
  calculateMultiplication(num);
  calculateDivision(num);
}

btn.addEventListener('click', runCalculations);
