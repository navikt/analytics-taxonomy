const fs = require('fs');
const expandSignature = require('../versioning/expand-signature');
module.exports = filepath => {
  const content = fs.readFileSync(filepath, 'utf-8');
  return expandSignature(content);
}
