function multiplyBetween(num1, num2) {
    // your code here
    if(num1 > num2){return 0;}
    let result= 1;
    for(i=num1; i<num2; i++){
        result *= i;
    }
    return result;
}
var output = multiplyBetween(2, 5);
console.log(output); // --> 24