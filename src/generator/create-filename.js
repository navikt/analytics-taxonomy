const path = require('path');

module.exports = (eventName, dirName) => {
  const fname = eventName.toLowerCase().replace(" ","-");
  const fileName = fname + '.ts';
  return path.join(dirName, fileName);
};
