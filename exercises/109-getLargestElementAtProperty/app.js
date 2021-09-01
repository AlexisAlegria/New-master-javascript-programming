var obj = {
  key: [1, 2, 4, 9]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(obj[key].length == 0 || Array.isArray(obj[key]) === false || obj[key] === undefined)
    {return undefined;}
    let largestElem = 0;
    for(i in obj[key]){
      if(obj[key][i] > largestElem){
        largestElem = obj[key][i];
      }
    }
    return largestElem;
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4