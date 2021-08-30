var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
//   if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {
//       return [];
//   }

//   let newArray = [];
//   for(i in obj[key]){
//     if(obj[key][i].length % 2 == 0){
//       newArray.push(obj[key][i]);
//     }
//   }
//   return newArray;
// }
if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {
  return [];
}
   var newArray = obj[key].filter(function(i) {
    return i.length % 2 == 0;
  });
  return newArray;
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']