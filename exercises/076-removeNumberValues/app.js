var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for(var value in obj){
        if(typeof obj[value] === 'number'){
            delete obj[value];
        }
    }
    return obj[value];
}
var obj = {
    a: 2,
    b: 'remaining',
    c: 4
  };
  removeNumberValues(obj);
  console.log(obj); // --> { b: 'remaining' }