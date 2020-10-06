const generateFile = require('./generate-file');
const findEventFiles = require('../utils/find-event-files');
const findLibSrcFiles = require('../utils/find-lib-src-files');
const constants = require('../filenames.json');
const readDefinitionFile = require('../utils/read-definition-file');
const fs = require('fs');
const path = require('path');

module.exports = targetDir => {
  const eventsDir = path.join(targetDir, 'events');
  fs.rmdirSync(targetDir, {recursive: true});
  fs.mkdirSync(eventsDir, {recursive: true});
  findEventFiles(constants.DEFINITION_JSON).forEach(filepath => {
    const definition = readDefinitionFile(filepath);
    generateFile(definition.name, definition.properties, eventsDir);
  });
  findLibSrcFiles().forEach(filepath => {
    const targetFile = path.basename(filepath);
    fs.copyFileSync(filepath, path.join(targetDir, targetFile));
  });
};
