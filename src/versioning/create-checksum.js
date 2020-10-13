const crypto = require('crypto');
module.exports = content => {
  const jsonString = JSON.stringify(content);
  const fullHash = crypto.createHash('sha256').update(jsonString).digest('base64');
  return fullHash.substr(0, 7);
};
