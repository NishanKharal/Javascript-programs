# JavaScript Programs – List of Experiments

Each experiment lives in its own folder with dedicated files.

---

## Experiment 1 – Variables, Data Types, Operators & Control Statements
**Folder:** `Experiment1/`  
**File:** `experiment1.js`  
**Topics:** `var`, `let`, `const`, all data types, arithmetic/comparison/logical operators, `if/else`, `for`, `while`, `do...while`, `switch`  
**Run:** `node Experiment1/experiment1.js`

---

## Experiment 2 – Embedding & Linking JavaScript with HTML
**Folder:** `Experiment2/`  
**Files:** `index.html`, `script.js`  
**Topics:** Internal `<script>` block, external script via `src`, single-line & multi-line comments, JS keywords (`var`, `let`, `const`, `typeof`, `instanceof`, `in`, `void`)  
**Run:** Open `Experiment2/index.html` in a browser

---

## Experiment 3 – BOM Objects
**Folder:** `Experiment3/`  
**Files:** `index.html`, `bom.js`  
**Topics:** `window`, `history`, `navigator`, `screen` objects; browser info retrieval  
**Run:** Open `Experiment3/index.html` in a browser

---

## Experiment 4 – DOM Manipulation
**Folder:** `Experiment4/`  
**Files:** `index.html`, `dom.js`  
**Topics:** `getElementById`, `getElementsByClassName`, `getElementsByName`, `getElementsByTagName`, `createElement`, `appendChild`, `removeChild`  
**Run:** Open `Experiment4/index.html` in a browser

---

## Experiment 5 – Dynamic Web Pages
**Folder:** `Experiment5/`  
**Files:** `index.html`, `events.js`  
**Topics:** JS events (`click`, `mouseover`, `mouseout`, `input`), conditional logic, `for`/`while`/`for...of` loops, `innerHTML`  
**Run:** Open `Experiment5/index.html` in a browser

---

## Experiment 6 – Node.js Environment, REPL, NPM & Callbacks
**Folder:** `Experiment6/`  
**Files:** `index.js`, `package.json`  
**Topics:** Node.js built-in modules (`os`, `path`, `fs`), REPL usage, NPM packages (`chalk`, `lodash`), callback pattern, Promises, async/await  
**Run:**
```bash
cd Experiment6
npm install
node index.js
```

---

## Experiment 7 – Node.js + Express RESTful API
**Folder:** `Experiment7/`  
**Files:** `index.js`, `package.json`  
**Topics:** Express server setup, middleware, RESTful routes (GET, POST, PUT, DELETE), JSON responses, error handling  
**Run:**
```bash
cd Experiment7
npm install
node index.js
# Server starts at http://localhost:3000
```

---

## Experiment 8 – MongoDB with Node.js (CRUD)
**Folder:** `Experiment8/`  
**Files:** `index.js`, `package.json`  
**Topics:** MongoDB connection, `insertOne`/`insertMany`, `find`/`findOne`, `updateOne`/`updateMany`, `deleteOne`/`deleteMany`, `sort`, `$lookup` (join)  
**Run:**
```bash
cd Experiment8
npm install
# Make sure MongoDB is running (mongod)
node index.js
```
