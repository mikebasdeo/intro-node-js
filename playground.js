const fs = require('fs');
console.log('hello');
const file = fs.readFileSync('./package.json', { encoding: 'utf-8' });
console.log(file);
