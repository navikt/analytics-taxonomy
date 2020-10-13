const getProjectDefinitions = require('../definitions/get-project-definitions');
const generateSignature = require('../generator/generate-signature');
const readSignatureFile = require('../versioning/read-signature-file');
const compareSignature = require('../versioning/compare-signatures');
const rules = require("../versioning/rules");
const rootDir = require('../utils/root-dir');
const filenames = require('../target-files');
const path = require('path');
const oldSignaturePath = path.join(rootDir('dist'), filenames.SIGNATURE_TXT);
const currentSignature = generateSignature(getProjectDefinitions());
const oldSignatureMap = readSignatureFile(oldSignaturePath);
const change = compareSignature(currentSignature.list(), oldSignatureMap);

console.log(change);
