function transformEmployeeData(array) {
  // your code here
  var newArray = [];
  var obj1 = {};
  var obj2 = {};
  for(i=0; i<array.length; i++){
    if(i=0){
      obj1[array[i][0][0]] = array[i][1][1];
      newArray.push(obj1);
    } else {
      obj2[array[i][0][0]] = array[i][1][1];
      newArray.push(obj2);
    }
    
}
return newArray;
}
var output = transformEmployeeData(
[
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]);
console.log(output);

// [
//   {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//   {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]