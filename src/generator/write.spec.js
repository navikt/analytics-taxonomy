const write = require('./write');
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
  const filesBefore = glob.sync(path.join(tempDirForTest, '**'));
  expect(filesBefore.length).toBe(0);
  write(tempDirForTest);
  const filesAfter = glob.sync(path.join(tempDirForTest, '**'));
  expect(filesAfter.length).toBeGreaterThan(4);
});
