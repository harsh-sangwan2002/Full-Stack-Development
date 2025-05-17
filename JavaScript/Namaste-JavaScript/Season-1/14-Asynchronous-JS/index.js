console.log("Start");

document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked");
});

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

console.log("End");