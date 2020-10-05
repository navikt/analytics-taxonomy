const ts = require('typescript');
const factory = require('typescript').factory;
const camelcase = require('camelcase');

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

function createFunction(eventName, interfaceName) {
  const functionName = camelcase(['log', eventName].join(' '));
  return factory.createFunctionDeclaration(
      undefined,
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(functionName),
      undefined,
      [
        factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            factory.createIdentifier('props'),
            undefined,
            factory.createTypeReferenceNode(
                factory.createIdentifier(interfaceName),
                undefined,
            ),
            undefined,
        ),
      ],
      factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
      factory.createBlock(
          [
            factory.createReturnStatement(
                factory.createCallExpression(factory.createIdentifier('logEvent'), undefined, [
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
  const interfaceName = camelcase(['log', eventName, 'Props'].join(' '));
  const nodes = [
    createInterface(interfaceName, eventProps),
    createFunction(eventName, interfaceName),
  ];
  const resultFile = ts.createSourceFile(
      'someFileName.ts',
      '', ts.ScriptTarget.Latest,
      /*setParentNodes*/ false,
      ts.ScriptKind.TS,
  );
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });
  return [
    'import {logEvent} from \'../core\'',
    printer.printNode(
        ts.EmitHint.Unspecified,
        nodes[0],
        resultFile,
    ), printer.printNode(
        ts.EmitHint.Unspecified,
        nodes[1],
        resultFile,
    )].join('\n\n');
};
