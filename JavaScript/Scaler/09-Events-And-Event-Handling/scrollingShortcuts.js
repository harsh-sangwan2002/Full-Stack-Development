const section1 = document.querySelector('#s1');
const section2 = document.querySelector('#s2');
const section3 = document.querySelector('#s3');

document.addEventListener('keypress', (e) => {

  if (e.key == "1")
    section1.scrollIntoView();

  else if (e.key == "2")
    section2.scrollIntoView();

  else if (e.key == "3")
    section3.scrollIntoView();

  else if (e.key == "t")
    window.scrollTo(0, 0);

  else if (e.key == "b")
    window.scrollTo(0, document.body.scrollHeight);
})