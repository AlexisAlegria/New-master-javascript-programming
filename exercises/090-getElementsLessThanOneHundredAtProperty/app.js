// Write your function here
// function getElementsLessThan100AtProperty(obj,key){
//     let newArray = [];
//     for(i in obj[key]){
//         if(obj[key][i] < 100){
//             newArray.push(obj[key][i]);
//         }
//     }
//     return newArray;
// }

function getElementsLessThan100AtProperty(obj,key){
    return obj[key].filter(function(item){
        return item < 100;
    });
}

var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
  console.log(obj)