// // Write your function here
function getOddLengthWordsAtProperty(obj,key){
    let newArray = [];
    for(i=0; i<obj[key].length; i++){
        if(obj[key][i].length % 2 != 0){
            newArray.push(obj[key][i]);
        }
    }
    return newArray;
}
var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']