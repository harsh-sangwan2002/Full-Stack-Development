const socials = ["LinkedIn",'Twitter','Facebook','Instagram'];

socials.forEach(function(item){
    console.log(item);
})

socials.forEach((item,idx,arr)=>console.log(`${idx} - ${item}`,arr));

socials.forEach(item=>console.log(item));

function logSocial(social){
    console.log(social);
}
socials.forEach(logSocial);

const socialsObj = [
    {name:"Twitter",url:"https://www.twitter.com"},
    {name:"LinkedIn",url:"https://www.linkedin.com"},
    {name:"Instagram",url:"https://www.instagram.com"},
    {name:"Facebook",url:"https://www.facebook.com"},
]
socialsObj.forEach(item=>console.log(item));