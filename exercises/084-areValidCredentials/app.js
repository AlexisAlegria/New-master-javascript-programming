// Write your function here
function areValidCredentials(name,password){
    if(name.length > 2 && password.length > 7){
        return true
    } else {
        return false
    }
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true