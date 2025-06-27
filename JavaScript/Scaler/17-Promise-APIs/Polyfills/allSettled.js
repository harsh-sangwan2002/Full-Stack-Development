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

Promise.myAllSettled = function (promises) {

    return new Promise((resolve, reject) => {

        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            promise.then((data) => {
                results[index] = { status: 'fulfilled', value: data };
            }).catch((err) => {
                results[index] = { status: 'rejected', reason: err };
            }).finally(() => {
                completed++;
                if (completed === promises.length) {
                    resolve(results);
                }
            });
        });
    })
}

// Gives results for all the promises whether promise is resolved or rejected
Promise.myAllSettled([fetchUserData(), fetchUserPosts()]).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})