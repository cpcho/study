// Object.create()
// https://youtu.be/CDFN1VatiJA
// creates a new object with the prototype set to a certain object

const cat = {
    // init: function(sound) {
    //   this.sound = sound
    // },
    makeSound: function() {
        console.log(this.sound);
    }
}
/*
const mark = Object.create(cat);
mark.sound = 'mewuuUUf';
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = 'mrrrrowow';
waffles.makeSound();

console.log('Is mark a cat?',
    cat.isPrototypeOf(mark));
*/

// how to use object.create

// create a objectCreate to mock object.create()
function objectCreate(proto) {
    const obj = {}; // creates a new object
    Object.setPrototypeOf(obj, proto); // set to a certain object
    return obj;
}

const mark = objectCreate(cat);
mark.sound = 'mewuuUUf';
mark.makeSound();

const waffles = objectCreate(cat);
waffles.sound = 'mrrrrowow';
waffles.makeSound();

console.log('Is mark a cat?',
    cat.isPrototypeOf(mark));

