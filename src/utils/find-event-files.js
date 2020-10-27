const glob = require('glob');
const rootDir = require('./root-dir');
module.exports = function(filename) {
  const base = rootDir('events');
  const pattern = base + '/**/' + filename;
  return glob.sync(pattern, {});
};

