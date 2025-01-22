const tasks = [
    {
        id: 1,
        priority: 1,
        content: 'Task 1',
    },
    {
        id: 2,
        priority: 2,
        content: 'Task 2',
    },
    {
        id: 3,
        priority: 3,
        content: 'Task 3',
    },
    {
        id: 4,
        priority: 4,
        content: 'Task 4',
    },
    {
        id: 5,
        priority: 5,
        content: 'Task 5',
    },
    {
        id: 6,
        priority: 6,
        content: 'Task 6',
    },
    {
        id: 7,
        priority: 7,
        content: 'Task 7',
    },
    {
        id: 8,
        priority: 8,
        content: 'Task 8',
    },
]

let newTask = {
    priority: '',
    id: '',
    content: ''
}

const taskContainer = document.querySelector('.task-container');
const createIcon = document.querySelector('.create-icon');
const deleteIcon = document.querySelector('.delete-icon');
const taskModal = document.querySelector('.task-modal');
const closeButton = document.querySelector('.task-modal .close');
const allPriorityRef = document.querySelectorAll('.task-modal .priority');
const textareaRef = document.querySelector('.task-modal textarea');

let modalFlag = false;

// Display Modal
createIcon.addEventListener('click', e => {

    modalFlag = !modalFlag;

    if (modalFlag)
        taskModal.classList.remove('hide');

    else
        taskModal.classList.add('hide');

})

closeButton.addEventListener('click', e => {

    modalFlag = !modalFlag;

    taskModal.classList.add('hide');
})

allPriorityRef.forEach(priorityRef => {

    priorityRef.addEventListener('click', e => {

        allPriorityRef.forEach(priority => priority.classList.remove('selected'));
        e.target.classList.add('selected');
    })
})

// TaskArea Creation
textareaRef.addEventListener('keypress', e => {

    if (e.key == "Enter") {
        newTask.priority = 'p1';
        newTask.content = textareaRef.value;
        newTask.id = 12344;

        taskContainer.innerHTML = '';
        createTask(newTask.id, newTask.priority, newTask.content);
        renderTasks();

        newTask = {
            priority: '',
            id: '',
            content: ''
        };
        modalFlag = !modalFlag;
        taskModal.classList.add('hide');
    }
})

// Create Task
function createTask(id, priority, content) {

    const taskRef = document.createElement('div');
    taskRef.classList.add('task');
    taskRef.innerHTML = `
        <div class="task-priority">${priority}</div>
        <div class="task-id">#${id}</div>
        <div class="task-content">${content}</div>
    `;
    taskContainer.appendChild(taskRef);
}

// Render Tasks
function renderTasks() {

    tasks.forEach(task => {
        createTask(task.id, task.priority, task.content);
    })
}

renderTasks();