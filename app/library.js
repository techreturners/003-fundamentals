class Library {
  constructor(books) {
    this.books = books;
  }

  add(book) {
    this.books.push(book);
  }

  withdraw(ISBN) {
    this.books = this.books.filter(function (book) {
      return book.ISBN !== ISBN;
    });
  }

  checkout(ISBN) {
    let cannotBeCheckedOut;
    this.books.forEach(function (book) {
      if (book.ISBN === ISBN) {
        if (book.available) {
          book.available = false;
        } else {
          cannotBeCheckedOut = true;
        }
      }
    });

    if (cannotBeCheckedOut) {
      return "Sorry, that book is not available";
    }
  }

  checkin(ISBN) {
    this.books.forEach(function (book) {
      if (book.ISBN === ISBN) book.available = true;
    });
  }

  getAllAvailable() {
    return this.books.filter(function (book) {
      return book.available;
    });
  }

  search(author) {
    return this.books.filter(function (book) {
      return book.author === author;
    });
  }
}

module.exports = Library;
