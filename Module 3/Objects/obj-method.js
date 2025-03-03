let person = {
    name : "Neha",
    age : 34,
    greet : function(){
        return ("My name is " + this.name + " And I Am "+ this.age + " Year's Old !");
    },
};
console.log(person.greet());

let rectangle = {
    height : 10,
    width : 5,
    resize : function( newHeight, newWidth){
        this.height = newHeight;
        this. width = newWidth;
    },
};
console.log("Before Resizing Rectangele height is "+ rectangle.height + " & width is "+ rectangle.width);
rectangle.resize(20, 10);
console.log ("After Resizing rectnagle height is "+ rectangle.height+ " & width is "+ rectangle.width);

let obj = {
    property : false,
    method : function(value){
        
        this.property= value;
        return "Property value updated !";
    },
};
console.log(obj.method(true));
console.log(obj.property);