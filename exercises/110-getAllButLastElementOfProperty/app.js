var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if(obj[key].length == 0 || Array.isArray(obj[key] === false) || obj[key] === undefined){
      return [];
    }
    obj[key].pop();
    return obj[key];
}
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]