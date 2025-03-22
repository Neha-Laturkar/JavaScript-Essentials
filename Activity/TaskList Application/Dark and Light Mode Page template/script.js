//dark-mode toggle

const themeToggleBtn = document.getElementById("changeTheme");

themeToggleBtn.addEventListener("click", ()=> {

    document.body.classList.toggle("dark-mode");

    // if(document.body.contains("dark-mode")){
    //     themeToggleBtn.textContent = "Switch To Light Mode"
    // }
    // else{
    //     themeToggleBtn.textContent = "Switch To Light Mode"
    // }

});

//just practice

if(true){
    const x = 10;
    console.log(x);
}
const x = 20;
console.log(x);

const person = {
    name : "Neha",
    age : 35
};

person.name = "Rushabh";
console.log(person);
person.city = "Norwich";
console.log(person);
delete person.name;
console.log(person);
person.name = "Neha";
console.log(person);
person.grade = 99;
console.log(person);

let foo = 40;
foo = "abc";
console.log(foo);
foo = true;
console.log(foo);

function greet(name){
    console.log(`Hello ${name} !! You have secured Your Job here!! Welcome`);
};
greet("Neha");