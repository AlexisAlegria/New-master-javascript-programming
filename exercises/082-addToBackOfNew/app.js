function addToBackOfNew(arr, element) {
    // Write your function here
    let newArray = [];
    newArray.push(element);
    finalArray = arr.concat(newArray);
    return finalArray;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]