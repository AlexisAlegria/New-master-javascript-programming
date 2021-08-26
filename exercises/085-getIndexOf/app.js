// Write your function here
function indexFinder(char, str){
    for(i=0; i<str.length; i++){
        if(str[i] === char) return i
    }
}
var output = indexFinder('a', 'I am a hacker');
console.log(output); // --> 2