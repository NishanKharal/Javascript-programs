/**
 * Experiment 8 – MongoDB with Node.js
 *                CRUD: Insert, Update, Delete, Query, Sort, Join (Lookup)
 *
 * Prerequisites:
 *   1. Install MongoDB Community Server and start mongod
 *      OR use MongoDB Atlas (cloud) – update MONGO_URI below.
 *   2. cd Experiment8 && npm install
 *   3. node index.js
 *
 * Collections used:
 *   database : experiment8db
 *   students : { name, age, course, marks }
 *   courses  : { title, duration }  (used for $lookup / join demo)
 */

'use strict';

const { MongoClient } = require('mongodb');

// ── Connection URI (change if using Atlas or a different host/port) ─────────
const MONGO_URI = 'mongodb://127.0.0.1:27017';
const DB_NAME   = 'experiment8db';

async function run() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB\n');

    const db         = client.db(DB_NAME);
    const students   = db.collection('students');
    const courses    = db.collection('courses');

    // ── Clean up previous run ──────────────────────────────────────────────
    await students.deleteMany({});
    await courses.deleteMany({});
    console.log('🗑  Cleared existing data.\n');

    /* ══ CREATE (INSERT) ════════════════════════════════════════════════════ */
    console.log('=== INSERT ===');

    // insertOne
    const one = await students.insertOne({
      name: 'Alice', age: 21, course: 'CS', marks: 88,
    });
    console.log('insertOne  →', one.insertedId);

    // insertMany
    const many = await students.insertMany([
      { name: 'Bob',     age: 22, course: 'IT',   marks: 75 },
      { name: 'Charlie', age: 20, course: 'CS',   marks: 92 },
      { name: 'Diana',   age: 23, course: 'ECE',  marks: 65 },
      { name: 'Eve',     age: 21, course: 'IT',   marks: 80 },
    ]);
    console.log('insertMany → inserted', many.insertedCount, 'documents\n');

    // Insert courses for $lookup demo
    await courses.insertMany([
      { title: 'CS',  duration: '4 years', department: 'Engineering' },
      { title: 'IT',  duration: '3 years', department: 'Technology'  },
      { title: 'ECE', duration: '4 years', department: 'Electronics' },
    ]);

    /* ══ READ (QUERY) ═══════════════════════════════════════════════════════ */
    console.log('=== QUERY ===');

    // find all
    const all = await students.find({}).toArray();
    console.log('All students:', all.map(s => s.name));

    // find with filter
    const csStudents = await students.find({ course: 'CS' }).toArray();
    console.log('CS students :', csStudents.map(s => s.name));

    // findOne
    const found = await students.findOne({ name: 'Alice' });
    console.log('findOne Alice:', found);

    // query with comparison operators
    const highMarks = await students.find({ marks: { $gte: 80 } }).toArray();
    console.log('marks >= 80 :', highMarks.map(s => `${s.name}(${s.marks})`));
    console.log('');

    /* ══ SORT ═══════════════════════════════════════════════════════════════ */
    console.log('=== SORT ===');

    const sortedAsc  = await students.find({}).sort({ marks: 1 }).toArray();
    console.log('Sorted ASC  (marks):', sortedAsc.map(s => `${s.name}:${s.marks}`));

    const sortedDesc = await students.find({}).sort({ marks: -1 }).toArray();
    console.log('Sorted DESC (marks):', sortedDesc.map(s => `${s.name}:${s.marks}`));
    console.log('');

    /* ══ UPDATE ═════════════════════════════════════════════════════════════ */
    console.log('=== UPDATE ===');

    // updateOne
    const upOne = await students.updateOne(
      { name: 'Alice' },
      { $set: { marks: 95 } }
    );
    console.log('updateOne Alice marks→95 | modifiedCount:', upOne.modifiedCount);

    // updateMany
    const upMany = await students.updateMany(
      { course: 'IT' },
      { $inc: { marks: 5 } }   // increment marks by 5
    );
    console.log('updateMany IT +5 marks  | modifiedCount:', upMany.modifiedCount);

    const afterUpdate = await students.find({}).toArray();
    console.log('After update:', afterUpdate.map(s => `${s.name}:${s.marks}`));
    console.log('');

    /* ══ JOIN ($lookup) ═════════════════════════════════════════════════════ */
    console.log('=== JOIN ($lookup) ===');

    const joined = await students.aggregate([
      {
        $lookup: {
          from        : 'courses',   // collection to join
          localField  : 'course',    // field in students
          foreignField: 'title',     // field in courses
          as          : 'courseInfo',
        },
      },
      { $unwind: { path: '$courseInfo', preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 0,
          name    : 1,
          marks   : 1,
          course  : 1,
          duration: '$courseInfo.duration',
          dept    : '$courseInfo.department',
        },
      },
    ]).toArray();

    console.log('Students with course info:');
    joined.forEach(s => {
      console.log(`  ${s.name} | ${s.course} | ${s.duration} | ${s.dept} | marks: ${s.marks}`);
    });
    console.log('');

    /* ══ DELETE ═════════════════════════════════════════════════════════════ */
    console.log('=== DELETE ===');

    // deleteOne
    const delOne = await students.deleteOne({ name: 'Eve' });
    console.log('deleteOne Eve | deletedCount:', delOne.deletedCount);

    // deleteMany
    const delMany = await students.deleteMany({ marks: { $lt: 70 } });
    console.log('deleteMany marks<70 | deletedCount:', delMany.deletedCount);

    const remaining = await students.find({}).toArray();
    console.log('Remaining students:', remaining.map(s => s.name));

  } catch (err) {
    console.error('❌ Error:', err.message);
    console.log('\nMake sure MongoDB is running: mongod --dbpath <your-data-path>');
    console.log('Or update MONGO_URI in index.js to point to your MongoDB Atlas cluster.');
  } finally {
    await client.close();
    console.log('\n🔌 Connection closed.');
  }
}

run();
