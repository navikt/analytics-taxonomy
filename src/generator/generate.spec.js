const generate = require('./generate');
const getTempDir = require('../utils/get-temp-dir');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const tempDirForTest = getTempDir(['analytics-taxonomy', 'test-dist']);
beforeEach(() => {
  fs.rmdirSync(tempDirForTest, {recursive: true});
});

afterEach(() => {
  fs.rmdirSync(tempDirForTest, {recursive: true});
});
test('should generate files from events', async () => {
  generate(tempDirForTest);
  const files = glob.sync(path.join(tempDirForTest, '**'));
  expect(files.length).toBeGreaterThan(4);
});
