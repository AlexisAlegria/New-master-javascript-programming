// Write your function here
function keep(arr, param){
    let newArray = [];
    for(i=0; i<arr.length; i++){
        if(arr[i] === param){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]