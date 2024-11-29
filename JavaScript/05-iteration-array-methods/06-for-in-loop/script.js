const colorlObj = {
    color1:'red',
    color2:'blue',
    color3:'green',
    color4:'orange',
}
for(const key in colorlObj){
    console.log(key+": ",colorlObj[key]);
}

const colorArr = ['red','blue','green','orange'];
for(let color in colorArr){
    console.log(color+": ",colorArr[color]);
}