var obj = {
  key: [2, 1, 5]
};

function getSmallestElementAtProperty(obj, key) {
  if(obj[key].length == 0 || Array.isArray(obj[key]) === false || obj[key] === undefined)
    {return 0;}
var smallestElem = 9999999999999999;
for (i in obj[key]) {
  if (obj[key][i] < smallestElem) {
    smallestElem = obj[key][i];
  }
}
  return smallestElem;
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1