function getStringLength(string) {
    // your code here
        var charCount = 0;
        for (var i in string){
          charCount++;
        }
        return charCount;
}

var output = getStringLength('hellopp');
console.log(output); // --> 5