//! A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//! Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersToArr = letters.split("");

  // !exclude periods ans empty spaces from string and convert in into a comma separated array of strings
  let newString = string.replace(/[.\s]/g, "");
  console.log("newString=>", newString);
  // let result;
  // ! check if all the elements of once array are present in another
  let result = lettersToArr.every((el) => newString.toLowerCase().includes(el));

  console.log("result=>", result);
  return result;
}

isPangram("The quick brown fox jumps over the lazy dog.");
