function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <div class="actions">
            <button onclick="toggleComplete(this)">Complete</button>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

function toggleComplete(button) {
    var taskText = button.parentElement.previousElementSibling;
    taskText.classList.toggle("completed");
}

function editTask(button) {
    var taskText = button.parentElement.previousElementSibling;
    var newText = prompt("Edit task:", taskText.innerText);

    if (newText !== null) {
        taskText.innerText = newText;
    }
}

function removeTask(button) {
    var li = button.parentElement.parentElement;
    li.remove();
}
