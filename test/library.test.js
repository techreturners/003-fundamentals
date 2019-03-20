const Library = require("../app/library");

test("Check that a library can be instantiated with some books", () => {
  const library = new Library([
    // Add some books here
  ]);
  expect(library.books).toEqual([
    // How should the books look?
  ]);
});

test("Check that a book can be added to the library", () => {
  const library = new Library([]);
  library.add();
  expect(library.books).toEqual([]);
});
