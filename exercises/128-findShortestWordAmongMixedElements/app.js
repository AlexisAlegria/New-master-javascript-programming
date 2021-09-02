function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length == 0){return '';}
    var strArray = [];
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === 'string'){
            strArray.push(arr[i]);
        }
    }
    if(strArray.length < 1){
        return '';
    }
    var shortestWord = strArray[0];
    for(i=0; i<strArray.length; i++){
        if(strArray[i].length < shortestWord.length){
            shortestWord = strArray[i];
        }
    }
    return shortestWord
}
var output = findShortestWordAmongMixedElements([4, 'twopp', 2, 'three']);
console.log(output); // --> 'two'