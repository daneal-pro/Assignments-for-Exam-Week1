const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function() {
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);
  const selectedOperation = operation.value;

  if (isNaN(number1) || isNaN(number2)) {
    result.textContent = "Error: Please enter valid numbers";
    return;
  }

  let calculatedResult;
  switch (selectedOperation) {
    case "+":
      calculatedResult = number1 + number2;
      break;
    case "-":
      calculatedResult = number1 - number2;
      break;
    case "*":
      calculatedResult = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        result.textContent = "Error: Division by zero";
        return;
      }
      calculatedResult = number1 / number2;
      break;
    default:
      result.textContent = "Error: Please select an operation";
  }

  result.textContent = "Result: " + calculatedResult;
});
