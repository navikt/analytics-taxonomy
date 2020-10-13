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
//const fetch = require('fetch');

module.exports = (pack) => {
  //const root;
  const targetDir = rootDir("tmp/" + pack);
  npm.load({
    json: true,
  }, () => {
    npm.commands.pack([pack], () => {
      const files = glob.sync(rootDir('*.tgz'));
      fs.mkdirSync(targetDir, {recursive: true});
      fs.createReadStream(files[0]).pipe(
          tar.x({
            strip: 1,
            C: targetDir
          }),
      );
    });

  });
  //await fetch.fetch("")
  //return root;
};

