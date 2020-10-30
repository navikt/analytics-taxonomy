const status = require('./status');

/**
 *
 * @param commitMessage
 */
function getChangeFromCommitMessage(commitMessage) {
  let change = status.NOCHANGE;
  if (typeof commitMessage == 'string') {
    Object.keys(status).forEach(key => {
      if (commitMessage.includes('[' + key.toUpperCase() + ']') ||
          commitMessage.includes('[' + key.toLowerCase() + ']')
      ) {
        change = status[key];
      }
    });
  }
  return change;
};

module.exports = getChangeFromCommitMessage;
