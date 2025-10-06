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

// Resolves/reject the first promise that resolves/rejects
Promise.race([fetchUserData(), fetchUserPosts()]).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})