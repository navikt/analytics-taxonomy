const Signature = require('./signature');
const EOL = require('os').EOL;
const rules = require('./rules');

test('should create signature object', async () => {
  const contract = new Signature();
  contract.add('some content', rules.IF_CHANGED_PATCH);
  contract.add('some thing else', rules.IF_CHANGED_PATCH);
  contract.add({here: 'is an object also'}, rules.IF_CHANGED_PATCH);
  expect(contract.list().size).toBe(3);
});

test('should compact signature', async () => {
  const signature = new Signature();
  signature.add('functionName1', 1);
  signature.add('functionName2', 2);
  signature.add({created: 342}, 2);
  const compact = signature.compact();
  expect(typeof compact).toBe('string');
  expect(compact.split(EOL).length).toBe(3);
});
