var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};
function greetCustomer(firstName){
   var greeting = '';
   for(var keys in customerData){
     for(var value in customerData[keys]){
       if(keys === firstName && customerData[keys][value] == 1){
         greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
       } else if (keys === firstName && customerData[keys][value] > 1){
        greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
       } else if(!(firstName in customerData)) {
        greeting = 'Welcome! Is this your first time?'
       }
     }
   }
   return greeting;
}
var output = greetCustomer('Carol');
console.log(output);