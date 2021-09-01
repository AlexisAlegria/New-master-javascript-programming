function getLongestElement(arr) {
    if (arr.length === 0) { 
      return '';
    }
    var longestWord = arr[0]; 
    
    for (var i = 0; i <arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i]; 
      }
    }
    return longestWord; 
  }
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'