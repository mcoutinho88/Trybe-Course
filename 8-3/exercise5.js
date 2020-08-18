    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acc, item) => item.toLowerCase().split('')
  .reduce((acc2, letter) => letter.includes('a') ? acc2 + 1 : acc2, 0) + acc, 0);
}

assert.deepEqual(containsA(), 20);