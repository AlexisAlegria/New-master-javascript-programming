function findSmallestElement(arr) {
    // your code here
    if(arr.length == 0){return 0;}
    var smallestElem = 999999999;
    for(i=0; i<arr.length; i++){
        if(arr[i] < smallestElem){
            smallestElem = arr[i];
        }
    }
    return smallestElem;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1