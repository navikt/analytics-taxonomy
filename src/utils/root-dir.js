const path = require('path');
module.exports = segment => path.join(__dirname, '..', '..', segment ? segment : '');
