function getAllElementsButFirst(array) {
  // your code here
  return array.splice(1,3)
}
var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output);