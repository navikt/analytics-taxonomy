const fs = require('fs');

module.exports = filename => {
  const content = fs.readFileSync(filename, 'utf-8');
  const contentJson = JSON.parse(content);
  return {
    name: contentJson.name,
    properties: contentJson.properties,
  };
};
