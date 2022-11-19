import { Fern, HouseCat, Heron, IMakeSound, Owl, Animal, Sheep, Swine} from "./Animals";
import React from 'react';

const Driver = () => {
 const animals = new Array<IMakeSound>;
 animals.push(Heron);
 animals.push(HouseCat);
 animals.push(new Owl());
 // animals.push(Fern)

 for(let i = 0; i < animals.length; i++){
    //OK this is a kind of polymorphism
    animals[i].makeSound();
 }

 const classyAnimals = new Array<Animal>();
 classyAnimals.push(new Sheep());
 classyAnimals.push(new Swine());

 for(let j = 0; j < classyAnimals.length; j++) {
    classyAnimals[j].makeSound();
 }
 return <div>Driver</div>


}

export default Driver;