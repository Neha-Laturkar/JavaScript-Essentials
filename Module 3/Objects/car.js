var car = {
    brand : "Toyota",
    model : "Camry",
    year : 2022,
    isElectric : false,
    start : function(){
        console.log(this.brand + " " + this.model+" is starting...");
    },
    drive : function(){
        console.log(this.brand+ " Car is ready to drive and "+ this.year + " is the release year! ");
    }
};
console.log(car.brand);
car.start();
car.drive();