var totalBill = 60;
var discount = 0;

if(totalBill >= 100){
    discount = 20;
} else if (totalBill >= 50){
    discount = 10;
}
else {
    discount = 5;
}
console.log ("Your Total Bill Is "+ totalBill+". And you have got a dicount of "+ discount+".");
console.log("Your Total Discounted Bill is "+(totalBill - discount));