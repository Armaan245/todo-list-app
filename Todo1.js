// Load Tasks from Local Storage
document.addEventListener('DOMContentLoaded', loadTasks);

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li span').forEach(task => {
        tasks.push({ text: task.textContent, completed: task.classList.contains('completed') });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div>
                <button class="completeBtn">✔</button>
                <button class="deleteBtn">✖</button>
            </div>
        `;
        taskList.appendChild(li);

        li.querySelector('.completeBtn').addEventListener('click', () => {
            li.querySelector('span').classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('.deleteBtn').addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks();
        });
    });
}

// Update saveTasks in Add Task
addTaskBtn.addEventListener('click', () => {
    addTask();
    saveTasks();
});
li.querySelector('.deleteBtn').addEventListener('click', () => {
    li.classList.add('fade-out'); // Add fade-out class
    setTimeout(() => {
        taskList.removeChild(li);
        saveTasks(); // Update LocalStorage
    }, 300); // Delay matches the CSS transition duration
});
