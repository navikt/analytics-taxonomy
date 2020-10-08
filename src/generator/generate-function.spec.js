const generate = require('./generate-function');
const transpileModule = require("typescript").transpileModule;

test('should generate function', async () => {
  const fileContent = generate('Skjema åpnet', [
    'skjemaId',
    'skjemaNavn',
    'ytelse',
    'context',
    'component',
  ]);
  console.log(fileContent);
  const transpiled = transpileModule(fileContent,{});
  expect(transpiled.outputText.length).toBeGreaterThan(25);
});
