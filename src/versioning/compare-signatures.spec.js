const compareSignatures = require('./compare-signatures');
const Signature = require('./signature');
const rules = require('./rules');
const status = require('./status');
const oldSign = new Signature();
oldSign.add('functionName1', rules.IF_CHANGED_MINOR);
oldSign.add('functionName2', rules.IF_CHANGED_PATCH);
test('should find added and removed signatures', async () => {
  const newSign = new Signature();
  newSign.add('functionName1', rules.IF_CHANGED_MINOR);
  newSign.add('functionName2Version2', rules.IF_CHANGED_PATCH);
  const shouldShange = compareSignatures(oldSign.list(), newSign.list());
  expect(shouldShange).toBe(status.PATCH);
});

test('should handle no change at all', async () => {
  const newSign = new Signature();
  newSign.add('functionName1', rules.IF_CHANGED_MINOR);
  newSign.add('functionName2', rules.IF_CHANGED_PATCH);
  const shouldShange = compareSignatures(oldSign.list(), newSign.list());
  expect(shouldShange).toBe(status.NOCHANGE);
});
test('should handle that just rules change', async () => {
  const newSign = new Signature();
  newSign.add('functionName1', rules.IF_CHANGED_PATCH);
  newSign.add('functionName2', rules.IF_CHANGED_MINOR);
  const shouldShange = compareSignatures(oldSign.list(), newSign.list());
  expect(shouldShange).toBe(status.NOCHANGE);
});

test('should handle that minor changes', async () => {
  const newSign = new Signature();
  newSign.add('functionName1WithSomeExtraStuff', rules.IF_CHANGED_MINOR);
  newSign.add('functionName2', rules.IF_CHANGED_PATCH);
  const shouldShange = compareSignatures(oldSign.list(), newSign.list());
  expect(shouldShange).toBe(status.MINOR);
});

test('should handle that we add stuff', async () => {
  const newSign = new Signature();
  newSign.add('functionName1', rules.IF_CHANGED_MINOR);
  newSign.add('functionName2', rules.IF_CHANGED_PATCH);
  newSign.add('anotherNewFunction', rules.IF_CHANGED_MINOR);
  const shouldShange = compareSignatures(oldSign.list(), newSign.list());
  expect(shouldShange).toBe(status.PATCH);
});
