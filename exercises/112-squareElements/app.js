function squareElements(arr){
  // your code here
  var newArray = arr.map(function(item){
    return item**2;
  });
  return newArray;
}
var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]