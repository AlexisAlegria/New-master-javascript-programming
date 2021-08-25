function countNumberOfKeys(obj) {
    // your code here
    let count = 0;
    for(var key in obj){
        ++count;
    }
    return count;
}
var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3