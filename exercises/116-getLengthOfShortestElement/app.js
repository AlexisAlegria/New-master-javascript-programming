function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length == 0){return 0;}
    var currentLength = 999999999999999;
    for(i=0; i<arr.length; i++){
        if(arr[i].length < currentLength){
            currentLength = arr[i].length;
        }
    }
    return currentLength;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3