//prototype

function talk() {
    console.log(this) // pointing to window, global object
    console.log(this.sound)
}

// talk() // undefined

let animal = {
    talk // same as 'talk: talk'
}

animal.talk(); // 'this' now points to animal function object

let cat = {
    sound: 'meow!'
}
//cat.talk(); // cat.talk is not a function
Object.setPrototypeOf(cat, animal); // set prototype of cat to be animal
cat.talk(); // meow!

let dog = {
    sound: 'woof!'
}
Object.setPrototypeOf(dog, animal);
dog.talk() // woof!

let prairieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase());
    }
}
Object.setPrototypeOf(prairieDog, dog);
prairieDog.howl(); // WOOF!

// modifying animal talk function
animal.talk = function() {
    console.log('i am a little teapot ' + this.sound);
}
dog.talk(); //i am a little teapot woof!

prairieDog.howl(); // WOOF!