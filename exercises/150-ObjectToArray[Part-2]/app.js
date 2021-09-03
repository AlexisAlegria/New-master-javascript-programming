function listAllValues(obj,value) {
  // your code here
  var newArray = [];
  for(var value in obj){
    newArray.push(obj[value]);
  }
  return newArray;
}
var output = listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
});
console.log(output);