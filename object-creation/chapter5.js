// __proto__ vs prototype

//__proto__: property of an object that points out to the protytpe that has been set out for that object
//prototype: property on a function that has set as a property if you are using the "new" keyword

// delegation - Object delegating to other object

let cat = {
    breed: 'munchkin'
}

let myCat = {
    name: 'Fluffykins'
}

Object.setPrototypeOf(myCat, cat);
console.log(myCat); // { name: 'Fluffykins'}
console.log(myCat.breed); // munchkin
console.log(myCat.__proto__); // { breed: 'munchkin' }

cat.tailLength = 15;
console.log(myCat.__proto__); // { breed: 'munchkin', tailLength: 15 }


function Dog() {
    
}

Dog.prototype.breed = "Bulldog";
let myDoggie = new Dog();
console.log(myDoggie.breed); // Bulldog

console.log(myDoggie.__proto__); //Dog { breed: 'Bulldog' }
console.log(myDoggie.prototype); // undefined

function Giraffe() {} 
console.log(Giraffe.prototype); // Giraffe {}

let koala = {};
console.log(koala.prototype); // undefined, no prototype available
console.log(koala.__proto__); // {} from global object
console.log(koala.__proto__ === Object.prototype); // true