const generate = require('./generate');
const getTempDir = require('../utils/get-temp-dir');
const tempDirForTest = getTempDir(["analytics-taxonomy-test", "dist"]);

test('should generate files from events', async () => {
  const fileMap = generate(tempDirForTest);
  fileMap.forEach((content, filepath) => {
    expect(typeof filepath).toBe("string");
    expect(typeof content).toBe("string");
  });
  expect(fileMap.size).toBeGreaterThan(3);
});
