//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// review of filter, map, and reduce

const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
]

const totalDamageOnDorkman = dragonEvents
    .filter(e => e.type === 'attack')
    .filter(e => e.target === 'player-dorkman')
    .map(e => e.value)
    .reduce((prev, value) => (prev || 0) + value)
    
console.log('totalDamageOnDorkman\n', totalDamageOnDorkman); //24