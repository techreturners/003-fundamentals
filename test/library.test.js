const library = require('../app/library');

test('Check we have all books and stocked correctly', () => {
  let expectedBooksInLibrary = [{

  }];

  expect(library.getAllBooks()).toEqual(expectedBooksInLibrary);
});

test('Check available books', () => {
  let availableBooksInLibrary = [{

  }];

  expect(library.getAllAvailableBooks()).toEqual(availableBooksInLibrary);
});
