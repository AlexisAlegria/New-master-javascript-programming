function removeStringValuesLongerThan(num, obj) {
    // your code here
    for(var value in obj){
        if(obj[value].length > num){
            delete obj[value];
        }
    }
}
var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
removeStringValuesLongerThan(6, obj);
console.log(obj);