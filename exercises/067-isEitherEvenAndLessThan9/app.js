function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if(num1 <9 && num2 <9){
        return true
    } else if(num1 % 2 === 0 || num2 % 2 === 0){
        return false;
    }
    return false;
}    
var output = isEitherEvenAndLessThan9(5, 5);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false