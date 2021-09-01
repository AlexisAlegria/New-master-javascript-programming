function getLargestElement(arr) {
  // your code here
  if(arr.length == 0){return 0;};
  var largestElem = 0;
  for(i=0; i<arr.length; i++){
    if(arr[i] > largestElem){
      largestElem = arr[i];
    }
  }
  return largestElem;
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 