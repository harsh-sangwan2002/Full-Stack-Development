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

Promise.myAll = function (promises) {

    return new Promise((resolve, reject) => {

        let results = [], counter = 0;
        promises.forEach((promise, idx) => {
            promise.then((data) => {
                results[idx] = data;
                counter++;
                if (counter === promises.length) {
                    resolve(results);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

Promise.myAll([fetchUserData(), fetchUserPosts()]).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})