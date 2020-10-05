const createFilename = require("./create-filename")

test('should create a nice filename', async () => {
  const filename = createFilename("Skjema Åpnet","/a/b/cs");
  expect(filename).toBe("/a/b/cs/skjema-åpnet.ts");
})
