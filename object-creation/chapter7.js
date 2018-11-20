// class keyword
// class keyword is actually a function, syntactic sugar
// class is a thin layer over inheritance in Javascript

class Mammal {
    constructor(sound) {
        this._sound = sound;
    }
    
    talk() {
        return this._sound
    }
}

class Dog extends Mammal {
    constructor() {
        super('wofowofeow'); //super() will call the constructor of Mammal
    }
}

let fluffykins = new Mammal('woof!');
let x = fluffykins.talk();
console.log(x);

let petpetcutcher = new Dog();
petpetcutcher._sound = 'meow';
let y = Dog.prototype.talk.bind({
    _sound: 'ROAR'
});

console.log(y);