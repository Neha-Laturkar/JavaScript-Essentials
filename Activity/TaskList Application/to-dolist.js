
document.getElementById("addTaskBtn").addEventListener("click", addTaskToList);

function addTaskToList() {
    var inputText = document.getElementById("items");
    var task = inputText.value.trim();

    if (task === "") {
        alert("Please Enter A Task!");
        return;
    }

    var ul = document.getElementById("list");
    var li = document.createElement("li");

    // Create Checkbox
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("task-checkbox");

    // Create Task Text
    var taskText = document.createElement("span");
    taskText.textContent = task;

    
// Function to make task editable
taskText.addEventListener("dblclick", function () {
var editInput = document.createElement("input");
editInput.type = "text";
editInput.value = taskText.textContent;

// Replace span with input field
li.replaceChild(editInput, taskText);
editInput.focus();

// Save changes when Enter is pressed or focus is lost
editInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        taskText.textContent = editInput.value;
        li.replaceChild(taskText, editInput);
    }
});

editInput.addEventListener("blur", function () {
    taskText.textContent = editInput.value;
    li.replaceChild(taskText, editInput);
});
});

    // Create Delete Button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    // Delete task on button click
    deleteBtn.onclick = function () {
        ul.removeChild(li);
    };

    deleteBtn.onclick = function () {
        li.classList.add("fade-out"); // Add animation class
        setTimeout(() => {
            ul.removeChild(li); // Remove after animation
        }, 500); // Match animation duration
    };

    // Mark as completed on checkbox click
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskText.classList.add("completed");
        } else {
            taskText.classList.remove("completed");
        }
    });
    // Append elements in correct order
    li.style.animation = "fadeIn 0.3s ease-in-out";
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    ul.appendChild(li);

    inputText.value = ""; // Clear input field

  };
