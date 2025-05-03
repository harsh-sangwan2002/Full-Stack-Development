let tasks = JSON.parse(localStorage.getItem("tasks") || '[]') || [
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
        priority: 4,
        content: 'Task 5',
    },
    {
        id: 6,
        priority: 1,
        content: 'Task 6',
    },
    {
        id: 7,
        priority: 3,
        content: 'Task 7',
    },
    {
        id: 8,
        priority: 2,
        content: 'Task 8',
    },
]

let newTask = {
    priority: '',
    id: '',
    content: ''
}

const priorityFilterBoxRef = document.querySelectorAll('.filters .priority');
const taskContainer = document.querySelector('.task-container');
const createIcon = document.querySelector('.create-icon');
const deleteAction = document.querySelector('.delete-action');
const taskModal = document.querySelector('.task-modal');
const closeButton = document.querySelector('.task-modal .close');
const allPriorityRef = document.querySelectorAll('.task-modal .priority');
const textareaRef = document.querySelector('.task-modal textarea');
const readOnlyButtonRef = document.querySelector('.readonly-icon');

let modalFlag = false;

// Filter Tickets
function applyFilter(priority) {

    let allTasks = document.querySelectorAll('.task');
    allTasks.forEach(task => {
        const curr = task.getAttribute('data-priority');

        if (priority == 0)
            task.classList.remove('hide');

        else if (curr != priority)
            task.classList.add('hide');

        else
            task.classList.remove('hide');
    })
}

priorityFilterBoxRef.forEach(boxRef => {
    boxRef.addEventListener('click', e => {
        applyFilter(e.target.getAttribute('data-priority'));
    })

    boxRef.addEventListener('dblclick', e => {
        applyFilter(0);
    })
})

// Display Modal
createIcon.addEventListener('click', e => {

    modalFlag = !modalFlag;

    if (modalFlag) {
        taskModal.classList.remove('hide');
        taskModal.querySelector('textarea').focus();
    }

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

function removeModal() {
    newTask = {
        priority: '',
        id: '',
        content: ''
    };
    modalFlag = !modalFlag;
    taskModal.classList.add('hide');
    textareaRef.value = '';
}

// TaskArea Creation
textareaRef.addEventListener('keypress', e => {

    if (e.key == "Enter") {
        let randomPriority = Math.floor(Math.random() * 3) + 1;
        newTask.priority = `${randomPriority}`;
        newTask.content = textareaRef.value;
        newTask.id = Math.floor(Math.random() * 1000);


        createTask(newTask.id, newTask.priority, newTask.content);
        tasks.push(newTask);
        renderTasks();

        removeModal();
        updateLocalStorage();
    }
})

// Create Task
function createTask(id, priority, content) {

    const taskRef = document.createElement('div');
    taskRef.classList.add('task');
    taskRef.innerHTML = `
        <div class="task-priority priority p${priority}">${priority}</div>
        <div class="task-id">#${id}</div>
        <div class="task-content">
            <textarea spellcheck="false">${content}</textarea>
        </div>
        <div class="task-delete-icon"><i class="fa-solid fa-trash fa-2x"></i></div>
    `;
    taskRef.setAttribute('data-id', id);
    taskRef.setAttribute('data-priority', priority);
    taskContainer.appendChild(taskRef);
    const deleteIcon = taskRef.querySelector('.task-delete-icon');

    deleteIcon.addEventListener('click', e => {
        removeTask(taskRef, id);
        renderTasks();
    })

    taskRef.querySelector('.task-content textarea').addEventListener('change', e => {
        updateTask(id, e.target.value);
    })

    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function updateTask(id, newValue) {

    let idx = tasks.findIndex(task => task.id === id);

    if (idx != -1) {
        const currTask = tasks[idx];
        currTask.content = newValue;
        tasks.splice(idx, 1, currTask);
    }

    updateLocalStorage();
}

function removeTask(taskRef, id) {
    tasks = tasks.filter(task => task.id != id);
    updateLocalStorage();
    taskRef.remove();
}

readOnlyButtonRef.addEventListener('click', function (e) {
    const readOnlyBtnClassList = readOnlyButtonRef.classList;
    if (readOnlyBtnClassList.contains('selected')) {
        readOnlyBtnClassList.remove('selected');
        taskContainer.classList.remove('noneditable');
    } else {
        readOnlyBtnClassList.add('selected');
        taskContainer.classList.add('noneditable');
    }
})

// Render Tasks
function renderTasks() {

    taskContainer.innerHTML = '';
    tasks.forEach(task => {
        createTask(task.id, task.priority, task.content);
    })

    updateLocalStorage();
}

renderTasks();