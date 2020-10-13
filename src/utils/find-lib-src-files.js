const glob = require('glob');
const rootDir = require('./root-dir');
module.exports = function() {
  const base = rootDir('src-lib');
  const pattern = base + '/*';
  return glob.sync(pattern, {});
};

