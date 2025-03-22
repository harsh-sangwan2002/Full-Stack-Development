let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
}

ladder.up() // 1
ladder.up() // 2
ladder.down() // 1
ladder.showStep() // 1

ladder.up().up().up().showStep().down().up().up().showStep();