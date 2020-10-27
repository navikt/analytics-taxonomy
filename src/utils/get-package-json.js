const path = require('path');
const fs = require('fs');
module.exports = projectDir => {
  const packageJsonPath = path.join(projectDir, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(packageJsonPath + ' doesn\'t exists');
  }
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
  const packageJson = JSON.parse(packageJsonContent);
  return {
    version: packageJson.version,
    name: packageJson.name,
  };
};
