const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: true,
            read: false,
        },
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: true,
        },
    },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title:firstBook} = library[0];

const str = JSON.stringify(library);

console.log(firstBook);
console.log(str);