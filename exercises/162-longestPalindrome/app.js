function printSubStr(str,low,high)
{
    let outputStr = '';
    for (let i = low; i <= high; ++i)
        outputStr += str[i];
        console.log(outputStr);
}
function longestPalSubstr(str)
{
    let maxLength = 1, start = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    printSubStr(str, start, start + maxLength - 1);
    return maxLength;
}
let str = "My dad is a racecar athlete";
longestPalSubstr(str);





// function findLongestPalindrome(sentence) {
//   // split sentence into words
//   // iterate words and collect the palindromes
//   // sort the list of palindromes by word length
//   // return the largest item in the sorted list
// }

// function reverseString(string) {
// }

// function isPalindrome(word) {
//   // hint: you can detect palindromes by comparing a string to its reverse
// }

// function sortAscendingByLength(a, b) {
//   if (a.length > b.length) {
//     return 1;
//   } else if (a.length < b.length) {
//     return -1;
//   }
//   return 0;
// }