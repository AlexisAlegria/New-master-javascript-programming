function isOddWithoutModulo(num) {
    // your code here
    let oddNumber = Math.abs(num) - (2 * parseInt(Math.abs(num) / 2));
    if(oddNumber > 0) return true;
    else return false;
}
var output = isOddWithoutModulo(0);
console.log(output); // --> true