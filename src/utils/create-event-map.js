const rewriteName = require('./rewrite-name');
/**
 *
 * @param definitions
 * @param eventsFolder
 * @returns {Map<string, string>}
 */
module.exports = (definitions, eventsFolder) => {
  const eventMap = new Map();
  definitions.forEach(def => {
    const names = rewriteName(def.eventName);
    const path = ['.', eventsFolder, names.fileName].join("/");
    eventMap.set(path, names.functionName);
  });
  return eventMap;
};
