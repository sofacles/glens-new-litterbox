export interface IMakeSound {
    makeSound: () => void;
}

let Heron = {
    makeSound () {
        console.log("GROK");
    }
} as IMakeSound;

let HouseCat = {
    makeSound () {
        console.log("mrow");
    }
} as IMakeSound;

class Owl implements IMakeSound {
 makeSound() {
        console.log("Hoot")
    }
}

let Fern = {
    photosynthesize: () => {console.log("emitting CO2")}
}

class Animal {
    makeSound() {
        console.log("generic animal sound")
    }
}

class Sheep {
    makeSound() {
        console.log("Baaah");
    }
}

class Swine implements Animal {
    makeSound() {
        console.log("Oink");
    }
}

export { Fern, Heron, HouseCat, Owl, Animal, Sheep, Swine}