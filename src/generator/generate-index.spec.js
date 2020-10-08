const generateIndex = require('./generate-index');
const transpileModule = require("typescript").transpileModule;

test('should generate index file', async () => {
  const eventMap = new Map();
  eventMap.set(".events/snu","logSnu");
  eventMap.set(".events/rygge","logRygge");
  const fileContent = generateIndex(eventMap);
  const transpiled = transpileModule(fileContent,{});
  expect(transpiled.outputText.length).toBeGreaterThan(25);
});
