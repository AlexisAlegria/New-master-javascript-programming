function filterOddElements(arr) {
  // your code here
  var newArray = arr.filter(function(item){
    return item % 2 != 0;
  });
  return newArray;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]