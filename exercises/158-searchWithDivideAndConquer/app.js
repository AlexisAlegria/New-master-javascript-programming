let recursiveFunction = function (arr, x, start, end) {
      
  // Base Condition
  if (start > end) return null;

  // Find the middle index
  let mid=Math.floor((start + end)/2);

  // Compare mid with given key x
  if (arr[mid]===x) return mid; 
  // If element at mid is greater than x,
  // search in the left half of mid
  if(arr[mid] > x)
      return recursiveFunction(arr, x, start, mid-1);
  else
      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveFunction(arr, x, mid+1, end);
}  
// Driver code
let arr = [1, 3, 16, 22, 31, 33, 34];
let x = 31;

console.log(recursiveFunction(arr, x, 0, arr.length-1));