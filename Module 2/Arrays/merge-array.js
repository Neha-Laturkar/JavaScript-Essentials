var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var allStudents = boys.concat(girls);
console.log(allStudents);
boys.push("Lone", "Gitte");
console.log(boys);
allStudents.concat(boys);
console.log(allStudents);
allStudents.unshift("Hans", "Kurt");
console.log(allStudents);