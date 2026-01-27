
let sum = function(a, b) {
   return a + b;
}
let subtract = function(a, b) {
     return a - b;
};
let multiply = function(a, b) {
    return a * b;
}
let divide = function (a, b) {
      if(b === 0) {
      alert('ERROR');     
    }
    return a / b;

}

let numberA = '';
let numberB = '';
let currentOperator = null;
let enteringSecondNumber = false;  
let display = document.querySelector('#display-text');
function operate(operator, number1, number2){
  return operator(number1, number2)
}
;
function handleNumber(digit) {
  if(enteringSecondNumber) {
  display.textContent = 0;  
  numberB += digit;
  display.textContent = numberB;
 }
  else {
   numberA += digit;
   display.textContent = numberA;
  }
}
function handleOperator(operator) {
  if(numberB === '') {
    enteringSecondNumber = true;
    currentOperator = operator;
  } else { 
    let result = operate(currentOperator, Number(numberA), Number(numberB))
    numberA = Math.round(result * 100) / 100;
    numberB = '';
    currentOperator = operator;
    enteringSecondNumber = true;
    display.textContent = Math.round(result * 100) / 100;    
  }
}

document.getElementById("number1").onclick = function() {
   handleNumber('1');
};
document.getElementById("number2").onclick = function() {
   handleNumber('2');
};
document.getElementById("number3").onclick = function() {
  handleNumber('3');
  }
document.getElementById("number4").onclick = function() {
  handleNumber('4');
};
document.getElementById("number5").onclick = function() {
  handleNumber('5');
};
document.getElementById("number6").onclick = function() {
  handleNumber('6');
  }
document.getElementById("number7").onclick = function() {
  handleNumber('7');
};
document.getElementById("number8").onclick = function() {
  handleNumber('8');
};
document.getElementById("number9").onclick = function() {
  handleNumber('9');
};
document.getElementById("number0").onclick = function() {
  handleNumber('0');
};
document.getElementById("sum-button").onclick = function() {
  handleOperator(sum)  
}
document.getElementById("multiply-button").onclick = function() {
  handleOperator(multiply)  
}
document.getElementById("divide-button").onclick = function() {
  handleOperator(divide)  
}
document.getElementById("subtract-button").onclick = function() {
  handleOperator(subtract)  
}
document.getElementById("equal-button").onclick = function() {
  result = operate(currentOperator, Number(numberA), Number(numberB));
  display.textContent = Math.round(result * 100) / 100;;
  numberA = '';
  numberB = '';
  enteringSecondNumber = false
}
document.getElementById("clear-button").onclick = function() {
  numberA = '';
  numberB = '';
  enteringSecondNumber = false
  display.textContent = 0;
}
console.log(numberA)