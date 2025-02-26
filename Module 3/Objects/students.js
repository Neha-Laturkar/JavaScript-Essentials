var student = {
    name : "Neha",
    age : 34,
    subjects : ["MAths", "Prgrammimg", "Algebra", "Gepgrapgy", "History"],
    isGraduated : true,
    greet : function(){
        console.log ("Hello, My name is "+this.name +" & My Favourite Subjects are : "+ this.subjects);
    },
    allInfo : function(){
        console.log(this.name, this.age, this.subjects, this.isGraduated);
    }
};
console.log(student.name);
student.greet();
student.allInfo();
