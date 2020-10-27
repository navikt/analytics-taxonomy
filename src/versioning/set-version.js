/**
 * @typedef {import('@types/npm')} npm
 */
/**
 * @type {npm}
 */
const npm = require('global-npm');

/**
 *
 * @param packageName
 * @return {Promise<string>}
 */
module.exports = async (version) => {
  return new Promise((resolve, reject) => {
    npm.commands.version([version],resolve)
  });
}
