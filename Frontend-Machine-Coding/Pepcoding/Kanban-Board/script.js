let addBtn = document.querySelector('.add-btn');
let modalCont = document.querySelector('.modal-cont');
let priorityColorArr = document.querySelectorAll('.priority-color');
let textAreaContainer = document.querySelector('.textarea-cont');
let mainContainer = document.querySelector('.main-cont');

let modalDisplay = false;

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
        generateTicket();
        console.log(key);
        textAreaContainer.value = "";
        modalDisplay = false;
        modalCont.style.display = "none";
    }
})

function generateTicket() {

    let ticketCont = document.createElement('div');
    ticketCont.setAttribute('class', 'ticket-cont');

    let ticketColor = document.createElement('div');
    ticketColor.setAttribute('class', 'ticket-color');

    let ticketId = document.createElement('div');
    ticketId.setAttribute('class', 'ticket-id');

    let taskCont = document.createElement('div');
    taskCont.setAttribute('class', 'task-cont');
    taskCont.innerText = textAreaContainer.value;

    ticketCont.appendChild(ticketColor);
    ticketCont.appendChild(ticketId);
    ticketCont.appendChild(taskCont);

    mainContainer.appendChild(ticketCont);
}

// Priority-color Container
priorityColorArr.forEach(ele => {

})