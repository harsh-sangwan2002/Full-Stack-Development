let cap = {
    name: "Steve",
    team: "Cap",

    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  spiderman and I belong to ${this.team}'s team`);

        console.log(`I am working with ${mem1}, ${mem2} and ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}

cap.petersTeam("Black Panther","Winter Soldier","Thor");

// Borrow a function from another function
// This will use 'ironMan' object as 'this' and call peterTeam function on it.
cap.petersTeam.call(ironMan,"Iron Man","Winter Soldier","Rogers");
cap.petersTeam.apply(ironMan,["Iron Man","Winter Soldier","Rogers"]);

let stolenMethod = cap.petersTeam.bind(ironMan);
stolenMethod("Natasha","Antman","Rogers");