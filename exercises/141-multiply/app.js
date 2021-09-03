function multiply(num1, num2) {
    // your code here
    let result = 0;
    for(i=0; i<num1; i++){
        result += num2;
    }
    return result;
}

var output = multiply(4, 7);
console.log(output); // --> 28