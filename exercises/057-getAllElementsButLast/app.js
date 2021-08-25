function getAllElementsButLast(array) {
    // your code here
    return array.splice(0,3);
}
var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output);