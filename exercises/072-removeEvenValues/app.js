function removeEvenValues(obj) {
    // your code here
    for(var value in obj){
        if(obj[value] % 2 === 0){
            delete obj[value];
        }
    }
}
var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj);