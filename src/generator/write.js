const fs = require('fs');

const generate = require('./generate');
const uniqueFolders = require('../utils/unique-folders');
const safePath = require('../utils/safe-path');
/**
 * @todo this function will do the actual writing to disk. So we split generating and writting.
 * Need check if we are in right folder. Using the root folder check.
 * @param fileMap
 */
module.exports = targetDir => {
  const fileMap = generate(targetDir);
  const paths = Array.from(fileMap.keys());
  const folders = uniqueFolders(paths);
  folders.forEach(folder=>{
    if(!safePath(folder)){
      console.error("something is weird, ", folder, "is not in the project directory or temp folders");
      process.exit(42);
    }
  })
  folders.forEach(folder=>{
    fs.rmdirSync(folder, {recursive: true});
  });
  folders.forEach(folder=>{
    fs.mkdirSync(folder, {recursive: true});
  });
  fileMap.forEach((content, filePath) => {
    fs.writeFileSync(filePath, content, 'utf8');
  })
};
