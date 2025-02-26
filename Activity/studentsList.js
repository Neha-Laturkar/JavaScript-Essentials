// Date : 26/02/2025 WIdow Load Event
// Author : Neha Sutar
window.onload = function(){
    alert("Welcome To Lionwood Juniot School");
}
// ---------------------------------------------------------Array of students List

const allStudents = ["Rushabh -7", "Rohan-6", "Raj-8", "Rahul-6", "William-4", "Riya-6", "Jago-7", "Jhon-5", "Jenny-5", 
                    "Melis-8","Hugo-7", "Hannah-8", "Hazel-7", "Holly-6", "Honey-3", "Honor-4", "Hope-5", "Hudson-7"];

let studentList = "<ol>";

for (let i=0; i< allStudents.length; i++){
    studentList += "<li>" + allStudents[i]+ "</li>";

}
studentList +="</ol>";
document.getElementById("students").innerHTML = studentList;


// ------------------------------------------Array of Students Age
var studentsAge = [5,3,6,8,4,6,4,7,6,7,8,5,7,8,6,7,8,6,8,7,8];
studentsAge.sort();

console.log("This Is age sorted list :" +studentsAge);
studentsAge.forEach(function(age){
    console.log(age);
});

// ------------------------------------------Favourite color of students
var colors = ["Red", "Blue", "Green", "Yellow", "Pink", "Purple", "Black", "White", "Orange",
     "Brown", "Grey", "Violet", "Indigo", "Magenta", "Cyan", "Maroon", "Olive", "Coral"];

     let colorList ="<ol>";
     for (let j=0; j<colors.length; j++){
        colorList+= "<li>" + colors[j] + "</li>";
     }
     colorList+= "</ol>";
     document.getElementById("color").innerHTML= colorList;

// ------------------------------------------Favourite Subject of students
var subjects = ["Maths", "Science", "History", "Geography", "English", "Hindi", "Marathi", "Art", "Music", 
                "Dance", "Sports", "Computer", "Drawing", "Craft", "Gym", "Yoga", "Singing", "Drama"];

let subjectList = "<oL>";
for (let k=0; k<subjects.length; k++){
    subjectList+= "<li>" + subjects[k] + "</li>";
}
subjectList+= "</ol>";
document.getElementById("subject").innerHTML = subjectList;

// -------------------------------------------------------------------Switch Case

var subject = "Maths";
switch(subject){
    case "Maths":
        console.log("Maths is the favourite subject of students");
        break;
    case "Science":
        console.log("Science is the favourite subject of students");
        break;
    case "History":
        console.log("History is the favourite subject of students");
        break;

    case "Geography":
        console.log("Geography is the favourite subject of students");
        break;
    case "English":
        console.log("English is the favourite subject of students");
        break;
    case "Hindi":
    console.log("Hindi is the favourite subject of students");
        break;
        default:
            console.log("No favourite subject of students");
            break;
}
