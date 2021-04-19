// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
function validParentheses(parens){
  let arr = [];

 for (let i = 0; i < parens.length; i++) {
   let lastEl = arr[arr.length-1]
   
   if(parens[i] === '(') {
     arr.push(parens[i])
   }
   else if (parens[i] === ')' && lastEl === '(' ) {
     arr.pop()
   }
   else return false
 }
  
  return arr.length ? false : true
  
}
 
 
console.log(validParentheses( "()" ))
console.log(validParentheses( "())" ))