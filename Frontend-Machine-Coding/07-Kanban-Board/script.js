import { nanoid } from 'https://cdnjs.cloudflare.com/ajax/libs/nanoid/5.0.9/index.browser.js';

const toolBoxPriorityCont = document.querySelector('.toolbox-priority-cont');
const addButton = document.querySelector('.add-btn');
const removeButton = document.querySelector('.remove-btn');
const modalContainer = document.querySelector('.modal-container');
let allTickets = document.querySelectorAll('.ticket-cont');
const mainContainer = document.querySelector('.main-container');

let colorsArr = ["pink", "blue", "purple", "green"];
let selectedColor = colorsArr[0];
let modalFlag = false;
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
let ticketsArr = [];

console.log(nanoid());

toolBoxPriorityCont.addEventListener('click', (e) => {

    if (e.target == e.currentTarget)
        return;

    const selectedColor = e.target.classList[1];

    allTickets.forEach(ticket => {

        const ticketColor = ticket.querySelector('.ticket-color').classList[1];

        if (ticketColor == selectedColor)
            ticket.style.display = "block";

        else
            ticket.style.display = "none";
    })
})

toolBoxPriorityCont.addEventListener('dblclick', (e) => {

    if (e.target == e.currentTarget)
        return;

    allTickets.forEach(ticket => {

        ticket.style.display = "block";
    })
})

addButton.addEventListener('click', (e) => {

    modalFlag = !modalFlag;

    if (modalFlag) {
        modalContainer.innerHTML = "";
        modalContainer.style.display = "flex";

        const textArea = document.createElement('textarea');
        textArea.classList.add('textarea-cont');

        textArea.addEventListener('keypress', (e) => {

            if (e.key == "Enter") {
                textArea.value = "";
                createTicket();
                modalFlag = false;
                modalContainer.style.display = "none";
            }
        })

        const colorsCont = document.createElement('div');
        colorsCont.classList.add('modal-color-cont');


        colorsArr.forEach(color => {

            const colorEle = document.createElement('div');
            colorEle.classList.add('color');
            colorEle.classList.add(color);

            colorsCont.appendChild(colorEle);
        })

        colorsCont.addEventListener('click', (e) => {

            if (e.target == e.currentTarget)
                return;

            const allColors = colorsCont.querySelectorAll('.color');
            allColors.forEach(colorEle => {

                colorEle.classList.remove('border');

                if (e.target.classList[1] == colorEle.classList[1]) {
                    colorEle.classList.add("border");
                    selectedColor = colorEle.classList[1];
                }
            })
        })

        modalContainer.appendChild(textArea);
        modalContainer.appendChild(colorsCont);
    } else {
        modalContainer.style.display = "none";
    }
})

// <div class="ticket-cont">
//             <div class="ticket-color blue"></div>
//             <div class="ticket-id">#Rcz524</div>
//             <div class="ticket-area">Another One</div>
//             <div class="lock-unlock">
//                 <i class="fa-solid fa-lock"></i>
//             </div>
//         </div>

function createTicket(ticketId, ticketTask, ticketColor) {

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