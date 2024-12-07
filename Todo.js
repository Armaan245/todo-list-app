// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Functionality
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="completeBtn">✔</button>
            <button class="deleteBtn">✖</button>
        </div>
    `;

    // Append to list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Event listeners for Complete and Delete
    li.querySelector('.completeBtn').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
    });

    li.querySelector('.deleteBtn').addEventListener('click', () => {
        taskList.removeChild(li);
    });
}

// Event Listener for Add Button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
// Clear All Tasks Functionality
const clearAllBtn = document.getElementById('clearAllBtn');

clearAllBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all tasks?")) {
        taskList.innerHTML = ""; // Clear all tasks
        saveTasks(); // Update LocalStorage
    }
});
const filterTasks = document.getElementById('filterTasks');

// Filter Tasks Functionality
filterTasks.addEventListener('change', () => {
    const filterValue = filterTasks.value;
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(task => {
        const isCompleted = task.querySelector('span').classList.contains('completed');

        switch (filterValue) {
            case 'all':
                task.style.display = "flex";
                break;
            case 'completed':
                task.style.display = isCompleted ? "flex" : "none";
                break;
            case 'pending':
                task.style.display = !isCompleted ? "flex" : "none";
                break;
        }
    });
});
