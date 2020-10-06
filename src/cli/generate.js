const generate = require('../generator/generate');
const rootDir = require('../utils/root-dir');
const targetDir = rootDir('dist');
console.log('Starting to genereate files, target:', targetDir);
const result = generate(targetDir);
console.log(result);
