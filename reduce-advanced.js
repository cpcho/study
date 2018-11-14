/*https://youtu.be/1DMolJ2FrNY*/

// import fs from 'fs'
var fs = require('fs')

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})


console.log('output', JSON.stringify(output, null, 2))

/****************************************/
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]


let sum = data.reduce((total, amount) => {
    return amount.country === 'China' ? total : total + amount.pop;
}, 0)

console.log(sum)