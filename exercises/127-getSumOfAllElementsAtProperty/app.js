var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(obj[key].length == 0 || 
        Array.isArray(obj[key] === false) || 
        obj[key] === undefined){return 0;}
    let sum = 0
    for(i in obj[key]){
        sum += obj[key][i];
    }
    return sum;
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13