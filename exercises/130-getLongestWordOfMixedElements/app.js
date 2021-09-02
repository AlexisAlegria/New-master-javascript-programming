function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr.length < 1){return '';}
    var longestArray = [];
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === 'string'){
            longestArray.push(arr[i]);
        }
    }
    if(longestArray.length < 1){return '';}
    var longestWord = longestArray[0];
    for(i=0; i<longestArray.length; i++){
        if(longestArray[i].length > longestWord.length){
            longestWord = longestArray[i];
        }
    }
    return longestWord;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'