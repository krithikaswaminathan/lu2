/*$(document).ready (function() {

    function Customer(){
        //empty constructor
        var name = 'krithika';
    }

    // CustomerA.prototype points to the prototype of the Customer function.
    var CustomerA = new Customer(); // Always starts with a Capital.  Otherwise the code is unreadable.  This is the 3rd way to create an object.
    console.log("typeof customer A: " + typeof CustomerA);
    console.log("typeof customer : " + typeof Customer);

    console.log("Is Customer A a Customer?; " + (CustomerA instanceof Customer));

}); */


// Another example for object inheritance.


/*

$(document).ready(function(){

    function createObject_ES4(parent){
        if(typeof parent === "object" || typeof parent === "function") {
            function Child(){}
            Child.prototype = parent;
            return new Child();
        } else {
            return null;
        }
    };

    var customer = {
        phone: "",
        email: ""
    };

    var customerA = createObject_ES4(customer);
    console.log(customerA);
});

*/


/* Foram 's example


$(document).ready(function(){
    var parent = {
        x: 32,
        y: 32
    };
    var child = Object.create(parent);      //create an object which inherits contents of parent

//    or
//    var parent=Object.create(Object.prototype);
//    parent.x=32;

    console.log(child instanceof Object);   //true
    console.log(child.x);                   //32
    parent.x=100;
    parent.z=200;
    console.log(child.x);                   //100
    console.log(child.z);                   //200
    child.x=64;                             //once it is initialized it will consider its own value only
    child.w=300;
    console.log(child.x);                   //64
    console.log(child.w);                   //300
    console.log(parent.w);                  //undefined
    parent.x=128;
    parent.a=400;
    console.log(child.x);                   //64
    console.log(child.a);                   //400
    var child2 = Object.create(null);
    console.log(child2 instanceof Object);  //false
    // console.log(child2.toString()); will return an error

});




*/


//Example by Mishra in class.

/*
 $(document).ready(function(){
 var obj = {
 x: 32,
 y: 32
 };

 var child = Object.create(obj);

 var Constructor = function(){
 this.x = 99;
 };


 Constructor.prototype.x = 100;
 Constructor.prototype.y = 10;

 var cons = new Constructor();
 console.log(cons.y);
 console.log(Object.getPrototypeOf(cons));
 console.log(cons.prototype);

 });


 */

/*

$(document).ready (function() {

    var obj = {
        x:34,
        y:22
    };

    function Customer(){
        //empty constructor

    }

   Customer.prototype = obj;

    console.log (obj.x);
    console.log(Customer.x);
    var constructed = new Customer();
    console.log(constructed.x);

});

*/

/*
$(document).ready(function(){
    var customer = {
        id: 272356158,
        email: "customer@mailinator.com"
    }; // object literal. One way to create objects in JS.

  // Anything in curly braces is an object

    customer.id = 32;
    console.log(customer.id);   // property assignment works

    Object.defineProperty(customer, "id", {writable: false}); // name of variable, name of property, JS literal.

    customer.id = 64;           // property assignment fails silently
    console.log(customer.id);   // and previous value is maintained

    console.log(Object.getOwnPropertyDescriptor(customer, 'id'));  // get own properties only

    Object.defineProperty(customer, 'id', {configurable: false});
    // Try to add codde to the writable part and see what happens. uncomment the next line amd do it as HW
   // Object.defineProperty(customer, "id", {writable: false}); // name of variable, name of property, JS literal.

// QUESTION: What happens when you try to set writable to true here?
// You get a TypeError

});

*/


/*

$(document).ready(function(){

    //Define an entirely new object and set attributes
    var customerA = Object.defineProperties({}, {
        id: {
            value: 100,
            writable: false,
            configurable: false,
            enumerable: true
        },
        email: {
            value: "customerA@mailinator.com",
            writable: true,
            enumerable: true,
            configurable: true
        }
    });

    console.log(customerA);
    console.log(Object.getOwnPropertyDescriptor(customerA, "email")); // gets all the object's own properties

    for (var prop in customerA){

        if (customerA.hasOwnProperty(prop))
        {
            console.log("first loop: " + prop);
        }
    }

    Object.defineProperty(customerA, 'email', {enumerable: false});

    for (prop in customerA){
        console.log("second loop: " + prop);
    }

});

*/


/*
$(document).ready(function(){

    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var customerA = Object.create(customer);
    customerA.gender = "male";
    customerA.phone = "323456789";
    customerA.email = "krithika1969@yahoo.com" // If this is added then the delete of email will succeed, and if
    // queried after delete, it will return undefined.  But for when added email in the child, the email query will
    // return the parent's email.

    console.log(customerA);
    delete customerA.gender;    // show that own properties
    console.log(customerA);  // can be deleted
    delete customerA.id;        // inherited properties
    console.log(customerA);  // cannot be deleted

    var res_del_phone = delete customerA.phone;
    console.log(res_del_phone);     // show that returns true
    var res_del_email = delete customerA.email;
    console.log(res_del_email);     // show that returns true

});
*/


$(document).ready(function(){

    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var customerA = Object.create(customer);  // inherit id and email from customer
    customerA.gender = "male";
    customerA.phone = "323456789";
    Object.defineProperty(customerA, 'phone', { enumerable: false });

    console.log(customerA); // explain that gender and phone are own properties
    console.log(customer); // explain that properties id and email are inherited

    // The in operator checks for own and inherited properties
    // Expects a string and object as arguments
    console.log('id' in customerA);  // returns true for inherited
    console.log('gender' in customerA);  // and own properties

    // .hasOwnProperty() checks for own properties only
    console.log(customerA.hasOwnProperty('id'));    // returns false
    console.log(customerA.hasOwnProperty('gender'));  // returns true

    // .propertyIsEnumerable() checks if the property can be enumerated
    console.log(customerA.propertyIsEnumerable('id'));  // returns false as it is inherited
    console.log(customerA.propertyIsEnumerable('gender')); // returns true
    console.log(customerA.propertyIsEnumerable('phone'));  // returns false

    //get all properties in a loop
    console.log('\nPrinting customerA properties as name:value pairs: \n');
    for (var prop in customerA) {
        console.log(prop + ': ' + customerA[prop]);
    }

    // Assignment: What does the Object.keys() method do? How do you use it?
    //     Loop through an object to get only own, enumerable properties and print
    //     them to the console.
    var keys = Object.keys(customerA);
    console.log('\nPrinting customerA properties as name:value pairs: with the keys() \n');

    for (var i = keys.length; i--;) {
        console.log(customerA[keys[i]]);
    }
    console.log('\nPrinting customerA properties for GetOwnPropertyName function \n');
    for (var i = keys.length; i--;) {
        console.log(Object.getOwnPropertyNames(customerA));
    }

});





