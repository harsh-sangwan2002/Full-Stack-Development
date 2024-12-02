// JSON -> JavaScript Object Notation
let post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
}

// Convert object to JSON
let str = JSON.stringify(post);

// Parse JSON
let obj = JSON.parse(str);

let posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body'
    }
]

str = JSON.stringify(posts);

console.log(str);