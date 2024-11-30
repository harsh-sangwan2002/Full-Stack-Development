const listItems = document.querySelectorAll('.item');
// Can use HOF on NodeList
console.log(listItems[1].innerText);

// Doesn't work
// listItems.style.color = 'red';
listItems.forEach(item=>item.style.color='red');

// Cannot use HOF on HTMLCollection
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);
const listItemsArr = Array.from(listItems2);
listItemsArr.forEach(item=>console.log(item.innerText));

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);