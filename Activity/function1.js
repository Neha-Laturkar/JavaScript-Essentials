function greet (name) {
    console.log ("Hello ," +name + "!!");
}
greet ("Neha");

function add (a,b) {
    console.log ("Addition is :" + (a+b));
}
add(10,20);

function division(a,b){
    console.log ("Division Is :" + (a/b));
}
division(20,5);

// Anonymous Function

const sum = function(a,b){
    return a+b;
}
console.log(sum(10,20));

// Built in functions

let result = Math.sqrt(144);
console.log(result);

let num  = Math.pow(6,3);
console.log(num);

let i = Math.random();
console.log(i);

let max = Math.max(122, 56, 777, 888, 435, 101);
console.log("The biggest number is : "+max);
console.log("The smallest number is : "+Math.min(122, 56, 777, 888, 435, 101));

//Mixed array

let mixedArray = [[1,4, 2, 4, 6], {color : "Blue"}, {age:25}, "Rushabh", true, 10000];
mixedArray.push("Neha");
mixedArray.push(10);
mixedArray.push(true);
console.log("Here is Mixed Array : "+mixedArray);

// Loops trough array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
for (i = 0; i < fruits.length; i++){
  console.log("Fruits Are : "+fruits[i]);
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let number of numbers){
    console.log(number);
}

let person = ["Neha", "Rushabh", "Raj", "Rahul", "Rohan"];
person.forEach(function(name){
    console.log(name);
});

//------------all in one array----------------

function checkGrades(scores){
    for (let score of scores){
        let grade = "";
        switch (true){

            case score >= 90: console.log("Grade A");
            break;
            case score >=80: console.log("Grade B");
            break;
            case score >= 70: console.log("Grade C");
            break;
            case score >=60: console.log("Grade D");
            break;
            default: console.log("Grade F");
            
        }
        console.log("The score is : "+score + "and the grade is :"+ grade);
    }
}
let scores = [100, 90, 80, 70, 60];
checkGrades(scores);

  
