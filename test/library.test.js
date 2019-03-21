const Library = require("../app/library");
const Book = require("../app/book");

test("Check that a library can be instantiated with some books", () => {
  const b1 = new Book("Don't Make Me Think", "Steve Krug", 123);
  const b2 = new Book("Site Reliability Engineering", "Niall Richard Murphy", 456);
  const b3 = new Book("Fantastic Mr Fox", "Roald Dahl", 789);
  const library = new Library([b1, b2, b3]);

  expect(library.books).toEqual([
    b1, b2, b3
  ]);
});

test("Check that a book can be added to the library", () => {
  const library = new Library([]);
  const b1 = new Book('Growth Mindset', 'Carol Dweck', 992);
  library.add(b1);
  expect(library.books).toEqual([b1]);
});

test("Check that a book can be withdrawn", () => {
  const b1 = new Book('Growth Mindset', 'Carol Dweck', 992);
  const library = new Library([b1]);
  library.withdraw(992);
  expect(library.books).toHaveLength(0);
});

test("Check we can checkout a book", () => {
  const b1 = new Book('Growth Mindset', 'Carol Dweck', 992);
  const library = new Library([b1]);
  expect(library.books[0].available).toBe(true);
  library.checkout(992);
  expect(library.books[0].available).toBe(false);
});

test("Check we can check in a book", () => {
  const b1 = new Book('Growth Mindset', 'Carol Dweck', 992);
  const library = new Library([b1]);
  expect(library.books[0].available).toBe(true);
  library.checkout(992);
  expect(library.books[0].available).toBe(false);
  library.checkin(992);
  expect(library.books[0].available).toBe(true);
});

test("Check we can't check out an already checked out book", () => {
  const b1 = new Book('Growth Mindset', 'Carol Dweck', 992);
  const library = new Library([b1]);
  library.checkout(992);
  expect(library.books[0].available).toBe(false);
  const result = library.checkout(992);
  expect(result).toBe("Sorry, that book is not available");
});

test("We can get all the available books", () => {
  const b1 = new Book("Don't Make Me Think", "Steve Krug", 123);
  const b2 = new Book("Site Reliability Engineering", "Niall Richard Murphy", 456);
  const b3 = new Book("Fantastic Mr Fox", "Roald Dahl", 789);
  const library = new Library([b1, b2, b3]);
  library.checkout(123);

  const available = library.getAllAvailable();
  expect(available).toHaveLength(2);
  expect(available[0].title).toBe("Site Reliability Engineering");
  expect(available[1].title).toBe("Fantastic Mr Fox");
});

test("We can find books by a specific author", () => {
  const b1 = new Book("Don't Make Me Think", "Steve Krug", 123);
  const b2 = new Book("The Twits", "Roald Dahl", 456);
  const b3 = new Book("Fantastic Mr Fox", "Roald Dahl", 789);
  const library = new Library([b1, b2, b3]);
  const books = library.search("Roald Dahl");
  expect(books).toHaveLength(2);
  expect(books[0].author).toBe("Roald Dahl");
  expect(books[1].author).toBe("Roald Dahl");
});