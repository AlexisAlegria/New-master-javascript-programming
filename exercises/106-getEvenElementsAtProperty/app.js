
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    if(obj[key].length == 0 || Array.isArray === false ||
      obj[key] === undefined){
        return [];
      }
    var newArray = obj[key].filter(function(i){
      return i % 2 == 0;
    });
    return newArray;
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]