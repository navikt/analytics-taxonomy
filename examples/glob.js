const glob = require("glob");
const path = require("path");
const pack = "@navikt/dekoratoren-webpack-plugin";
const pattern = path.join(__dirname,"..", '*.tgz')
console.log(pattern);
const files = glob.sync(pattern);
console.log(files);
