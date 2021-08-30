// Write your function here
function computeAverageOfNumbers(arr){
    if(arr.length == 0){
        return 0;
    }
    let sum = arr.reduce((a, b) => a + b,0);
    let avg = sum / arr.length;
    return avg;
}

var input = [];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3