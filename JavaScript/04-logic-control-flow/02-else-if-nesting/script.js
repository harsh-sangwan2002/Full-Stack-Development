const d = new Date(11, 28, 2024, 20, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake Up!');
    }
}
else if (hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');

    if (hour === 20) {
        console.log('zzzzzzzzzz');
    }
}

if(hour>=7 && hour<15){
    console.log("It's work time!");
}

if(hour==6 || hour==20){
    console.log('Brush your teeth!');
}