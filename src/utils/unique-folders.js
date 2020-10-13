const path = require('path');
/**
 * Takes a bounch of filepaths and return the unique folders that is
 * needed to create the directory strukture.
 *
 * @returns {*}
 * @param string[]
 */
module.exports = filepaths => {
  return filepaths.map(filepath => path.dirname(filepath)).
      filter((value, index, self) => self.indexOf(value) === index);
};
