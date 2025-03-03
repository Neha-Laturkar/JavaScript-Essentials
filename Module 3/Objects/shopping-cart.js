var shoppingCart = {
    items : [
             {name: "Laptop", price : 1000},
             {name : "Mouse", price : 50}
            ],
    total : function(){
        return this.items.reduce((sum, item) => sum + item.price, 0 );
    }
};
console.log ("Total Price is $  " + shoppingCart.total());
shoppingCart.items.push({name : "Adapter", price : 500});
console.log(shoppingCart.items);
shoppingCart.items.push({name : "Table", price : 700});
console.log ("The total Price is $ " +shoppingCart.total());