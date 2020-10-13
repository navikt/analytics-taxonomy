const Signature = require('../versioning/signature');
const rules = require('../versioning/rules');
const rewriteName = require('../definitions/rewrite-name');
/**
 * Tar inn definisjoner og lager en signatur for pakken. Ganske enkelt. Hvis funksjonsnavnet
 * endrer seg så brekker pakken og vi trenger MAJOR. Hvis det er endringer i props så trenger
 * vi en Minor upgrade. Det samme gjelder om man legger til en ny hendelse. Det er automatisk
 * en `patch`
 *
 * @param definitions
 * @return {Signature}
 */
module.exports = definitions => {
  const signature = new Signature();
  definitions.forEach(def => {
    const names = rewriteName(def.eventName);
    signature.add(names.functionName, rules.IF_CHANGED_MINOR);
    signature.add([names.functionName, def.eventProps.sort()], rules.IF_CHANGED_PATCH);
  });
  return signature;
};
