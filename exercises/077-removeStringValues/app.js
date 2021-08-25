function removeStringValues(obj) {
    // your code here
    for(var value in obj){
        if(typeof obj[value] === 'string'){
            delete obj[value];
        }
    }
    return obj[value];
}
var obj = {
    name: 'Sam',
    age: 20
  }
  removeStringValues(obj);
  console.log(obj); // { age: 20 }