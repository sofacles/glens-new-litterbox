import Organism from './Organism';
// Junco
export default class Junco extends Organism {
   
    //  a Junco moves four meters a second
    move() {
        this.position+= 4;
    }
}