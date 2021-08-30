// Write your function here
function removeElement(arr,param){
    for(i=0; i<arr.length; i++){
        if(arr[i] === param){
            arr.splice(i,1)
        }
    }
    return arr;
}
var x=[1, 2, 3, 2, 1];
var output = removeElement(x, 2);
console.log(output); // --> [1, 3, 1]