const path = require('path');
/**
 *
 * @returns {*}
 * @param string[]
 */
module.exports = filepaths => {
  return filepaths.map(filepath => path.dirname(filepath)).
      filter((value, index, self) => self.indexOf(value) === index);
};
