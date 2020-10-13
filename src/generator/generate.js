const createFilename = require('./create-filename');
const generateFunction = require('./generate-function');
const generateIndex = require('./generate-index');
const generateSignature = require('./generate-signature');
const findLibSrcFiles = require('../utils/find-lib-src-files');
const createEventMap = require('../utils/create-event-map');
const targetFiles = require('../target-files.json');
const getProjectDefinitions = require("../definitions/get-project-definitions");
const fs = require('fs');
const path = require('path');

/**
 *
 * @param targetDir
 * @returns {Map<string, string>}
 */
module.exports = targetDir => {
  const definitions = getProjectDefinitions();
  const filesMap = new Map();

  definitions.forEach(def => filesMap.set(
      createFilename(def.eventName, path.join(targetDir, targetFiles.EVENTS_FOLDER)),
      generateFunction(def.eventName, def.eventProps),
  ));

  findLibSrcFiles().forEach(filepath => filesMap.set(
      path.join(targetDir, path.basename(filepath)),
      fs.readFileSync(filepath, 'utf-8'),
  ));

  filesMap.set(
      path.join(targetDir, targetFiles.INDEX_TS),
      generateIndex(createEventMap(definitions, targetFiles.EVENTS_FOLDER)),
  );

  filesMap.set(
      path.join(targetDir, targetFiles.SIGNATURE_TXT),
      generateSignature(definitions).compact(),
  );

  return filesMap;
};
