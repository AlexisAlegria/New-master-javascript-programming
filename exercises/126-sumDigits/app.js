function sumDigits(num) {
    var numbers = num.toString().split("");
    var sum = 0;
    var newArr = [];
    for(i=0; i<numbers.length; i++){
        if(numbers[i] == '-'){
            newArr.push(Number(numbers[i] + numbers[1]));
            sum = newArr.reduce((a, b) => a + b,0);
            i++;
        } else {
            newArr.push(Number(numbers[i]));
            sum = newArr.reduce((a, b) => a + b,0);
        }
    }
    return sum;
}
var output = sumDigits(-316);
console.log(output); // --> 4
