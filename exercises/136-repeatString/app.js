function repeatString(string, num) {
    // your code here
    var stringChain = '';
    for(i=0; i<num; i++){
        stringChain += string;
    }
    return stringChain;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'