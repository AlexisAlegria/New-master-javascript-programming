function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length < 1){return 0;}
  var numberArray = [];
  for(i=0; i<arr.length; i++){
    if(typeof arr[i] === 'number'){
      numberArray.push(arr[i]);
    }
  }
  if(numberArray < 1){
    return 0;
  }
  var smallestNumber = numberArray[0];
  for(i=0; i<numberArray.length; i++){
    if(numberArray[i] < smallestNumber){
      smallestNumber = numberArray[i];
    }
  }
  return smallestNumber;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4