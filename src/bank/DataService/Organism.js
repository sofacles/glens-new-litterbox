
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
        debugger;
      // By default an organism doesn't really have a speed, so in this class this is a NOOP.
      // If I just instantiate a Shrew and a Junco, I never get into this base class move method.
    }

    reportPositionAtT(t) {
        for(let i = 0; i< t; i++) {
            this.move();
        }
        return this.position;
    }
}