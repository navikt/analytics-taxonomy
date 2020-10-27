const expandSignature = require('./expand-signature');
const Signature = require('./signature');
const rules = require('./rules');

test('should expand signatures', async () => {
  const signature = new Signature();
  signature.add('some content', rules.IF_CHANGED_PATCH);
  signature.add('some thing else', rules.IF_CHANGED_PATCH);
  signature.add({here: 'is an object also'}, rules.IF_CHANGED_PATCH);
  const expanded = expandSignature(signature.compact());
  expect(expanded.size).toBe(3);
  expect(signature.list()).toEqual(expanded)

});
