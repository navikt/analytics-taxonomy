const uniqueFolders = require('./unique-folders');
const path = require('path');

test('should return unique folders from paths', async () => {
  const unique = uniqueFolders([
    path.join(__dirname, 'somefilder', 'test.tx'),
    path.join(__dirname, 'somefilder', 'anoither.tx'),
    path.join(__dirname, 'index.ts'),
  ]);
  expect(unique.length).toBe(2);
});
