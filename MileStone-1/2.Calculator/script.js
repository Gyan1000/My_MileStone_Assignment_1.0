let show_result = document.querySelector("h2");
let result = 0;
function calculate() {
  let num1 = parseInt(prompt("Enter First number"));
  let num2 = parseInt(prompt("Enter second number"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please Enter Number (Don't Enter Text)")
    return "Please Enter Number (Don't Enter Text)";
  } else {
    let operator = prompt("Enter operator");
    switch (operator) {
      case "+": {
        result = num1 + num2;
        console.log("result", result);
        break;
      }

      case "-": {
        result = num1 - num2;
        console.log("result", result);
        break;
      }

      case "*": {
        result = num1 * num2;
        console.log("result", result);
        break;
      }
      case "/": {
        result = num1 / num2;
        console.log("result", result);
        break;
      }

      default: {
        alert("PLEASE ENTER OPERATOR ONLY(+,-,*,/) ");
        return "PLEASE ENTER OPERATOR ONLY(+,-,*,/) ";
      }
    }
  }
  return result;
}
let response = calculate();

if (!isNaN(response)) {
  show_result.textContent = "Result: " + response;
  show_result.style.color = "green";
} else {
  show_result.textContent = "Result: " + response;
  show_result.style.color = "red";
}
console.log(response);
setTimeout(() => {
  alert("You can also check the Result In Browser Console");
}, 2000);
