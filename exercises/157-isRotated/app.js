function isRotated(str1, str2) {
    var doubled = str1 + str1;
    if (doubled.indexOf(str2) !== -1) {
        return true;
    } else {
        return false;
    }
}
console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false