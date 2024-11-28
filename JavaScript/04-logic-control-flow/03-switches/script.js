const d = new Date(2024,1,10,8,0,0);
const hour = d.getHours();
const month = d.getMonth();

switch(month){

    case 1:
        console.log("It's January");
        break;

    case 2:
        console.log("It's February");
        break;

    case 3:
        console.log("It's March");
        break;
    
    default:
        console.log("It's neither January, February or March");
}

switch(true){

    case hour<12:
        console.log('Good Morning');
        break;
    
    case hour<10:
        console.log('Good Afternoon');

    default:
        console.log('Good Night');
}