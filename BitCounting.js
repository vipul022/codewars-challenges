// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  let arr = [];
  // !first converted decimal to binary then return lenght of the filteredArr
  let res;
  while (n > 0) {
    res = n % 2;
    arr.push(res);
    n = Math.floor(n / 2);
  }
  console.log("arr=>", arr);
  let filteredArr = arr.filter((el) => el === 1);
  return filteredArr.length;
};
