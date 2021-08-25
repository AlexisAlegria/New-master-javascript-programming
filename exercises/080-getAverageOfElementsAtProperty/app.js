// Write your function here
function getAverageOfElementsAtProperty(obj,key){
    let sum = 0;
    for(var key in obj){
        sum = obj[key].reduce((a,b) => a + b, 0)
    }
    return sum / obj[key].length;
}
var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2