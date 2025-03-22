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
            resolve("Error while fetching posts")
        }, 2000)
    })
}

Promise.myRace = function (promises) {

    return new Promise((resolve, reject) => {

        promises.forEach(promise => {
            promise.then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

Promise.myRace([fetchUserData(), fetchUserPosts()]).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})