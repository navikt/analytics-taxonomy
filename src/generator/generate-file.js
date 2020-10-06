const createFilename = require('./create-filename');
const generateFunction = require('./generate-function');
const fs = require('fs');


module.exports = (eventName, eventProps, dirName) => {
  const content = generateFunction(eventName, eventProps);
  const filePath = createFilename(eventName, dirName);
  return fs.writeFileSync(filePath, content, 'utf8');
};
