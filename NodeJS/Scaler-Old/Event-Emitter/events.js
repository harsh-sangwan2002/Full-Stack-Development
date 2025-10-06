const events = require('events');
const eventEmitter = new events.EventEmitter();

const connectHandler = () => {
    console.log("Connection successful");
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', () => {
    console.log("Data received successfully.");
});
eventEmitter.on('data_received', () => {
    console.log("Data received successfully.");
});

console.log(eventEmitter.listeners('data_received'));

eventEmitter.emit('connection');