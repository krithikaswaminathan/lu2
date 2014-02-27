/**
 * Created by apple on 2/26/14.
 */
$(document).ready(function () {

    var customer = {
        id: 272356158,
        phone: "(408)431-1295",
        email: "customer@mailinator.com",   // string data type
        address: {                          // object data type
            city: "Sunnyvale",
            zip: "95129"                    // should zip codes be numeric?
        },
        "custom field": "...notes on customer..."   //notice the space in the property name
    };

    console.log(customer.id);
    console.log(customer.address.city);
    //console.log(customer[id]);

    //console.log(customer[“id”]);

});

