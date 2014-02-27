/**
 * Created by apple on 2/26/14.
 */
$(document).ready(function(){

    console.log(typeof 32);
    console.log(typeof "This is a string");
    console.log(typeof function(){});
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof true);

    //as variables
    var a = 32, b = "This is a string", c = function(){},
        d = undefined, e = null, f = false;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);

    //QUESTION: What is the typeof NaN and 3.14

});
