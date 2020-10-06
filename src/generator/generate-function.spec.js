const generate = require('./generate-function');
const transpileModule = require("typescript").transpileModule;

test('should find event files', async () => {
  const fileContent = generate('Skjema åpnet', [
    'skjemaId',
    'skjemaNavn',
    'ytelse',
    'context',
    'component',
  ]);
  const transpiled = transpileModule(fileContent,{});
  expect(transpiled.outputText.length).toBeGreaterThan(25);
});
