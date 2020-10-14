/**
 * @typedef {import('@types/npm')} npm
 */
/**
 * @type {npm}
 */
const npm = require('global-npm');
const fs = require('fs');
const tar = require('tar');
const rootDir = require('../utils/root-dir');
const glob = require('glob');
const safePath = require('../utils/safe-path');
const fileAge = require('./fetch').fileAge;
/**
 *
 * @param packageName
 * @return {Promise<string>}
 */
module.exports = async (packageName) => {
  const targetDir = rootDir('tmp/' + packageName);
  return new Promise((resolve, reject) => {
    // For testing purposes we just reuse the downloaded lib
    if (fs.existsSync(targetDir) && fileAge(targetDir) < (60 * 60)) {
      return resolve(targetDir);
    }
    npm.load({
      loaded: true,
    }, () => {
      npm.commands.pack([packageName], (err) => {
        if (err) reject(err);
        const files = glob.sync(rootDir('*.tgz'));
        fs.mkdirSync(targetDir, {recursive: true});
        fs.createReadStream(files[0]).pipe(
            tar.x({
              strip: 1,
              C: targetDir,
            }),
        ).on('close', () => {
          files.forEach(filepath => {
            if (safePath(filepath)) {
              fs.rmdirSync(filepath, {recursive: true});
            }
          });
          return resolve(targetDir);
        }).on('error', (err) => {
          return reject(err);
        });
      });
    });
  });
};

