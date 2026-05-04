/**
 * Experiment 5 – Dynamic Web Pages (events.js)
 * Demonstrates:
 *   - JavaScript events (click, mouseover, mouseout, keyup)
 *   - Conditional logic (if / else if / else)
 *   - Loops (for, while, for...of)
 *   - innerHTML to build dynamic content
 */

/* ══ 1. EVENTS ═══════════════════════════════════════════════════════════════ */

const colors = ['#e74c3c', '#8e44ad', '#27ae60', '#f39c12', '#2980b9', '#16a085'];
let colorIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
  const box = document.getElementById('colorBox');
  const resetBtn = document.getElementById('resetBtn');

  // click event
  box.addEventListener('click', function () {
    colorIndex = (colorIndex + 1) % colors.length;
    box.style.background = colors[colorIndex];
    box.textContent = `Color: ${colors[colorIndex]}`;
  });

  // mouseover / mouseout events
  box.addEventListener('mouseover', function () {
    box.style.opacity = '0.8';
    box.style.cursor = 'pointer';
  });

  box.addEventListener('mouseout', function () {
    box.style.opacity = '1';
  });

  // reset button click
  resetBtn.addEventListener('click', function () {
    colorIndex = 0;
    box.style.background = '#3498db';
    box.textContent = 'Click me!';
  });

  console.log('Experiment 5 – events.js loaded.');
});

/* ══ 2. COUNTER WITH CONDITIONAL LOGIC ═══════════════════════════════════════ */

let counterValue = 0;

function updateCounterDisplay() {
  document.getElementById('counter').textContent = counterValue;

  const msg = document.getElementById('counterMsg');
  // Conditional logic
  if (counterValue > 0) {
    msg.textContent = '✅ Positive number';
    msg.style.color = '#27ae60';
  } else if (counterValue < 0) {
    msg.textContent = '⚠️ Negative number';
    msg.style.color = '#e74c3c';
  } else {
    msg.textContent = 'Counter is zero';
    msg.style.color = '#7f8c8d';
  }
}

function increment() { counterValue++; updateCounterDisplay(); }
function decrement() { counterValue--; updateCounterDisplay(); }
function resetCounter() { counterValue = 0; updateCounterDisplay(); }

/* ══ 3. LOOPS + innerHTML ════════════════════════════════════════════════════ */

function renderNumbers() {
  const output = document.getElementById('loopOutput');
  let html = '<strong>Numbers 1–10 (for loop):</strong><br>';

  // for loop
  for (let i = 1; i <= 10; i++) {
    const color = i % 2 === 0 ? '#3498db' : '#e74c3c';
    html += `<span style="color:${color};margin-right:8px;">${i}</span>`;
  }

  // while loop example
  html += '<br><strong>Even numbers 2–10 (while loop):</strong><br>';
  let n = 2;
  while (n <= 10) {
    html += `<span style="margin-right:8px;">${n}</span>`;
    n += 2;
  }

  // for...of loop
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
  html += '<br><strong>Fruits (for...of loop):</strong> ';
  for (const fruit of fruits) {
    html += `${fruit} `;
  }

  output.innerHTML = html;
  document.getElementById('tableOutput').innerHTML = '';
}

function renderTable() {
  const table = document.getElementById('tableOutput');
  document.getElementById('loopOutput').innerHTML = '';

  let html = '<tr><th>×</th>';
  for (let i = 1; i <= 10; i++) html += `<th>${i}</th>`;
  html += '</tr>';

  // nested for loop
  for (let row = 1; row <= 5; row++) {
    html += `<tr><th>${row}</th>`;
    for (let col = 1; col <= 10; col++) {
      html += `<td>${row * col}</td>`;
    }
    html += '</tr>';
  }

  table.innerHTML = html;
}

/* ══ 4. DYNAMIC LIST ═════════════════════════════════════════════════════════ */

const items = [];

function renderList() {
  const container = document.getElementById('itemList');
  if (items.length === 0) {
    container.innerHTML = '<em>No items yet…</em>';
    return;
  }

  // Build list using map + join (functional approach)
  const listHTML = items
    .map((item, index) => `<li>${item} <button onclick="removeItem(${index})" style="background:#e74c3c;padding:2px 8px;font-size:0.8rem;">✕</button></li>`)
    .join('');

  container.innerHTML = `<ul>${listHTML}</ul>`;
}

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();

  if (!value) {
    alert('Please enter an item name.');
    return;
  }

  items.push(value);
  input.value = '';
  renderList();
}

function removeItem(index) {
  items.splice(index, 1);
  renderList();
}

function clearList() {
  items.length = 0;
  renderList();
}

/* ══ 5. KEYBOARD EVENT ═══════════════════════════════════════════════════════ */

function onType(event) {
  const output = document.getElementById('keyOutput');
  const value  = event.target.value;

  // Conditional logic based on input length
  if (value.length === 0) {
    output.textContent = 'Typed: (empty)';
    output.style.color = '#7f8c8d';
  } else if (value.length < 5) {
    output.textContent = `Typed: "${value}" (keep going…)`;
    output.style.color = '#e67e22';
  } else {
    output.textContent = `Typed: "${value}" ✅`;
    output.style.color = '#27ae60';
  }
}
