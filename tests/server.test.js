const request = require('supertest');
const app = require('../src/server');

describe('Server Endpoints', () => {
    
  it('should retrieve all books', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should retrieve a specific book by ID', async () => {
    const response = await request(app).get('/books/1');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Book not found' });
  });

  it('should create a new book', async () => {
    const book = { title: 'New Book', author: 'John Doe' };
    const response = await request(app).post('/books').send(book);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(book));
  });


  it('should update a book by ID', async () => {
    const book = { title: 'Updated Book', author: 'Jane Doe' };
    const response = await request(app).put('/books/1').send(book);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining(book));
  });

  it('should delete a book by ID', async () => {
    const response = await request(app).delete('/books/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({ id: '1' }));
  });
});
