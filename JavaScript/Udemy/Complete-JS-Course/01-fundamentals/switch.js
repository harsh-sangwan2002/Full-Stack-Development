const day = 'wednesday';

switch (day) {

    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meet-up');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}