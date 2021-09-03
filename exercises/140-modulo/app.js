function modulo(num1, num2) {
    let remainder = (num1 - num2 * parseInt(num1 / num2));
    return remainder;
}
var output = modulo(25, 4);
console.log(output); // --> 1