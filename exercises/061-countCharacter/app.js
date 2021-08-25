function countCharacter(str, char) {
    // your code here

//  return (str.match(/a/g)||[]).length;
    return str.split(char).length-1;
    
}
var output = countCharacter('I am a hacker', 'a');
console.log(output);
