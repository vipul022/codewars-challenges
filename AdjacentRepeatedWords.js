// Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

function countAdjacentPairs(searchString) {
  let count = 0;
  let arr = searchString.split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].toLowerCase() === arr[i + 1].toLowerCase()) {
      count++;
      i++;
    }
  }
  return count;
}

let res = countAdjacentPairs("Cat cat dog dog cat cat");
console.log("res=>", res);
