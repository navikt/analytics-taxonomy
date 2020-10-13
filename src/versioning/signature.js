const rules = require('./rules');
const createChecksum = require('./create-checksum');
const os = require('os');

class Signature {
  constructor() {
    this.checksums = new Map();
  }

  add(what, rule) {
    const checksum = createChecksum(what);
    if (Object.values(rules).includes(rule)) {
      this.checksums.set(checksum, rule);
    } else {
      throw Error('Can\'t add to signature, rule doesn\'t exist');
    }
  }

  list() {
    return new Map([...this.checksums].sort());
  }

  compact() {
    const output = [];
    this.list().forEach((rule, checksum) => {
      output.push(`${checksum}${rule}`);
    });
    return output.join(os.EOL);
  }

}

module.exports = Signature;
