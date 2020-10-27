const semver = require('semver');
const getProjectDefinitions = require('../definitions/get-project-definitions');
const generateSignature = require('../generator/generate-signature');
const expandSignature = require('../versioning/expand-signature');
const compareSignature = require('../versioning/compare-signatures');
const getPubPackageData = require('../versioning/get-published-package-data');
const setVersion = require('../versioning/set-version');

const bumpVersion = async () => {
  const pubPackData = await getPubPackageData('dist/signature.txt');
  const currentSignature = generateSignature(getProjectDefinitions());
  const oldSignatureMap = expandSignature(pubPackData.signatures);
  const change = compareSignature(currentSignature.list(), oldSignatureMap);
  const newVersion = semver.inc(pubPackData.version, change.toLowerCase());
  if (newVersion) {
    await setVersion(newVersion);
    return newVersion;
  } else {
    return false;
  }
};

bumpVersion().then((newVersion) => {
  const message = newVersion ?
      'Version was bumped to ' + newVersion :
      'Not changed';
  console.info(message);
  process.exit(0);
});

