const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title','my-element');
// div.innerText = 'Hello Word';

const text = document.createTextNode('Hello Node');
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);