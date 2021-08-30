function filterOddLengthWords(words) {
    // your code here
    var newArray = words.filter(function(i){
        return i.length % 2 != 0;
    });
    return newArray;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']