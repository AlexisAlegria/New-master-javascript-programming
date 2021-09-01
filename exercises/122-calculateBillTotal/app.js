function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    var salesTax = 0.095;
    var tip = 0.15;
    var billTotal = preTaxAndTipAmount * (1 + salesTax + tip);
    return billTotal;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9