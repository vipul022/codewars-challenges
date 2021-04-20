// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

let moveZeros =  (arr) => {
  let zeroArr=[];
  let nonZeroArr=[];
  
  arr.forEach((el) => el === 0? zeroArr.push(el) : nonZeroArr.push(el))
  
  return [...nonZeroArr,...zeroArr]
}

let result  = moveZeros([1,2,0,1,0,1,0,3,0,1])

console.log(result)