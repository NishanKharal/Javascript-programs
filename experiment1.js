// Experiment 1: Basic JavaScript programs using variables, data types, operators, and control statements.

// Variable declarations
var oldStyle = 'This is a var variable';
let modernText = 'This is a let variable';
const constantValue = 100;

// Data types
const stringValue = 'Hello, JavaScript!';
const numberValue = 42;
const floatValue = 3.14;
const booleanValue = false;
const nullValue = null;
let undefinedValue;
const arrayValue = [1, 'two', true, null, { id: 3 }];
const objectValue = {
  name: 'Bob',
  age: 30,
  roles: ['developer', 'tester'],
  address: { city: 'Lahore', zip: 54000 },
};
const symbolValue = Symbol('id');
const bigIntValue = 9007199254740991n;
const regexValue = /JavaScript/i;
const dateValue = new Date();

console.log('Experiment 1: Expanded JavaScript examples');
console.log('var example:', oldStyle);
console.log('let example:', modernText);
console.log('const example:', constantValue);
console.log('String value:', stringValue);
console.log('Number value:', numberValue);
console.log('Float value:', floatValue);
console.log('Boolean value:', booleanValue);
console.log('Null value:', nullValue);
console.log('Undefined value:', undefinedValue);
console.log('Array value:', arrayValue);
console.log('Object value:', objectValue);
console.log('Symbol value:', symbolValue.toString());
console.log('BigInt value:', bigIntValue);
console.log('RegExp test:', regexValue.test(stringValue));
console.log('Date value:', dateValue.toISOString());

// Operators
const sum = numberValue + floatValue;
const difference = numberValue - 10;
const product = numberValue * 2;
const quotient = numberValue / 2;
const remainder = numberValue % 5;
const power = numberValue ** 2;

let assignmentValue = 10;
assignmentValue += 5; // 15
assignmentValue *= 2; // 30
assignmentValue -= 5; // 25
assignmentValue /= 5; // 5

const isEqual = numberValue === 42;
const isNotEqual = numberValue !== 100;
const greaterThan = numberValue > 20;
const lessOrEqual = numberValue <= 42;

const logicalAnd = true && false;
const logicalOr = true || false;
const logicalNot = !false;

const ternaryResult = numberValue > 20 ? 'Large number' : 'Small number';

const user = { name: 'Alice', age: 25 };
const userCopy = { ...user, role: 'student' };

console.log('sum:', sum);
console.log('difference:', difference);
console.log('product:', product);
console.log('quotient:', quotient);
console.log('remainder:', remainder);
console.log('power:', power);
console.log('assignmentValue after +=, *=, -=, /= :', assignmentValue);
console.log('isEqual:', isEqual);
console.log('isNotEqual:', isNotEqual);
console.log('greaterThan:', greaterThan);
console.log('lessOrEqual:', lessOrEqual);
console.log('logicalAnd:', logicalAnd);
console.log('logicalOr:', logicalOr);
console.log('logicalNot:', logicalNot);
console.log('ternaryResult:', ternaryResult);
console.log('user copy:', userCopy);

// Functions
function multiply(a, b) {
  return a * b;
}

const arrowSum = (a, b) => a + b;
const resultMultiply = multiply(6, 7);
const resultSum = arrowSum(5, 7);
console.log('multiply result:', resultMultiply);
console.log('arrowSum result:', resultSum);

const users = [
  { name: 'Ali', age: 20 },
  { name: 'Sara', age: 26 },
  { name: 'Imran', age: 17 },
];

const adults = users.filter((person) => person.age >= 18);
const adultNames = adults.map((person) => person.name);
const totalAge = users.reduce((total, person) => total + person.age, 0);

console.log('adults:', adults);
console.log('adult names:', adultNames);
console.log('total age:', totalAge);

// Advanced object and array handling
const personEntries = Object.entries(objectValue);
const personKeys = Object.keys(objectValue);
const personValues = Object.values(objectValue);

console.log('Object.entries:', personEntries);
console.log('Object.keys:', personKeys);
console.log('Object.values:', personValues);

class Course {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }

  getInfo() {
    return `${this.name} course runs for ${this.duration} weeks.`;
  }
}

const jsCourse = new Course('JavaScript', 6);
console.log(jsCourse.getInfo());

// Control statements
if (numberValue > 50) {
  console.log('Number is greater than 50.');
} else if (numberValue === 42) {
  console.log('Number is exactly 42.');
} else {
  console.log('Number is 50 or less.');
}

for (let i = 1; i <= 3; i += 1) {
  console.log(`For loop iteration ${i}`);
}

let counter = 0;
while (counter < 2) {
  console.log('While loop iteration', counter + 1);
  counter += 1;
}

const day = 2;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  default:
    console.log('Another day');
}

console.log('Type of stringValue:', typeof stringValue);
console.log('Type of numberValue:', typeof numberValue);
console.log('Type of booleanValue:', typeof booleanValue);
console.log('Type of nullValue:', typeof nullValue);
console.log('Type of undefinedValue:', typeof undefinedValue);
console.log('Type of arrayValue:', typeof arrayValue);
console.log('Type of objectValue:', typeof objectValue);
console.log('Type of symbolValue:', typeof symbolValue);
console.log('Type of bigIntValue:', typeof bigIntValue);
