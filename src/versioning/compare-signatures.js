const rules = require('./rules');
const status = require('./status');
/**
 * @param {Map} oldMap
 * @param {Map} newMap
 * @return string
 */
module.exports = function(oldMap, newMap) {
  const oldChecksums = [...oldMap.keys()];
  const newChecksums = [...newMap.keys()];
  const removedChecksums = oldChecksums.filter(x => !newChecksums.includes(x));
  const addedChecksums = newChecksums.filter(x => !oldChecksums.includes(x));
  const changedMap = new Map();
  removedChecksums.forEach(checksum => {
    changedMap.set(checksum, oldMap.get(checksum));
  });
  addedChecksums.forEach(checksum => {
    changedMap.set(checksum, rules.IF_CHANGED_PATCH);
  });
  const changesValues = Array.from(changedMap.values());
  if (changedMap.size === 0) {
    return status.NOCHANGE;
  } else if (changesValues.includes(rules.IF_CHANGED_MINOR)) {
    return status.MINOR;
  } else if (changesValues.includes(rules.IF_CHANGED_PATCH)) {
    return status.PATCH;
  }
};
