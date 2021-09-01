function findShortestElement(arr) {
    // your code here
    if(arr.length == 0){return ''};
    var shortestElem = arr[0];
    for(i=0; i<shortestElem.length; i++){
        if(arr[i].length < shortestElem.length){
            shortestElem = arr[i];
        }
    }
    return shortestElem;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'