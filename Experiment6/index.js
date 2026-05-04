/**
 * Experiment 6 – Node.js Environment, REPL, NPM Packages & Callback Functions
 *
 * Run:  node index.js
 * REPL: node  (then type JS expressions interactively)
 *
 * NPM packages used (install first):
 *   npm install
 */

'use strict';

/* ── Built-in Node.js info ───────────────────────────────────────────────── */
console.log('=== Experiment 6: Node.js Environment ===\n');
console.log('Node.js version :', process.version);
console.log('Platform        :', process.platform);
console.log('Architecture    :', process.arch);
console.log('Working directory:', process.cwd());
console.log('Script path     :', __filename);
console.log('Script directory:', __dirname);
console.log('');

/* ── Built-in modules ────────────────────────────────────────────────────── */
const os   = require('os');
const path = require('path');
const fs   = require('fs');

console.log('=== os module ===');
console.log('Hostname  :', os.hostname());
console.log('OS type   :', os.type());
console.log('CPU cores :', os.cpus().length);
console.log('Free mem  :', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');
console.log('Total mem :', (os.totalmem() / 1024 / 1024).toFixed(2), 'MB');
console.log('');

console.log('=== path module ===');
const filePath = path.join(__dirname, 'index.js');
console.log('path.join  :', filePath);
console.log('path.extname:', path.extname(filePath));
console.log('path.basename:', path.basename(filePath));
console.log('');

/* ══ CALLBACKS ═══════════════════════════════════════════════════════════════
   A callback is a function passed as an argument to another function,
   to be called once an operation completes.
*/
console.log('=== Callbacks ===');

// 1. Simple synchronous callback
function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

greet('Alice', function (msg) {
  console.log('Sync callback:', msg);
});

// 2. Callback with error-first pattern (Node.js convention)
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error('Division by zero'), null);
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, function (err, result) {
  if (err) { console.error('Error:', err.message); return; }
  console.log('divide(10, 2) =', result);
});

divide(10, 0, function (err, result) {
  if (err) { console.error('Error caught:', err.message); return; }
  console.log('Result:', result);
});

// 3. Asynchronous callback using setTimeout
console.log('\nBefore setTimeout');
setTimeout(function () {
  console.log('Inside setTimeout callback (async, 500ms delay)');
}, 500);
console.log('After setTimeout (this prints before the callback)\n');

// 4. fs.readFile – async callback (reads this file itself)
fs.readFile(__filename, 'utf8', function (err, data) {
  if (err) { console.error('fs.readFile error:', err.message); return; }
  const lines = data.split('\n').length;
  console.log(`\nfs.readFile callback → this file has ${lines} lines.`);
});

/* ══ PROMISES ════════════════════════════════════════════════════════════════ */
console.log('=== Promises ===');

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(`Resolved after ${ms}ms`); }, ms);
  });
}

wait(300).then(function (msg) {
  console.log('Promise .then():', msg);
});

/* ══ ASYNC / AWAIT ═══════════════════════════════════════════════════════════ */
async function runAsync() {
  const msg = await wait(200);
  console.log('async/await:', msg);
}
runAsync();

/* ══ NPM PACKAGES ════════════════════════════════════════════════════════════
   Run `npm install` first to install chalk and lodash.
   If not installed, the try/catch will show a friendly message.
*/
console.log('\n=== NPM Packages ===');

try {
  const chalk  = require('chalk');
  console.log(chalk.green('chalk: green text'));
  console.log(chalk.blue.bold('chalk: bold blue text'));
  console.log(chalk.red('chalk: red text'));
} catch (e) {
  console.log('chalk not installed. Run: npm install  (inside Experiment6 folder)');
}

try {
  const _ = require('lodash');
  const arr = [3, 1, 4, 1, 5, 9, 2, 6];
  console.log('lodash _.uniq   :', _.uniq(arr));
  console.log('lodash _.chunk  :', _.chunk(arr, 3));
  console.log('lodash _.shuffle:', _.shuffle(arr));
  console.log('lodash _.sum    :', _.sum(arr));
} catch (e) {
  console.log('lodash not installed. Run: npm install  (inside Experiment6 folder)');
}

/* ── REPL note ───────────────────────────────────────────────────────────── */
console.log('\n=== REPL ===');
console.log('To use the Node.js REPL, open a terminal and type: node');
console.log('Then try: 2 + 2, "hello".toUpperCase(), [1,2,3].map(x => x*2)');
console.log('Type .exit to quit the REPL.');
