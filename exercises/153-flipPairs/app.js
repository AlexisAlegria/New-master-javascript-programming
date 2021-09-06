function flipPairs(input){
    input = input.split("");
    console.log(input);
    for (let i = 0; i < input.length; i += 2){
      let temp = input[i];
      input[i] = input[i+1];
      input[i+1] = temp;
    }
      input = input.join("");
      return input;
}
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
