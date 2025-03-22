const toss = new Promise((resolve, reject) => {
    const isHead = Math.random() > 0.5;

    if (isHead)
        resolve("It's head");

    else
        reject("It's tail");
})

async function doFlipES5() {
    console.log('A');

    toss.then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

    console.log('B');
}

async function doFlipES6() {

    console.log('A');

    try {
        const result = await toss;
        console.log(result);
    } catch (err) {
        console.log(err);
    }

    console.log('B');
}

doFlipES5();
doFlipES6();