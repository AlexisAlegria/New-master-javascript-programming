var obj = {
  key: [2, 1, 5]
};
function getSquaredElementsAtProperty(obj, key) {
    // your code here
  if(obj[key] === undefined || Array.isArray(obj[key]) === false || 
  obj[key].length == 0){
    return [];
  }
  var newArray = obj[key].map(function(i){
    return i**2;
  });
  return newArray;
}
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]