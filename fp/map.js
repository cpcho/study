var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Binge', species: 'dog'},
    { name: 'Hamilton', species: 'cat'},
    { name: 'Jimmy', species: 'fish'}
]

//for loop method
// var names = [];
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name);
// }

//using map can create a completely new object
// var names = animals.map(function(animal) {
//     return animal.name;
// })

//using map with arrow function
//omit return statement and curly braces
var names = animals.map((x) => x.name) 

console.log(names); ////[ 'Fluffykins', 'Caro', 'Binge', 'Hamilton', 'Jimmy' ]