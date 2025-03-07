
const privateVar = " I Am Private";

export function publicFunction(){
    console.log(privateVar);
};

var number = 100;

export function showNum(){
    console.log(number);
};

let a = 20, b = 10, c = a + b;

export function add(){
    console.log(c);
};

export var player = {
    name : "Neha", age : 30, isAlive : true,
    greet : function (){
        console.log("Hello Player " + this.name);
    },
};

var x = 50, y = 2;
export function division(){
 console.log("Division is : " + x / y);
};

