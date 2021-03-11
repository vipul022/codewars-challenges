//! Find narcissistic number challenge

const isNarcissistic = (num) => {
  // !first count the total digits of a number
  let count = 0;
  for (let i = 1; num / i > 1; i *= 10) {
    count++;
  }

  // !while temp is greater than 0, take the last digit and add it's count power to the total
  let total = 0;
  let temp = num;
  while (temp) {
    total += Math.pow(temp % 10, count);
    temp = Math.floor(temp / 10);
  }
  return num === total;
};
console.log(isNarcissistic(153));
