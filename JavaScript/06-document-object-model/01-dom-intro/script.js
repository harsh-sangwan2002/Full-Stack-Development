/*****************  What is DOM?
 * 1. Programming interface for the web/HTML elements
 * 2. Structure that we can interact with JS
 * 3. Include tags, attributes, text nodes etc
 * 4. Represented as a tree structure ******************/

// console.log(window);
// console.dir(window.document);

// console.log(document.body.innerHTML);

console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World</h1>'
// document.write('Hello from JS!');

console.log(document.getElementById('main'));

document.querySelector('#main h1').innerText = "Hello!";