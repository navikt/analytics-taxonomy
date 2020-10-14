const semver = require("semver");

const newasd = semver.inc("0.1.1","nochange");

console.log(newasd);
