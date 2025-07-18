// String Functions
function reverse(str) {
    return str.split("").reverse().join("");
}

function count(str) {
    return str.length;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Array Functions
function getmin(array) {
    return Math.min(...array);
}

function getmax(array) {
    return Math.max(...array);
}

function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
function bigger(array) {
    return array.filter(num => num > 6);
}
function factorial(n) {
    var factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
function prime(n) {
    if (n <= 1) return false; // numbers <= 1 are not prime

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }

    return true; 
}
function fibonacci(n) {
  const fib = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fib.push(i);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
}

// Get user input
const str = prompt("Enter a string to reverse:");
const arrayInput = prompt("Enter numbers separated by spaces (e.g. 1 2 3 4):");
const number = prompt("Enter a number:");

// Convert input to array of numbers
let numberArray = arrayInput
    .trim()
    .split(/\s+/)         // Split on any whitespace
    .map(Number)          // Convert to numbers
    .filter(n => !isNaN(n)); // Filter out invalid numbers

// Show outputs
console.log("Reversed String: " + reverse(str));
console.log("Number of characters: " + count(str));
console.log("Capitalized String: " + capitalize(str));
console.log("The min is: " + getmin(numberArray));
console.log("The max is: " + getmax(numberArray));
console.log("The sum of the array is: " + sum(numberArray));
console.log("Numbers bigger than 6: " + bigger(numberArray).join(", "));
console.log("Factorial of " + number + " is: " + factorial(Number(number)));
console.log("Is " + number + " prime? " + prime(Number(number)));
console.log("Fibonacci sequence up to " + number + ": " + fibonacci(Number(number)).join(", "));
