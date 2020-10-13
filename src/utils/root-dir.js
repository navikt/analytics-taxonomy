const path = require('path');

/**
 * Getting the project root directory. Allows for adding one segment for convinience.
 *
 * @param segment
 * @return {string}
 */
module.exports = segment => path.join(__dirname, '..', '..', segment ? segment : '');
