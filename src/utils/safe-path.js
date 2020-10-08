const os = require('os');
const sessionTmpDir = os.tmpdir();
const rootDir = require('../utils/root-dir');
module.exports = filepath => {
  if (filepath.startsWith(rootDir())) {
    return true;
  } else if (filepath.startsWith(sessionTmpDir)) {
    return true;
  } else {
    return false;
  }
};
