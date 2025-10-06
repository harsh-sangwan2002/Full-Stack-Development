const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John Doe", age: 30 })
        }, 3000)
    })
}

const fetchUserPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error while fetching posts")
        }, 2000)
    })
}

// Resolves the first promise that resolves
// AggregateError is thrown if all promises are rejected
Promise.any([fetchUserData(), fetchUserPosts()]).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})