const getPackageJson = require('../utils/get-package-json');
const rootDir = require('../utils/root-dir');
const downloadPubPack = require('../versioning/download-published-package');

const downloadDist = async () => {
  const localPackageJson = getPackageJson(rootDir());
  await downloadPubPack(localPackageJson.name);
};


downloadDist().then(()=>{
  console.log("Done downloading latest package.");
  process.exit(0);
})
