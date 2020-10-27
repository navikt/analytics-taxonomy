const createChecksum = require('./create-checksum');
const path = require('path');

test('should create checksums', async () => {
  const ch1 = createChecksum('some content');
  const ch2 = createChecksum({some: 'other-content'});
  expect(typeof ch1).toBe('string');
  expect(typeof ch2).toBe('string');
  expect(ch1.length).toBe(7);
  expect(ch2.length).toBe(7);
});
