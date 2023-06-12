const express = require('express');
const router = express.Router();


const books = [];


router.get('/', (req, res) => {
  res.status(200).json(books);
});


router.get('/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.status(200).json(book);
});


router.post('/', (req, res) => {
  const { title, author } = req.body;
  const id = String(books.length + 1);
  const newBook = { id, title, author };

  books.push(newBook);

  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const updatedBook = { id, title, author };
  books[bookIndex] = updatedBook;

  res.status(200).json(updatedBook);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json(deletedBook);
});

module.exports = router;
