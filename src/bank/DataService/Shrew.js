import Organism from "./Organism";

// Shrew
export default class Shrew extends Organism {
  
    //  a shrew moves one meter a second
    move() {
        this.position++;
    }
}