const library = require('../app/library');

test('Check we have all books', () => {
  const expectedBooksInLibrary = [{

  }];

  expect(library.getAllBooks()).toEqual(expectedBooksInLibrary);
});

test('Check available books', () => {
  const availableBooksInLibrary = [{

  }];

  expect(library.getAllAvailableBooks()).toEqual(availableBooksInLibrary);
});
