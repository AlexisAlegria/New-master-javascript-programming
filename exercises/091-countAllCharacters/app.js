// Write your function here
function countAllCharacters(str){
    let obj = {};
    if(str === "") return obj;
    for(i=0; i<=str.length; i++){
        if(typeof obj[str[i]] === "undefined"){
            obj[str[i]] = 1;
        } else obj[str[i]] += 1;
    }
    delete obj.undefined;
    return obj;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}