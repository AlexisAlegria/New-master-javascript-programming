function detectOutlierValue(string) {
    // your code here
    var newArray = string.split(" ").map(Number);
    var oddArray = [];
    var evenArray = [];
    var outlier = 0;
    for(i=0; i<newArray.length; i++){
        if(newArray[i] % 2 == 0){
            evenArray.push(newArray[i]);
        }
        else {
            oddArray.push(newArray[i]);
        }
        }
        if(evenArray.length < oddArray.length){
        outlier = newArray.indexOf(evenArray[0]);
        } else {
        outlier = newArray.indexOf(oddArray[0]);
        }
        return outlier + 1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2