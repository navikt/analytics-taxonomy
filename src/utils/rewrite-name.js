const camelcase = require('camelcase');

module.exports = eventName => ({
  fileName: eventName.toLowerCase().replace(' ', '-'),
  interfaceName: camelcase(['log', eventName, 'Props'].join(' ')),
  functionName: camelcase(['log', eventName].join(' ')),
});
