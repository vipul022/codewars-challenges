//! Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//! The binary number returned should be a string.

function addBinary(a, b) {
  let sum = a + b;
  let arr = [];
  let remainder;
  while (sum >= 1) {
    remainder = sum % 2;
    // !add the remainder to the array in the reverse order
    arr.unshift(remainder);

    sum = Math.floor(sum / 2);
  }

  let arrToString = arr.join("");

  return arrToString;
}

// ! Note: this can also be done in one line using JavaScript toString method
// ! return sum.toString(2)
// ! passing 2 as argument convert the number into binary