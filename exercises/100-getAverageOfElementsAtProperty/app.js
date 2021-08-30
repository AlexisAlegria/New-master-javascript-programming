// function getAverageOfElementsAtProperty(obj, key) {
  // your code here
// }
var obj = {
key: [1, 2, 7]
};

function getAverageOfElementsAtProperty(obj, key) {
var count = 0;
var average = 0;
    if(obj[key]<1 || !Array.isArray(obj[key])){return 0;}
    for(var i in obj[key]){
    count = count + obj[key][i];
}

average = count/obj[key].length
return average;
}

let output =getAverageOfElementsAtProperty(obj, 'key')
console.log(output)