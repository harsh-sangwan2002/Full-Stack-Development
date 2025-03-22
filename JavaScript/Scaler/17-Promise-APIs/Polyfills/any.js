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

Promise.myAny = function (promises) {

    return new Promise((resolve, reject) => {

        let counter = 0;
        promises.forEach(promise => {
            promise.then((data) => {
                resolve(data);
            }).catch((err) => {
                counter++;
                if (counter === promises.length) {
                    reject("All promises rejected");
                }
            })
        })
    })
}

Promise.myAny([fetchUserData(), fetchUserPosts()]).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})