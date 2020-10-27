const os = require('os');
const rules = require("./rules");
/**
 * @return {Map}
 */
module.exports = (compacted) => {
  const signatureMap = new Map();
  compacted.trim().split(os.EOL).forEach(line => {
    const rule = parseInt(line.slice(-1));
    if (Object.values(rules).includes(rule)) {
      signatureMap.set(line.substr(0, 7), rule);
    } else {
      throw Error('Can\'t expand compacted signature, rule doesn\'t exist');
    }
  });
  return signatureMap;
};
