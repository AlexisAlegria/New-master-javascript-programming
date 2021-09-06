function flipEveryNChars(input, n) {
    // your code here
    var newString = '';
    for(i = 0; i < input.length - 1; i += n) {
        //slice into every n chars
        var slice = input.slice(i, i + n);
        //split into array, reverse, and join
        var reverseString = slice.split('').reverse().join('');
        //add to newString 
        newString += reverseString;
    }
    return newString;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma