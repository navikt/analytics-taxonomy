const rootDir = require("./root-dir")
const fs = require("fs");

test('should find event files', async () => {
  const testPath1 = rootDir("package.json");
  expect(fs.existsSync(testPath1)).toBeTruthy();
  const testPath2 = rootDir("README.md");
  expect(fs.existsSync(testPath2)).toBeTruthy();
})
