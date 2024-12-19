import { nanoid } from 'https://cdnjs.cloudflare.com/ajax/libs/nanoid/5.0.9/index.browser.js';

let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn');
let toolboxPriorityCont = document.querySelector('.toolbox-priority-cont');
let modalCont = document.querySelector('.modal-cont');
let textAreaContainer = document.querySelector('.textarea-cont');
let mainContainer = document.querySelector('.main-cont');
let priorityColorArr = document.querySelectorAll('.priority-color');

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1];
let ticketsArr = [];

let modalDisplay = false;
let removeFlag = false;
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

// ToolBox Priority Container
toolboxPriorityCont.addEventListener('click', e => {

    let ticketColor = e.target.classList[0];
    let filteredTickets = ticketsArr.filter(ticket => ticketColor === ticket.ticketColor);
})

// Modal Container
addBtn.addEventListener('click', e => {

    modalDisplay = !modalDisplay;

    if (modalDisplay)
        modalCont.style.display = "flex";

    else
        modalCont.style.display = "none";
})

// Ticket Geneartion
modalCont.addEventListener('keydown', e => {

    const key = e.key;
    if (key == "Enter") {
        generateTicket(modalPriorityColor, textAreaContainer.value, nanoid());
        textAreaContainer.value = "";
        modalDisplay = false;
        modalCont.style.display = "none";
    }
})

function generateTicket(ticketColor, ticketTask, ticketId) {

    let ticketCont = document.createElement('div');
    ticketCont.setAttribute('class', 'ticket-cont');

    let ticketColor = document.createElement('div');
    ticketColor.setAttribute('class', 'ticket-color');
    ticketColor.classList.add(`${ticketColor}`);

    let ticketId = document.createElement('div');
    ticketId.setAttribute('class', 'ticket-id');
    ticketId.innerText = `#${ticketId}`;

    let taskCont = document.createElement('div');
    taskCont.setAttribute('class', 'task-cont');
    taskCont.innerText = ticketTask;

    let ticketLock = document.createElement('div');
    ticketLock.setAttribute('class', 'ticket-lock');

    let lockIcon = document.createElement('i');
    lockIcon.setAttribute('class', `fa-solid ${lockClass}`);
    ticketLock.appendChild(lockIcon);

    ticketCont.appendChild(ticketColor);
    ticketCont.appendChild(ticketId);
    ticketCont.appendChild(taskCont);
    ticketCont.appendChild(ticketLock);
    mainContainer.appendChild(ticketCont);

    ticketsArr.push({ ticketColor, ticketTask, ticketId });

    handleRemoval(ticketCont);
    handleLock(ticketCont);
    handleTicketColor(ticketCont);
}

function handleLock(ticket) {

    let ticketLockElem = ticket.querySelector('.ticket-lock');
    let ticketLock = ticketLockElem.children[0];
    let taskArea = ticket.querySelector('.task-cont');

    ticketLock.addEventListener('click', e => {

        if (ticketLock.classList.contains(lockClass)) {
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            taskArea.setAttribute('contentEditable', true);
        }

        else {
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
            taskArea.setAttribute('contentEditable', false);
        }
    })
}

function handleRemoval(ticket) {

    if (removeFlag) {
        ticket.remove();
    }
}

function handleTicketColor(ticket) {

    let ticketColor = ticket.querySelector('.ticket-color');

    ticketColor.addEventListener('click', e => {

        let currentTicketColor = ticketColor.classList[1];
        let currentColorTicketIdx = colors.findIndex(color => color == currentTicketColor);

        let newTicketColorIdx = (currentColorTicketIdx + 1) % colors.length;
        let newTicketColor = colors[newTicketColorIdx];

        ticketColor.classList.remove(currentTicketColor);
        ticketColor.classList.add(newTicketColor);
    })
}

removeBtn.addEventListener('click', e => {
    removeFlag = !removeFlag;
})

// Priority-color Container
priorityColorArr.forEach((colorEle, idx) => {
    colorEle.addEventListener('click', e => {
        priorityColorArr.forEach((priorityColorEle, idx) => {
            priorityColorEle.classList.remove('border');
        })
        colorEle.classList.add('border');

        modalPriorityColor = colorEle.classList[0];
    })
})