const ts = require('typescript');
const resultFile = ts.createSourceFile(
    'someFileName.ts',
    '', ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
);
const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});
module.exports = node => printer.printNode(
    ts.EmitHint.Unspecified,
    node,
    resultFile,
);
