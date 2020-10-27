const ts = require('typescript');
const factory = require('typescript').factory;
const printNode = require('./print-node');
const rewriteName = require('../definitions/rewrite-name');

function createProperty(propName) {
  return factory.createPropertySignature(
      undefined,
      factory.createIdentifier(propName),
      factory.createToken(ts.SyntaxKind.QuestionToken),
      factory.createUnionTypeNode([
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
        factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
      ]),
  );
}

function createInterface(interfaceName, interfaceProps) {
  return factory.createInterfaceDeclaration(
      undefined,
      undefined,
      factory.createIdentifier(interfaceName),
      undefined,
      undefined,
      interfaceProps.map((prop) => createProperty(prop)),
  );
}

function createFunction(eventName) {
  const names = rewriteName(eventName);

  return factory.createFunctionDeclaration(
      undefined,
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(names.functionName),
      undefined,
      [
        factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            factory.createIdentifier('props'),
            undefined,
            factory.createTypeReferenceNode(
                factory.createUnionTypeNode([
                  factory.createIdentifier(names.interfaceName),
                  ts.createTypeLiteralNode([ts.createIndexSignature(
                    undefined,
                    undefined,
                    [ts.createParameter(
                      undefined,
                      undefined,
                      undefined,
                      ts.createIdentifier('key'),
                      undefined,
                      ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                      undefined
                    )],
                    ts.createUnionTypeNode([
                      ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                      ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                      ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
                    ])
                  )])
                ]),
                undefined,
            ),
            undefined,
        ),
      ],
      factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
      factory.createBlock(
          [
            factory.createReturnStatement(
                factory.createCallExpression(factory.createIdentifier('core.logEvent'), undefined, [
                  factory.createStringLiteral(eventName),
                  factory.createIdentifier('props'),
                ]),
            ),
          ],
          true,
      ),
  );
}

module.exports = (eventName, eventProps) => {
  const names = rewriteName(eventName);
  return [
    'import core from \'../core\'',
    '',
    printNode(createInterface(names.interfaceName, eventProps)),
    '',
    '/** @internal */',
    printNode(createFunction(eventName)),
  ].join('\n');
};
