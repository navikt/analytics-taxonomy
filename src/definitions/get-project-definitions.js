const findEventFiles = require("../utils/find-event-files");
const readDefinitionFile = require("./read-definition-file");
const filenames = require("../source-files");
module.exports = ()=> {
  const definitions = []
  findEventFiles(filenames.DEFINITION_JSON).forEach(fp => definitions.push(readDefinitionFile(fp)));
  return definitions;
}
