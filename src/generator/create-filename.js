const path = require('path');
const rewrite = require("../utils/rewrite-name");
module.exports = (eventName, dirName) => {
  const fileName = rewrite(eventName).fileName + '.ts';
  return path.join(dirName, fileName);
};
