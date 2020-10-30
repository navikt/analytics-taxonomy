const getChangeFromCommitMessage = require('./get-change-from-commit-message');
const status = require('./status.json');

test('should get change from commit message', async () => {
  const change = getChangeFromCommitMessage('Endrer slik at det skal bli en [patch]');
  expect(change).toBe(status.PATCH);
});


test('should not return change if there is nothing there', async () => {
  const change = getChangeFromCommitMessage('Endrer slik at det skal bli en');
  expect(change).toBe(status.NOCHANGE);
});

test('should handle undefined', async () => {
  const change = getChangeFromCommitMessage(undefined);
  expect(change).toBe(status.NOCHANGE);
});
