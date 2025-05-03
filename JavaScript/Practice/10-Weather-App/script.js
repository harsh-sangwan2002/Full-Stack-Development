const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.submit');
const list = document.querySelector('.dropdown-menu');

const targetCity = document.querySelector('#target-city');

const temp = document.querySelector('.temp');
const tempCel = document.querySelector('.temp-cel');
const tempFh = document.querySelector('.temp-fh');
const condition = document.querySelector('.condition');
const cloud = document.querySelector('.cloud');

const country = document.querySelector('.country-name');
const nameOfCountry = document.querySelector('.country');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');
const lastUpdated = document.querySelector('.last-updated');

const wind = document.querySelector('.wind');
const windmph = document.querySelector('.wind-mph');
const windkmph = document.querySelector('.wind-kmph');
const windDegree = document.querySelector('.wind-degree');
const windDirection = document.querySelector('.wind-direction');

const fetchTemperature = async (target) => {

    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=fb0b9d625d354cb684e50017251701&q=${target}&aqi=no`);
    const data = await res.json();
    return data;
}

const updateDOM = async (data) => {

    const { location, current } = data;

    targetCity.textContent = location.name;
    country.textContent = location.country;
    nameOfCountry.textContent = location.country;
    lat.textContent = location.lat;
    lon.textContent = location.lon;
    lastUpdated.textContent = current.localtime;

    temp.textContent = current.temp_c;
    tempCel.textContent = current.temp_c;
    tempFh.textContent = current.temp_f;
    condition.textContent = current.condition.text;
    cloud.textContent = current.cloud;

    wind.textContent = current.wind_kph;
    windmph.textContent = current.wind_mph;
    windkmph.textContent = current.wind_kph;
    windDegree.textContent = current.wind_degree;
    windDirection.textContent = current.wind_dir;
}

list.addEventListener('click', async (e) => {
    const cityName = e.target.textContent;
    let data;

    switch (cityName) {

        case 'Delhi':
            data = await fetchTemperature('India');
            updateDOM(data);
            break;

        case "Seattle":
            data = await fetchTemperature('USA');
            updateDOM(data);
            break;

        case "Bangalore":
            data = await fetchTemperature("India");
            updateDOM(data);
            break;
    }
})

searchButton.addEventListener('click', async (e) => {

    e.preventDefault();
    const countryName = searchInput.value;

    let data = await fetchTemperature(countryName);
    updateDOM(data);
})