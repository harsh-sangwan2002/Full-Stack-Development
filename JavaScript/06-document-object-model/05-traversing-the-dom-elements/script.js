let output;

// Get child elements
const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent element from child
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = `1px solid black`;
child.parentElement.style.padding = `15px 10px`;

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.previousElementSibling.style.color = 'red';
secondItem.nextElementSibling.style.color = 'green';

console.log(output);