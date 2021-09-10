function average(num1, num2) {
  // process array of numbers
  var sum=0;
  sum = (num1 + num2) / 2;
  return sum;
}

function sum(numbers) {
    return numbers.reduce((a,b) => a + b, 0);
}
arr = [6,10];
var resultSum = sum(arr);
var resultAvg = average(arr[0],arr[1]);
console.log(resultSum,resultAvg);