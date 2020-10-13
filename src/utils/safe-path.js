const os = require('os');
const sessionTmpDir = os.tmpdir();
const rootDir = require('../utils/root-dir');

/**
 * Checks if a filepath is either in this project or in the system tempfolder.
 * Just to be alittle bit more safe from fat fingers.
 *
 * @param filepath
 * @return {boolean}
 */
module.exports = filepath => {
  if (filepath.startsWith(rootDir())) {
    return true;
  } else if (filepath.startsWith(sessionTmpDir)) {
    return true;
  } else {
    return false;
  }
};
