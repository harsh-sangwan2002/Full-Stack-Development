// Why use call, apply, bind - borrow a feature
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

// Borrow the methods only once with defined number of params
// equivalent to ironMan.petersTeam("Peter","Natasha","Mahesh");
cap.petersTeam.call(ironMan, "Peter", "Natasha", "Mahesh");

/**************** Apply: 
 * Borrow the method only once with n number of params *****************/
let memberArray = ["Thor", "Loki", "Natasha", "Sanket", "Mahesh"];
cap.petersTeam.apply(ironMan, memberArray);

const boundFn = cap.petersTeam.bind(ironMan);
boundFn("cap", "war machine", "winter soldier");

// Guess the answer -----------
var name = "Steve";
var team = "Peter";
cap.petersTeam.call();