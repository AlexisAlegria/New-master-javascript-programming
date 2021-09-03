function convertObjectToList(obj,key) {
  // your code here
  var newArray = [];
  for(var key in obj){
      newArray.push([ key + obj[key]]);
    }
  return newArray;
}
var output = convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
});
console.log(output); //[['name', 'Holly'], ['age', 35], ['role', 'producer']]