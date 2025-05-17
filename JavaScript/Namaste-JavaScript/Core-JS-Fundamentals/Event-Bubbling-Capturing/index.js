document.querySelector('#grandparent').addEventListener('click', function () {
    console.log("Grandparent clicked");
}, true)

document.querySelector('#parent').addEventListener('click', function () {
    console.log("Parent clicked");
}, false)

document.querySelector('#child').addEventListener('click', function () {
    console.log("Child clicked");
}, false)