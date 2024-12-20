let cap = {
    name: "Steve",
    lastName: "Rogers",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's spiderman and I belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1}, ${mem2} and ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

// cap.petersTeam.call(ironMan, "Peter", "Natasha", "Mahesh");

/************************** Polyfill of call method **************************/
Function.prototype.myCall = function (reqObj, ...args) {

    // Get your function
    let functionToBeInvoked = this;

    // Copy your function in the object
    reqObj.tempFn = functionToBeInvoked;

    // Call the required function
    reqObj.tempFn(...args);

    // Delete the temp function
    delete reqObj.tempFn;
};

// cap.petersTeam.myCall(ironMan, "Peter", "Natasha", "Mahesh");

/************************** Polyfill of apply method **************************/
// cap.petersTeam.apply(ironMan, ["Peter", "Natasha", "Mahesh"]);

Function.prototype.myApply = function (reqObj, args) {

    // Get your function
    let functionToBeInvoked = this;

    // Copy your function in the object
    reqObj.tempFn = functionToBeInvoked;

    // Call the required function
    reqObj.tempFn(...args);

    // Delete the temp function
    delete reqObj.tempFn;
};

// cap.petersTeam.myApply(ironMan, ["Peter", "Natasha", "Mahesh"]);

/************************** Polyfill of bind method **************************/
const boundFn = cap.petersTeam.bind(ironMan, "Peter", "Natasha");
boundFn("Mahesh");

Function.prototype.myBind = function (reqObj,...args) {

    // Get your function
    let functionToBeInvoked = this;

    // Return the function
    return function(...args2){
        functionToBeInvoked.call(reqObj,...args,...args2);
    }
};

const bindFn = cap.petersTeam.myBind(ironMan, "Peter", "Natasha");
bindFn("Mahesh");