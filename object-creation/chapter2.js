// this and bind example

/* 
//CASE 1:

function talk() {
    console.log(this); //in this case, this refers to global object, window.
}

talk();
*/

/*
//CASE 2:

function talk() {
    console.log(this.sound);
}
let boromir = {
    sound: 'One does not simply walk into mordor'
}

let talkBoundToBoromir = talk.bind(boromir);
talkBoundToBoromir(); // One does not simply walk into mordor
talk(); // undefined
*/

/*
//CASE 3:

let talk = function () {
    console.log(this.sound);
}
let boromir = {
    speak: talk, // we assign the talk function to the property speak of boromir
    sound: 'One does not simply walk into mordor'
}
boromir.speak(); // using 'this' from boromir reference
talk(); // using 'this' from global object window

let blabber = boromir.speak;
blabber(); // undefined, still referencing to the same function
*/

/*
//CASE 4:

let talk = function () {
    console.log(this.sound);
}
let boromir = {
    sound: 'One does not simply walk into mordor'
}

boromir.speak = talk.bind(boromir); // if you comment out '.bind(boromir)' out, blabber() will be undefined
let blabber = boromir.speak; 
blabber(); // One does not simply walk into mordor
talk(); // undefined, as the above code did not modify talk function.
*/

/*
//CASE 5
//DO NOT DO THIS!!!
let talk = function () {
    console.log(this.sound);
}
let boromir = {
    blabber: talk,
    sound: 'One does not simply walk into mordor'
}
let gollum = {
    jabber: boromir.blabber,
    sound: 'My preciousss...'
}

gollum.jabber();
*/