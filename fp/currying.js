import _ from 'lodash';
/*
// let dragon =
//     name =>
//         size =>
//             element =>
//                 name + ' is a ' + 
//                 size + ' dragon that breathes ' + 
//                 element + '!'

// console.log(dragon('fluffy')('tiny')('lightning'));       



let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'
    
dragon = _.curry(dragon)

let fluffy = dragon('fluffy')
let tinyDragon = fluffy('tiny')
console.log(tinyDragon('lightning'))
*/

let dragons = [
    { name : 'fluffykins', char: 'lightning'},
    { name : 'noomi', char: 'lightning'},
    { name : 'karo', char: 'fire'},
    { name : 'doomer', char: 'timewarp'},
]

let hasChar = (char, obj) => obj.char === char;

let lightningDragons = 
    dragons.filter(x => hasChar('lightning', x));

console.log(lightningDragons);