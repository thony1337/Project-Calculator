
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
    return a / b;
}

let number1 = '';
let number2 = '';
let operator = ''

function operate(operator, number1, number2){
  return operator(number1, number2)
}
;