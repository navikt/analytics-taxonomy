const fetch = require('./fetch');
const path = require('path');

test('should get file age', async () => {
  const fileage = fetch.fileAge(__filename);
  expect(fileage).toBeGreaterThan(1);
});
