// Experiment 8: MongoDB CRUD operations example pattern with Node.js.

// This file demonstrates MongoDB CRUD style operations in JavaScript.
// It uses a local simulation if the MongoDB driver is not installed.

const simulatedStudents = [
  { id: 1, name: 'John', age: 24 },
  { id: 2, name: 'Ayesha', age: 21 },
  { id: 3, name: 'Imran', age: 18 },
];

async function createStudent(student) {
  student.id = simulatedStudents.length + 1;
  simulatedStudents.push(student);
  return student;
}

async function readStudents(minAge = 18) {
  return simulatedStudents.filter((student) => student.age >= minAge);
}

async function updateStudent(id, update) {
  const student = simulatedStudents.find((item) => item.id === id);
  if (!student) return null;
  Object.assign(student, update);
  return student;
}

async function deleteStudent(id) {
  const index = simulatedStudents.findIndex((student) => student.id === id);
  if (index < 0) return null;
  return simulatedStudents.splice(index, 1)[0];
}

async function sortStudents() {
  return [...simulatedStudents].sort((a, b) => a.age - b.age);
}

async function joinStudentsWithScores() {
  const scores = [
    { studentId: 1, score: 88 },
    { studentId: 2, score: 92 },
  ];
  return simulatedStudents.map((student) => ({
    ...student,
    score: scores.find((item) => item.studentId === student.id)?.score || null,
  }));
}

async function runExperiment8() {
  console.log('Experiment 8: MongoDB CRUD operation patterns');

  const created = await createStudent({ name: 'Sara', age: 22 });
  console.log('Created student:', created);

  const adultStudents = await readStudents(20);
  console.log('Read students age >= 20:', adultStudents);

  const updated = await updateStudent(1, { age: 25 });
  console.log('Updated student:', updated);

  const deleted = await deleteStudent(3);
  console.log('Deleted student:', deleted);

  const sorted = await sortStudents();
  console.log('Sorted students:', sorted);

  const joined = await joinStudentsWithScores();
  console.log('Joined students with scores:', joined);
}

runExperiment8().catch((error) => console.error('Experiment 8 failed:', error));
