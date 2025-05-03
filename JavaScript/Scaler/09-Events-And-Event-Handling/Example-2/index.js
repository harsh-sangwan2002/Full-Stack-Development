document.addEventListener('keydown', (e) => {

    const section1 = document.querySelector('#s1');
    const section2 = document.querySelector('#s2');
    const section3 = document.querySelector('#s3');
    console.log(e.key);

    switch (e.key) {

        case "1":
            section1.scrollIntoView();
            break;


        case "2":
            section2.scrollIntoView();
            break;

        case "3":
            section3.scrollIntoView();
            break;

        case "t":
            window.scrollTo(0, 0);
            break;

        case "b":
            window.scrollTo(0, document.body.scrollHeight);
            break;
    }
})