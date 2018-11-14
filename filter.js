//You can assign function to a new variable
var triple = function(x) {
    return x * 3;
}

var waffle = triple

console.log(waffle(30))

//Functional Programming is good for composition

/****
Filter
****/
var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Binge', species: 'dog'},
    { name: 'Hamilton', species: 'cat'},
    { name: 'Jimmy', species: 'fish'}
]

/*
//for loop way
var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i]);
    }
}
*/
// var dogs = animals.filter(function(animal) {
//     return animal.species === 'dog';
// })

//Composable
// var isDog = function(animal) {
//     return animal.species === 'dog';
// }

var isDog = animal => animal.species === 'dog'


var dogs = animals.filter(isDog);
// var otherAnimals = animals.reject(isDog);

console.log(dogs);
