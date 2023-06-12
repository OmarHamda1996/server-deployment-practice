const express = require('express');
const app = express();
const booksRouter = require('./routes/books');
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
