window.onload = function(){
alert("Welcome To your JavaScript Course!!");
console.log("The Web Page has loaded!!");
};

function changeText() {
    var heading = document.getElementById("demo");
    heading.textContent = "This is changed text!!!!!!";
}
function bigText() {
    var heading = document.getElementById("demo");
    heading.style.fontSize= "70px";
}
function changeColor() {
    var heading = document.getElementById("demo");
    heading.style.color = "skyblue";
    heading.style.textShadow =" 2px 2px 5px black";
    heading.style.fontFamily = "Arial";
}
function changeImage() {
    var image = document.getElementById("img1");
    image.src = "images/image5.png";
    image.width = "400";
    image.height = "300";   


    image.onerror = function() {
        alert("Image not found!");
    };
}
function changeImageBack() {
    var image = document.getElementById("img1");
    image.src = "images/image4.png";
    image.width = "400";
    image.height = "300";
}