function isIsogram(text){
return text.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == text.length;
}
console.log(isIsogram("Camile")); // => true
console.log(isIsogram("Camille")); // => false