const capacity = 5;
const buffer = [];
const producerQueue = [];
const consumerQueue = [];

let producerIntervals = [];
let consumerIntervals = [];

const bufferView = document.getElementById('buffer');
const logView = document.getElementById('log');
const producerStatus = document.getElementById('producerStatus');
const consumerStatus = document.getElementById('consumerStatus');

function renderBuffer() {
    bufferView.innerHTML = '';
    for (let i = 0; i < capacity; i++) {
        const div = document.createElement('div');
        div.className = 'slot';
        if (buffer[i]) {
            div.classList.add('filled');
            div.innerText = buffer[i];
        }
        bufferView.appendChild(div);
    }
}

function log(message) {
    const time = new Date().toLocaleTimeString();
    logView.innerHTML += `[${time}] ${message}<br>`;
    logView.scrollTop = logView.scrollHeight;
}

async function produce(item) {
    if (buffer.length >= capacity) {
        log(`🛑 Buffer full. Producer waiting...`);
        await new Promise(resolve => producerQueue.push(() => resolve()));
    }

    buffer.push(item);
    log(`✅ Produced: ${item}`);
    renderBuffer();

    if (consumerQueue.length > 0) {
        const resume = consumerQueue.shift();
        resume();
    }
}

async function consume() {
    if (buffer.length === 0) {
        log(`⏳ Buffer empty. Consumer waiting...`);
        await new Promise(resolve => consumerQueue.push(() => resolve()));
    }

    const item = buffer.shift();
    log(`🗑️ Consumed: ${item}`);
    renderBuffer();

    if (producerQueue.length > 0) {
        const resume = producerQueue.shift();
        resume();
    }

    return item;
}

function startProducer(id) {
    let count = 1;
    const interval = setInterval(async () => {
        producerStatus.innerText = `Producer Status: 🟢`;
        const item = `P${id}-${count++}`;
        await produce(item);
        producerStatus.innerText = `Producer Status: 🔴`;
    }, Math.random() * 1500 + 500);
    producerIntervals.push(interval);
}

function startConsumer(id) {
    const interval = setInterval(async () => {
        consumerStatus.innerText = `Consumer Status: 🟢`;
        const item = await consume();
        log(`👷 Consumer ${id} used: ${item}`);
        consumerStatus.innerText = `Consumer Status: 🔴`;
    }, Math.random() * 2000 + 800);
    consumerIntervals.push(interval);
}

function stopSimulation() {
    producerIntervals.forEach(clearInterval);
    consumerIntervals.forEach(clearInterval);
    producerIntervals = [];
    consumerIntervals = [];
    log(`⛔ Simulation stopped.`);
}

function startSimulation() {
    log(`▶️ Starting simulation...`);
    startProducer(1);
    startProducer(2);
    startConsumer(1);
    startConsumer(2);
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', () => {
    stopSimulation();
    renderBuffer();
    startSimulation();
});

document.getElementById('stopBtn').addEventListener('click', stopSimulation);

// Initial render
renderBuffer();
