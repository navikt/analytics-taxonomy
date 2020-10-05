const findEventFiles = require("./find-event-files")
const constants = require("../filenames.json");
test('should find event files', async () => {
  const files = findEventFiles(constants.README_MD);
  expect(files.length).toBeGreaterThan(1);
})
