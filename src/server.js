const express = require('express');
const app = express();
const booksRouter = require('./routes/books');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
