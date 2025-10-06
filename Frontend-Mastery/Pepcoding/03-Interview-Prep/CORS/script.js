let url = 'http://localhost:3000';

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then(data => {
    console.log('Success:', data);
}).catch(error => {
    console.error('Error:', error);
});