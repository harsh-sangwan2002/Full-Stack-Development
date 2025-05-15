const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: 'teacher',
    friends: ['Peter', 'Miachel', 'Steve'],
    hasDriverLicense: true,
    calcAge: function () {
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : "no"} driver's license`;
    }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());
console.log(jonas.getSummary())