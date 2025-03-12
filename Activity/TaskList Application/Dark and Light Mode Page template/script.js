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