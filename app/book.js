class Book {
	constructor(title, author, ISBN) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.available = true;
	}
}

module.exports = Book;
