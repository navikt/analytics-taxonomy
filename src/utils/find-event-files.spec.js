const findEventFiles = require("./find-event-files")
const filenames = require("../source-files");
test('should find event files', async () => {
  const files = findEventFiles(filenames.README_MD);
  expect(files.length).toBeGreaterThan(1);
})
