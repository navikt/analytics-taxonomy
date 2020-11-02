const semver = require('semver');
const getProjectDefinitions = require('../definitions/get-project-definitions');
const generateSignature = require('../generator/generate-signature');
const expandSignature = require('../versioning/expand-signature');
const compareSignature = require('../versioning/compare-signatures');
const getChangeFromCommitMessage = require('../versioning/get-change-from-commit-message');
const getPubPackageData = require('../versioning/get-published-package-data');
const setVersion = require('../versioning/set-version');
const status = require('../versioning/status');

const bumpVersion = async (commitMessage) => {
  const pubPackData = await getPubPackageData('dist/signature.txt');
  let change = getChangeFromCommitMessage(commitMessage);
  if (change === status.NOCHANGE) {
    // No change found in commit message, check signatures
    const currentSignature = generateSignature(getProjectDefinitions());
    const oldSignatureMap = expandSignature(pubPackData.signatures);
    change = compareSignature(currentSignature.list(), oldSignatureMap);
  }
  const newVersion = semver.inc(pubPackData.version, change.toLowerCase());
  if (newVersion) {
    await setVersion(newVersion);
    return newVersion;
  } else {
    return false;
  }
};

bumpVersion(process.env.COMMIT_MESSAGE).then((newVersion) => {
  const message = newVersion ?
      'Version is going to bumped to ' + newVersion :
      'Not changed';
  console.info("VersionBumper: ",message);
  process.exit(0);
});

