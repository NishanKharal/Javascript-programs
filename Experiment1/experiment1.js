// Experiment 1: Basic JavaScript programs using variables, data types, operators, and control statements
// IDEs used: Notepad++, VS Code, Eclipse

// ─── VARIABLES ───────────────────────────────────────────────────────────────
var oldStyle = 'This is a var variable';
let modernText = 'This is a let variable';
const constantValue = 100;

console.log('=== Variables ===');
console.log('var:', oldStyle);
console.log('let:', modernText);
console.log('const:', constantValue);

// ─── DATA TYPES ──────────────────────────────────────────────────────────────
const stringValue    = 'Hello, JavaScript!';
const numberValue    = 42;
const floatValue     = 3.14;
const booleanValue   = true;
const nullValue      = null;
let   undefinedValue;
const arrayValue     = [1, 'two', true, null];
const objectValue    = { name: 'Alice', age: 25, city: 'Mumbai' };
const symbolValue    = Symbol('id');
const bigIntValue    = 9007199254740991n;

console.log('\n=== Data Types ===');
console.log('String  :', stringValue,  '| typeof:', typeof stringValue);
console.log('Number  :', numberValue,  '| typeof:', typeof numberValue);
console.log('Float   :', floatValue,   '| typeof:', typeof floatValue);
console.log('Boolean :', booleanValue, '| typeof:', typeof booleanValue);
console.log('Null    :', nullValue,     '| typeof:', typeof nullValue);
console.log('Undefined:', undefinedValue, '| typeof:', typeof undefinedValue);
console.log('Array   :', arrayValue,   '| typeof:', typeof arrayValue);
console.log('Object  :', objectValue,  '| typeof:', typeof objectValue);
console.log('Symbol  :', symbolValue.toString(), '| typeof:', typeof symbolValue);
console.log('BigInt  :', bigIntValue,  '| typeof:', typeof bigIntValue);

// ─── OPERATORS ───────────────────────────────────────────────────────────────
console.log('\n=== Arithmetic Operators ===');
console.log('Addition       :', numberValue + floatValue);
console.log('Subtraction    :', numberValue - 10);
console.log('Multiplication :', numberValue * 2);
console.log('Division       :', numberValue / 2);
console.log('Modulus        :', numberValue % 5);
console.log('Exponentiation :', numberValue ** 2);

console.log('\n=== Assignment Operators ===');
let x = 10;
x += 5;  console.log('x += 5  =>', x);
x *= 2;  console.log('x *= 2  =>', x);
x -= 5;  console.log('x -= 5  =>', x);
x /= 5;  console.log('x /= 5  =>', x);

console.log('\n=== Comparison Operators ===');
console.log('42 === 42 :', numberValue === 42);
console.log('42 !== 100:', numberValue !== 100);
console.log('42 > 20   :', numberValue > 20);
console.log('42 <= 42  :', numberValue <= 42);

console.log('\n=== Logical Operators ===');
console.log('true && false :', true && false);
console.log('true || false :', true || false);
console.log('!false        :', !false);

console.log('\n=== Ternary Operator ===');
const result = numberValue > 20 ? 'Large number' : 'Small number';
console.log('Result:', result);

// ─── CONTROL STATEMENTS ──────────────────────────────────────────────────────
console.log('\n=== if / else if / else ===');
if (numberValue > 50) {
  console.log('Greater than 50');
} else if (numberValue === 42) {
  console.log('Exactly 42');
} else {
  console.log('50 or less');
}

console.log('\n=== for loop ===');
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

console.log('\n=== while loop ===');
let count = 0;
while (count < 3) {
  console.log('Count:', count);
  count++;
}

console.log('\n=== do...while loop ===');
let n = 0;
do {
  console.log('do...while n:', n);
  n++;
} while (n < 3);

console.log('\n=== switch statement ===');
const day = 3;
switch (day) {
  case 1: console.log('Monday');    break;
  case 2: console.log('Tuesday');   break;
  case 3: console.log('Wednesday'); break;
  default: console.log('Other day');
}

// ─── FUNCTIONS ───────────────────────────────────────────────────────────────
console.log('\n=== Functions ===');

function multiply(a, b) {
  return a * b;
}

const arrowAdd = (a, b) => a + b;

console.log('multiply(6, 7):', multiply(6, 7));
console.log('arrowAdd(5, 7):', arrowAdd(5, 7));
