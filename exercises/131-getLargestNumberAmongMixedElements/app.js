function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length < 1){return 0;}
    var largestArray = [];
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            largestArray.push(arr[i]);
        }
    }
    if(largestArray.length < 1){return 0;}
    var largestNumber = largestArray[0];
    for(i=0; i<largestArray.length; i++){
        if(largestArray[i] > largestNumber){
            largestNumber = largestArray[i];
        }
    }
    return largestNumber;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5