# Coding Tasks

**Note**

Where applicable, try to do the coding tasks with [ping pong pair programming](http://wiki.c2.com/?PairProgrammingPingPongPattern).

For example, in your pairs, person A could do task 2, observe that the test fails because task 3 has not been completed.

Person B then implements the code for task 3.

You then re-run the test and find that it passes.

Then Person B writes the test and code for task 4.

Person A writes the code and implements the function for task 5 and so on and so on.

## 1) What use is an empty library?

The library currently doesn't have any books! We've had word that 3 new books have arrived.

Each book has the following properties/attributes associated with it:

- Title (String)
- Author (String)
- Available (Boolean)
- ISBN (Number)

The three books we've had delivered are:

- Don't Make Me Think by Steve Krug ISBN: 123
- Site Reliability Engineering by Niall Richard Murphy ISBN: 456
- Fantastic Mr Fox by Roald Dahl ISBN: 789

You can assume that each book has not yet been borrowed by anyone.

Using the information above make sure that when we create a library, we can create it with some books.

The test for this functionality is half-written. Remove the comments and ensure you can add the initial 3 books to the new library.

Does the test pass?

## 2) Can we add a new book?

A new book has just arrived! It is:

- Growth Mindset by Carol Dweck ISBN: 992

There is an incomplete test that checks to see that a book can be added to the library.

This test should be completed. Note the test will fail at this stage until task 3.

## 3) Implement the function for adding a book to the library

You should now implement the method for adding a book to the library.

Once implemented your test from challenge 2 should pass.

## 4) Withdraw a book

Sometimes hooligans enter the library and tear out pages of books. When this happens, the book in question has to be withdrawn from stock.

Write a test that ensures a specific book can be withdrawn from stock. This should remove it completely from the books that the library holds.

## 5) Implement the function for withdrawing a book

You should now implement the method for withdrawing a book from the library.

**HINT** The library currently does not provide a withdraw method so you'll need to have a think and design in your pairs what this function might look like.

**HINT** Remember the higher order functions you used from yesterday. What could you use to remove something from a list?

Once implemented your test from challenge 4 should pass.

## 6) Can we check out books yet?

Write a test that proves whether the library allows people to check out books.

## 7) Provide the checkout method

Now you've got a test - update the library code to provide a checkout method.

Your test should then pass.

## 8) Can we check a book back in?

Write a test that proves whether the library allows people to check back in the book which was just checked out.

## 9) Provide the checkin function

Now you've got a test - update the library code to provide a checkin method.

Your test should then pass.

## 10) Can't check out an already-borrowed book!

Someone's trying to check out a book that's not available. In this case, write a test to prove that your library returns a friendly message informing them that they cannot check out this book.

## 11) Revisit the checkout function

Now you've got a test, go back and revisit the checkout method to ensure that it behaves correctly when someone tries to checkout a book that has already been borrowed.

## 12) Complete the test for getting all AVAILABLE books in the libary

Write a test that checks that you can get a list of all the available books in the library.

## 13) Implement the available books method

Complete the available books method - it should return a list of books that are available.

**HINT** Think back to previous lectures on looping. Could any of the Higher Order Functions you learned help?

## 14) My favourite author

A customer would like to be able to search for books by a specific author. Write a test which proves that this is possible to do in the library.

Note that you'll need to populate your library with multiple books by the same author to check this functionality.

## 15) Finding books by author

Implement a method which allows searching for books by author.

# Written questions

Using the books as a reference

1. If a book is an object, what is its _encapsulated data_?

2. If the library was an object, what procedures did we provide for working with it?

3. Why do we create a new library for every single test?
