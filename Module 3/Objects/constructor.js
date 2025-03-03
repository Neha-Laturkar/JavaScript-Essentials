class Character  {
    constructor( name, health, strength, hairColor, clothesColor, goldCoins){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.hairColor = hairColor;
        this.clothesColor = clothesColor;
        this.goldCoins = goldCoins;
    }
};

//new character instances
const player = new Character ("Neha", 100, 20, "Black", "Orange", 100);
console.log(player.name);
console.log(player);

const enemy = new Character ("Rashmi", 30, 0, "Yellow", "black", 0 );
console.log(enemy); 

class Students {
    constructor (name, age, className, marks, grade, favSubject ){
        this.name = name;
        this.age = age;
        this.className = className;
        this.marks = marks;
        this.grade = grade;
        this.favSubject = favSubject;
    }
};

const student = new Students("Rushabh", 8, "3D", "99%", "A+", "Mathematics" );
const student1 = new Students("Melis", 8, "3D", "90%", "A", "Biology" );
const student3 = new Students ("Jago", 8, "3S", "86%", "A", "Art");
console.log(student);
console.log(student1);
console.log(student3);

class Employee {
    constructor (name , dept, salary, location){
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.location = location;
    }
};

const emp1 = new Employee ("Neha", "IT", 5000, "UK");
const emp2 = new Employee ("Ram", "SolutionArchitect", 9000, "USA");
console.log(emp1);
console.log(emp2);

class Chest {
    constructor(isOpen, coins){
        this.isOpen = isOpen;
        this.coins = coins;
    }

    openChest(){
        if(!this.isOpen){
            this.isOpen = true;
            this.coins = 0;
            console.log("Chest Opened ! Collected 10 coins!!");
        }
    };
};

const myChest = new Chest(false, 100);
myChest.openChest();
console.log(myChest.coins);