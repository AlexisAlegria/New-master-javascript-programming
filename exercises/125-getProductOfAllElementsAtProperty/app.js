var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if(obj[key].length == 0 || 
      Array.isArray(obj[key]) === false || 
      obj[key] === undefined){return 0;}
      let result = 1;
      for(i in obj[key]){
        result *= obj[key][i];
      }
      return result;
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24