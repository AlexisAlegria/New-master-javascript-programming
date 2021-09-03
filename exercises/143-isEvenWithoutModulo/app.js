function isEvenWithoutModulo(num) {
    // your code here
    let evenNumber = num - (2 * parseInt(num / 2));
    if(evenNumber == 0) return true;
    else return false;
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true