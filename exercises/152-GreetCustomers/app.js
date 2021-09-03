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
  if (customerData.visits === 1) {
    return (`Welcome back, ${customerData.name}! We're so glad you liked us the first time!`);
  } else {
    if (customerData.visits > 1) {
    return (`Welcome back, ${customerData.name}! So glad to see you again!`);
    } else {
    return (`Welcome! Is this your first time?`);
    }
  }
}
var output = greetCustomer('Carol');
console.log(output);