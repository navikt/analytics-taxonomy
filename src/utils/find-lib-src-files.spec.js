const findLibSrcFiles = require("./find-lib-src-files")

test('should find event files', async () => {
  const files = findLibSrcFiles();
  expect(files.length).toBeGreaterThan(0);
})
