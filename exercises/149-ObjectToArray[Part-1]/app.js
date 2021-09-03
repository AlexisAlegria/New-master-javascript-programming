function getAllKeys(obj,key) {
  // your code here
  var newArray = [];
  for(var key in obj){
    newArray.push(key);
  }
  return newArray;
}
var output = getAllKeys({
  name : 'Sam',
  age : 25,
  hasPets : true
});
console.log(output);