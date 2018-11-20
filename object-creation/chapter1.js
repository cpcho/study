//this and bind

let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}

// dog.talk(); // "woof"
let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);
boundFunction() // undefined

let button = document.getElementById('myNiceButton');

button.addEventListener(
    'click', 
    dog.talk.bind(dog) //.bind(dog) will connect dog.talk to the origin.
);