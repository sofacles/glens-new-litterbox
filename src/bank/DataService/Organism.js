
// I am trying to have some inheritance and maybe polymorphism too.  Organism will be the basest class.  It will track a secondsElapsed variable
// and in its position function it will report its displacement: how far it has moved since time zero.  All the animals can be assumed to move in the
// same direction.
export default class Organism {
    constructor() {
     
        this.secondsElapsed = 0;
        this.position = 0;
        //setInterval(this.move, 1000);
    }
    move() {
      // By default an organism doesn't really have a speed, so in this class this is a NOOP.
    }

    reportPositionAtT(t) {
        for(let i = 0; i< t; t++) {
            this.move();
        }
        return this.position;
    }
}