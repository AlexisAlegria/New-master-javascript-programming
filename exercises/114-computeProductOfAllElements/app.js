function computeProductOfAllElements(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }
    let result = 1;
    for(i=0; i<arr.length; i++){
        result *= arr[i];
    }
    return result;
}
var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60