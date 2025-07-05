// Function sum
function sum() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    return "Sum = " + (num1 + num2);
}

// Function sub
function sub() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    return "Subtraction = " + (num1 - num2);
}

// Function multiply
function mul() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    return "Multiplication = " + (num1 * num2);
}

// Function divide
function divide() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    if (num2 === 0) {
        return "Error: Cannot divide by zero.";
    }
    return "Division = " + (num1 / num2);
}

// Function  square
function square() {
    let num = Number(prompt("Enter a number:"));
    return "Square = " + (num * num);
}

// Function calculate percentage
function percentage() {
    let total = Number(prompt("Enter the total value:"));
    let value = Number(prompt("Enter the obtained value:"));
    if (total === 0) {
        return "Error: Total value cannot be zero.";
    }
    return "Percentage = " + ((value / total) * 100).toFixed(2) + "%";
}

// Ask the user to choose an operation
let choice = Number(prompt(
    "Choose an operation:\n1. Sum\n2. Subtract\n3. Multiply\n4. Divide\n5. Square\n6. Percentage"
));

// Call the appropriate function based on user input
switch (choice) {
     case 1:
        alert(sum());
        break;
     case 2:
        alert(sub());
        break;
  case 3:
        alert(mul());
        break;
  case 4:
        alert(divide());
        break;
    case 5:
        alert(square());
        break;
     case 6:
        alert(percentage());
        break;
}