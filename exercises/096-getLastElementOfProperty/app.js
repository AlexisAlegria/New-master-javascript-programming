// Write your function here
function getLastElementOfProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
        return undefined;
    } else if(obj[key][0] = undefined){
        return undefined;
    } else {
        return obj[key][key.length-1];
    }
}

var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5