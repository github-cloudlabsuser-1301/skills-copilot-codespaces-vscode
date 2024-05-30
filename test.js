function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Usage
console.log(add(5, 3));      // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2
console.log(multiply(5, 3)); // Outputs: 15
console.log(divide(5, 3));   // Outputs: 1.6666666666666667