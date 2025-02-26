var age = [13, 17, 34, 37, 45, 12, 44, 20];
var adults = age.filter(function(age){
    return age >= 18;

});
var kids = age.filter(function(age){
    return age <18;
});
console.log("Adults :"+adults);
console.log("Minors :"+kids);