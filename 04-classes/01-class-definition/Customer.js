var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer('Hikmet', 'Suicmez');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
