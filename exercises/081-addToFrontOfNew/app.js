
function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArray = [];
    newArray.push(element);
    finalArray = newArray.concat(arr);
    return finalArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]