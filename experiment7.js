// Experiment 7: Basic server-side application example using Node.js and Express patterns.

console.log('Experiment 7: Server-side application with Node.js / Express pattern');

const expressExample = {
  description: 'Express.js RESTful API example pattern',
  endpoints: [
    { method: 'GET', path: '/api/items', action: 'Return list of items' },
    { method: 'POST', path: '/api/items', action: 'Create a new item' },
    { method: 'PUT', path: '/api/items/:id', action: 'Update an item' },
    { method: 'DELETE', path: '/api/items/:id', action: 'Delete an item' },
  ],
};

console.log(expressExample);

let app;
try {
  const express = require('express');
  app = express();
  app.use(express.json());

  const items = [
    { id: 1, name: 'Item One', price: 25 },
    { id: 2, name: 'Item Two', price: 40 },
  ];

  app.get('/api/items', (req, res) => {
    res.json(items);
  });

  app.get('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find((entry) => entry.id === id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  });

  app.post('/api/items', (req, res) => {
    const newItem = {
      id: items.length + 1,
      name: req.body.name || 'New Item',
      price: Number(req.body.price) || 0,
    };
    items.push(newItem);
    res.status(201).json(newItem);
  });

  app.put('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find((entry) => entry.id === id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    item.name = req.body.name || item.name;
    item.price = Number(req.body.price) || item.price;
    res.json(item);
  });

  app.delete('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = items.findIndex((entry) => entry.id === id);
    if (index < 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    const [deleted] = items.splice(index, 1);
    res.json(deleted);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Express server is listening on http://localhost:${PORT}`);
    console.log('Try GET /api/items and POST /api/items with JSON body.');
  });
} catch (error) {
  console.log('Express is not installed. Install it with `npm install express` to run the server example.');
  console.log('Example Express app structure:', expressExample);
}
