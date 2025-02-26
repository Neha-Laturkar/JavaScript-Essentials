var employee = {
    id : 101,
    name : "Neha Sutar",
    department : "IT",
    salary : 5000,
    promote : function(){
        this.salary+= 3000;
        console.log (this.name+" is got promoted and her salary is £" +this.salary);
    },
    changeDept : function(newDept){
      console.log(this.name +" Neha's New Department is " + newDept);
    }
};

console.log(employee.department+  " Department : ");
employee.promote();
employee.changeDept("Full Stack Developer");
