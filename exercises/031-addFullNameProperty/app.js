function addFullNameProperty(obj) {
  // tu codigo aqui
  obj.FullName = obj.firstName + ' ' + obj.lastName;
  return obj;
}
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.FullName);