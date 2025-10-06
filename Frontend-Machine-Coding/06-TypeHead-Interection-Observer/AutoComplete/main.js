import getCountries from './fetchApi.js';

const inputBox = document.querySelector('#search_input');
const suggestionBox = document.querySelector('#suggestion_box');

const handleSearch = async (keyword) => {
    const countriesArr = await getCountries(keyword);
    const countries = countriesArr.map(country => country.name.common);

    return countries;
}

const populateSuggestions = (countries) => {

    if (countries.length)
        suggestionBox.classList.add('visible');

    else
        suggestionBox.classList.remove('visible');

    suggestionBox.innerHTML = ``;
    let fragment = document.createDocumentFragment();

    countries.map(name => {
        let li = document.createElement('li');
        li.textContent = name;
        fragment.appendChild(li);
    })

    suggestionBox.appendChild(fragment);
}

function debounce(cb, delay = 1000) {

    let timeoutId = null;

    return function (...args) {

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            cb(...args)
            timeoutId = null;
        }, delay)
    }
}

const handleSuggestions = async (event) => {
    const keyword = event.target.value;

    const countryName = await handleSearch(keyword);
    populateSuggestions(countryName);
}

inputBox.addEventListener('input', debounce(handleSuggestions));