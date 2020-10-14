const rootDir = require('../utils/root-dir');
const getPackageJson = require('../utils/get-package-json');
const downloadPublishedPackage = require('./download-published-package');
const fs = require('fs');
const path = require('path');
module.exports = async (signatureSegment) => {
  const localPackageJson = getPackageJson(rootDir());
  const pubDownloadedDir = await downloadPublishedPackage(localPackageJson.name);
  const pubPackageJson = getPackageJson(pubDownloadedDir);
  const signatures = fs.readFileSync(path.join(pubDownloadedDir, signatureSegment), 'utf-8');
  return {
    version: pubPackageJson.version,
    signatures,
  };
};
