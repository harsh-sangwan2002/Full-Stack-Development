const API_URL = "https://api.github.com/users/harsh-sangwan2002";

async function fetchUserData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
fetchUserData();

function fetchPromise() {

    fetch(API_URL)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
fetchPromise();