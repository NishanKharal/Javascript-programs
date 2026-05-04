/**
 * Experiment 7 – Server-side Application with Node.js + Express
 *                Basic RESTful API
 *
 * Setup:
 *   cd Experiment7
 *   npm install
 *   node index.js
 *
 * Test endpoints (use browser, curl, or Postman):
 *   GET    http://localhost:3000/
 *   GET    http://localhost:3000/api/students
 *   GET    http://localhost:3000/api/students/:id
 *   POST   http://localhost:3000/api/students        body: { "name":"...", "age":... }
 *   PUT    http://localhost:3000/api/students/:id    body: { "name":"...", "age":... }
 *   DELETE http://localhost:3000/api/students/:id
 */

'use strict';

const express = require('express');
const app     = express();
const PORT    = 3000;

/* ── Middleware ──────────────────────────────────────────────────────────── */
app.use(express.json());                    // parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies

// Simple request logger middleware
app.use(function (req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/* ── In-memory data store ────────────────────────────────────────────────── */
let students = [
  { id: 1, name: 'Alice',  age: 21, course: 'Computer Science' },
  { id: 2, name: 'Bob',    age: 22, course: 'Information Technology' },
  { id: 3, name: 'Charlie',age: 20, course: 'Electronics' },
];
let nextId = 4;

/* ══ ROUTES ══════════════════════════════════════════════════════════════════ */

// ── Home route
app.get('/', function (req, res) {
  res.json({
    message: 'Experiment 7 – Express REST API is running!',
    endpoints: {
      'GET    /api/students'      : 'Get all students',
      'GET    /api/students/:id'  : 'Get student by ID',
      'POST   /api/students'      : 'Create a new student',
      'PUT    /api/students/:id'  : 'Update a student',
      'DELETE /api/students/:id'  : 'Delete a student',
    },
  });
});

// ── GET all students
app.get('/api/students', function (req, res) {
  res.json({ success: true, count: students.length, data: students });
});

// ── GET single student by ID
app.get('/api/students/:id', function (req, res) {
  const id      = parseInt(req.params.id, 10);
  const student = students.find(function (s) { return s.id === id; });

  if (!student) {
    return res.status(404).json({ success: false, message: `Student with id ${id} not found.` });
  }

  res.json({ success: true, data: student });
});

// ── POST create a new student
app.post('/api/students', function (req, res) {
  const { name, age, course } = req.body;

  if (!name || !age) {
    return res.status(400).json({ success: false, message: 'name and age are required.' });
  }

  const newStudent = {
    id    : nextId++,
    name  : name.trim(),
    age   : parseInt(age, 10),
    course: course ? course.trim() : 'Not specified',
  };

  students.push(newStudent);
  res.status(201).json({ success: true, message: 'Student created.', data: newStudent });
});

// ── PUT update a student
app.put('/api/students/:id', function (req, res) {
  const id      = parseInt(req.params.id, 10);
  const index   = students.findIndex(function (s) { return s.id === id; });

  if (index === -1) {
    return res.status(404).json({ success: false, message: `Student with id ${id} not found.` });
  }

  const { name, age, course } = req.body;
  if (name)   students[index].name   = name.trim();
  if (age)    students[index].age    = parseInt(age, 10);
  if (course) students[index].course = course.trim();

  res.json({ success: true, message: 'Student updated.', data: students[index] });
});

// ── DELETE a student
app.delete('/api/students/:id', function (req, res) {
  const id    = parseInt(req.params.id, 10);
  const index = students.findIndex(function (s) { return s.id === id; });

  if (index === -1) {
    return res.status(404).json({ success: false, message: `Student with id ${id} not found.` });
  }

  const deleted = students.splice(index, 1)[0];
  res.json({ success: true, message: 'Student deleted.', data: deleted });
});

// ── 404 handler for unknown routes
app.use(function (req, res) {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

/* ── Start server ────────────────────────────────────────────────────────── */
app.listen(PORT, function () {
  console.log(`\nExperiment 7 – Express server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.\n');
});
