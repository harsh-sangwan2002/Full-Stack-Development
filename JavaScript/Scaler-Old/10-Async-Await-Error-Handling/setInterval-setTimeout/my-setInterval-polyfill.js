/****************
 * Create polyfill of setInterval with the help setTimeout
 * 1.setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2.clearInterval  : simple fn that recives and object and it changes it's prop to false.
 * **************/

function mySetInterval(cb,delay){

    let obj = {
        flag:true,
    }

    function helper(){
        if(obj.flag){
            cb();
            setTimeout(helper,delay);
        }
    }

    setTimeout(helper,delay);
    return obj;
}

function myClearInterval(obj) {
    obj.flag = false;
}


/******************* Use Case ***************/
function cb() {
    console.log("I will be called on every interval.");
}

function clearCb() {
    console.log("Cancelling the cb.");
    myClearInterval(timer);
}

const timer = mySetInterval(cb, 1000);
setTimeout(clearCb, 5000);