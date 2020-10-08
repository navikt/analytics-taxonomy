const createFilename = require('./create-filename');
const generateFunction = require('./generate-function');
const generateIndex = require('./generate-index');
const findEventFiles = require('../utils/find-event-files');
const findLibSrcFiles = require('../utils/find-lib-src-files');
const createEventMap = require('../utils/create-event-map');
const constants = require('../filenames.json');
const readDefinitionFile = require('../utils/read-definition-file');
const fs = require('fs');
const path = require('path');

/**
 *
 * @param targetDir
 * @returns {Map<string, string>}
 */
module.exports = targetDir => {
  const eventsFolder = 'events';
  const definitions = [];
  const filesMap = new Map();
  findEventFiles(constants.DEFINITION_JSON).forEach(fp => definitions.push(readDefinitionFile(fp)));
  definitions.forEach(def => filesMap.set(
      createFilename(def.eventName, path.join(targetDir, eventsFolder)),
      generateFunction(def.eventName, def.eventProps),
  ));
  filesMap.set(
      path.join(targetDir, 'index.ts'),
      generateIndex(createEventMap(definitions, eventsFolder)),
  );
  findLibSrcFiles().forEach(filepath => filesMap.set(
      path.join(targetDir, path.basename(filepath)),
      fs.readFileSync(filepath, 'utf-8'),
  ));
  return filesMap;
};
