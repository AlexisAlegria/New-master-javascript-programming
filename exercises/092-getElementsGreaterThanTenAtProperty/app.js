// Write your function here
// function getElementsGreaterThan10AtProperty(obj,key){
//     let newArray = [];
//     for(i in obj[key]){
//         if(obj[key][i] > 10){
//             newArray.push(obj[key][i]);
//         }
//     }
// return newArray;
// }
function getElementsGreaterThan10AtProperty(obj,key){
    return obj[key].filter(function(i){
        return i > 10;
    });
}

var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]