const os = require("os");
const sessionTmpDir = os.tmpdir();
const path = require("path");

module.exports = (folders) => {
  const foldersClone = [...folders];
  foldersClone.unshift(sessionTmpDir);
  return foldersClone.join(path.sep);
};
