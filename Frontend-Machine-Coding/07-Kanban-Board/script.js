import { nanoid } from 'https://cdnjs.cloudflare.com/ajax/libs/nanoid/5.0.9/index.browser.js';

const toolBoxPriorityContainer = document.querySelector('.toolbox-priority-container');
const mainContainer = document.querySelector('.main-container');
const modalContainer = document.querySelector('.modal-container');
const textAreaContainer = document.querySelector('.textarea-container');
const priorityColorContainer = document.querySelector('.priority-color-container');
const allPriorityColor = document.querySelectorAll('.priority-color');
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');

let allTickets = JSON.parse(localStorage.getItem('tickets')) || [];
const allColors = ["pink", "blue", "green", "black"];
let modalFlag = false;
let removeMode = false;
let currentColor = "green";
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

window.onload = () => {
    allTickets.forEach(ticketData => {
        generateTicket(ticketData.text, ticketData.color, ticketData.id, false);
    });
};

function saveTicketsToStorage() {
    const ticketsData = allTickets.map(ticket => {
        const ticketId = ticket.querySelector('.ticket-id').innerText;
        const ticketColor = ticket.querySelector('.ticket-color').classList[1];
        const ticketText = ticket.querySelector('.ticket-area').innerText;

        return { id: ticketId, color: ticketColor, text: ticketText };
    });
    localStorage.setItem('tickets', JSON.stringify(ticketsData));
}

toolBoxPriorityContainer.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) return;

    const color = e.target.classList[1];
    const tickets = document.querySelectorAll('.ticket-container');

    tickets.forEach(ticketEle => {
        const ticketColor = ticketEle.querySelector('.ticket-color').classList[1];

        if (ticketColor === color) {
            ticketEle.style.display = "block";
        } else {
            ticketEle.style.display = "none";
        }
    });
});

toolBoxPriorityContainer.addEventListener('dblclick', () => {
    const tickets = document.querySelectorAll('.ticket-container');

    tickets.forEach(ticketEle => {
        ticketEle.style.display = "block";
    });
});

priorityColorContainer.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) return;

    const color = e.target.classList[1];

    allPriorityColor.forEach(colorEle => {
        colorEle.classList.remove('border');
    });

    allPriorityColor.forEach(colorEle => {
        if (colorEle.classList[1] == color) {
            currentColor = color;
            colorEle.classList.add('border');
        }
    });
});

addBtn.addEventListener('click', () => {
    modalFlag = !modalFlag;

    if (modalFlag) modalContainer.style.display = "flex";
    else modalContainer.style.display = "none";
});

textAreaContainer.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        textAreaContainer.value = "";
        modalContainer.style.display = "none";
        currentColor = "green";
        generateTicket(textAreaContainer.value, currentColor, nanoid(), true);

    } else if (e.key == "Escape") {
        textAreaContainer.value = "";
        modalContainer.style.display = "none";
        currentColor = "green";
    }
});

function generateTicket(text, color, id, save = true) {
    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-container');

    const ticketColor = document.createElement('div');
    ticketColor.classList.add('ticket-color');
    ticketColor.classList.add(color);

    const ticketId = document.createElement('div');
    ticketId.classList.add('ticket-id');
    ticketId.innerText = id;

    const ticketArea = document.createElement('div');
    ticketArea.classList.add('ticket-area');
    ticketArea.innerText = text;

    const lockUnlock = document.createElement('div');
    lockUnlock.classList.add('lock-unlock');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add(`${lockClass}`);
    lockUnlock.appendChild(icon);

    ticketContainer.appendChild(ticketColor);
    ticketContainer.appendChild(ticketId);
    ticketContainer.appendChild(ticketArea);
    ticketContainer.appendChild(lockUnlock);
    mainContainer.appendChild(ticketContainer);

    allTickets.push(ticketContainer);

    if (save) saveTicketsToStorage();

    ticketContainer.addEventListener('click', () => {
        handleRemoval(ticketContainer);
    });

    ticketColor.addEventListener('click', () => {
        changeColor(ticketContainer);
    });
    lockUnlock.addEventListener('click', () => {
        toggleLock(ticketContainer);
    });
}

removeBtn.addEventListener('click', () => {
    removeMode = !removeMode;

    if (removeMode) {
        removeBtn.classList.add('remove');
    } else {
        removeBtn.classList.remove('remove');
    }
});

function handleRemoval(ticket) {
    if (!removeMode) return;

    const ticketId = ticket.querySelector('.ticket-id').innerText;

    ticket.remove();

    allTickets = allTickets.filter(currentTicket => {
        const currentTicketId = currentTicket.querySelector('.ticket-id').innerText;
        return currentTicketId !== ticketId;
    });

    saveTicketsToStorage();
}

function changeColor(ticket) {
    const ticketColor = ticket.querySelector('.ticket-color');
    const currentColor = ticketColor.classList[1];
    let index = allColors.indexOf(currentColor);

    index = (index + 1) % allColors.length;

    ticketColor.classList.remove(currentColor);
    ticketColor.classList.add(allColors[index]);
    saveTicketsToStorage();
}

function toggleLock(ticket) {
    const lockUnlock = ticket.querySelector('.lock-unlock');
    const icon = lockUnlock.querySelector('i');

    if (icon.classList.contains(lockClass)) {
        icon.classList.remove(lockClass);
        icon.classList.add(unlockClass);

        const ticketArea = ticket.querySelector('.ticket-area');
        ticketArea.setAttribute('contenteditable', 'true');
    } else {
        icon.classList.remove(unlockClass);
        icon.classList.add(lockClass);

        const ticketArea = ticket.querySelector('.ticket-area');
        ticketArea.setAttribute('contenteditable', 'false');
    }

    saveTicketsToStorage();
}