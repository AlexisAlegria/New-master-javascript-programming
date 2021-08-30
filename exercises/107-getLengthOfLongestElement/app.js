function getLengthOfLongestElement(arr) {
    if(arr.length == 0){return 0;}
    var currLength = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > currLength) {
          currLength = arr[i].length;
        }
      }
    return currLength;
}
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5