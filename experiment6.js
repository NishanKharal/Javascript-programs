// Experiment 6: Node.js environment example demonstrating REPL-style output, callbacks, promises, async/await, and built-in modules.

const path = require('path');
const fs = require('fs').promises;

console.log('Experiment 6: Node.js style JavaScript example');
console.log('Running from:', __dirname);
console.log('Process arguments:', process.argv.slice(2));
console.log('Node version:', process.version);

function computeSum(a, b, callback) {
  const result = a + b;
  callback(result);
}

computeSum(10, 20, (sum) => {
  console.log('Sum from callback:', sum);
});

const promiseExample = new Promise((resolve, reject) => {
  const value = 7;
  if (value > 0) {
    resolve(`Promise resolved with value ${value}`);
  } else {
    reject(new Error('Promise rejected because value is not positive'));
  }
});

promiseExample
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

async function writeAndReadFile() {
  const filePath = path.join(__dirname, 'experiment6-output.txt');
  const fileContent = `Experiment 6 output written at ${new Date().toISOString()}`;

  try {
    await fs.writeFile(filePath, fileContent, 'utf8');
    const readContent = await fs.readFile(filePath, 'utf8');
    console.log('File content:', readContent);
  } catch (error) {
    console.error('File operation failed:', error.message);
  }
}

(async () => {
  await writeAndReadFile();
  console.log('Async/await operation completed.');
})();
