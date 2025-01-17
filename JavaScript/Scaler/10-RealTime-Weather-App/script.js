const button = document.querySelector('button');
const temperature = document.querySelector('.temp');
const timeLocation = document.querySelector('.time_location>span');
const weatherCondition = document.querySelector('.weather_condition>span');

async function fetchData(target) {

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fb0b9d625d354cb684e50017251701&q=${target}&aqi=no`);
    const data = await response.json();
    const temp = data.current.temp_c;
    const location = data.location.name;
    const condition = data.current.condition.text;

    updateDOM(temp, location, condition);
    console.log(data);
}

function updateDOM(temp, location, condition) {

    temperature.innerHTML = `${temp}°C`;
    timeLocation.innerHTML = `${location}`;
    weatherCondition.innerHTML = `${condition}`;
}

button.addEventListener('click', e => {

    e.preventDefault();

    const city = document.querySelector(".searchField");
    const target = city.value;

    fetchData(target);
})
