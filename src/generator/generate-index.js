const ts = require('typescript');
const factory = require('typescript').factory;
const printNode = require('./print-node');

function createImportDeclaration(path, funcNames) {
  const importSpecifiers = funcNames.map(funcName => factory.createImportSpecifier(
      undefined,
      factory.createIdentifier(funcName),
  ));
  return factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
          undefined,
          undefined,
          factory.createNamedImports(importSpecifiers),
      ),
      factory.createStringLiteral(path),
  );
}

function createExportDeclaration(funcNames) {
  const exportSpecifiers = funcNames.map(funcName => factory.createExportSpecifier(
      undefined,
      factory.createIdentifier(funcName),
      ),
  );
  return factory.createExportDeclaration(
      undefined,
      undefined,
      undefined,
      factory.createNamedExports(exportSpecifiers),
      undefined,
  );
}

/**
 *
 * @param eventMap {Map}
 * @returns {string}
 */
module.exports = eventMap => {
  const coreFuncNames = [
    'initTaxonomy',
    'initTaxonomyWithGroup',
  ];

  /**
   * @type array
   */
  const lines = [
    createImportDeclaration(
        './core',
        coreFuncNames,
    ),
  ];
  const allFuncNames = [...coreFuncNames];
  eventMap.forEach((funcName, path) => {
    lines.push(createImportDeclaration(path, [funcName]));
    allFuncNames.push(funcName);
  });
  lines.push(createExportDeclaration(allFuncNames));

  return lines.map(node => printNode(node)).join('\n');
};
