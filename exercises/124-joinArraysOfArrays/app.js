function joinArrayOfArrays(arr) {
  // your code here
    let newArray = [];
    for(i=0; i<arr.length; i++){
      for(j in arr[i]){
        newArray.push(arr[i][j]);
      }
    }
    return newArray;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']