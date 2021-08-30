function filterEvenLengthWords(words) {
    // your code here
    var newArray = words.filter(function(i){
        return i.length % 2 == 0;
    });
    return newArray;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']