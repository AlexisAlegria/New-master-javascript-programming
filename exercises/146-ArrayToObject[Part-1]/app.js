function transformFirstAndLast(array) {
  // your code here
  let obj = {};
    obj[array[0]] = array[array.length-1];
    console.log(array);
  return obj;
}
var output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']);
console.log(output);