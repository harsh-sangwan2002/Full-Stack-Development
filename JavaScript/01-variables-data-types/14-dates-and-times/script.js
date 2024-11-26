let d;

d = new Date();
d = d.toString();

d = new Date(2021,0,10,12,30,0);

d = new Date('2021-07-12T12:30:00');

d = new Date('07/10/2022 12:30:00');

d = Date.now();

d = new Date();

// By default the timestamp is in milliseconds
d = d.getTime();
d = d.valueOf();

// Timestamp in seconds
d = Math.floor(Date.now()/1000);

console.log(d);