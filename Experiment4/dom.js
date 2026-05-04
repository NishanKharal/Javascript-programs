/**
 * Experiment 4 – DOM Manipulation (dom.js)
 * Demonstrates:
 *   getElementById, getElementsByClassName,
 *   getElementsByName, getElementsByTagName
 */

/* ── Helper: write to the on-page log ───────────────────────────────────── */
function log(msg) {
  const el = document.getElementById('log');
  if (el) el.innerHTML += `<div>${msg}</div>`;
  console.log(msg);
}

/* ══ 1. getElementById ═══════════════════════════════════════════════════════
   Returns the single element whose id matches the given string.
*/
function demoGetById() {
  const el = document.getElementById('demoId');
  if (el) {
    el.textContent = '✅ Text changed by getElementById!';
    el.style.color = '#27ae60';
    log('getElementById → found element with id="demoId" and updated its text.');
  }
}

/* ══ 2. getElementsByClassName ═══════════════════════════════════════════════
   Returns an HTMLCollection of all elements with the given class name.
*/
function demoGetByClass() {
  const elements = document.getElementsByClassName('demoClass');
  log(`getElementsByClassName → found ${elements.length} element(s) with class "demoClass".`);

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('highlight');
    elements[i].textContent = `Class element ${i + 1} – highlighted ✅`;
  }
}

/* ══ 3. getElementsByName ════════════════════════════════════════════════════
   Returns a NodeList of all elements with the given name attribute.
*/
function demoGetByName() {
  const fields = document.getElementsByName('demoName');
  log(`getElementsByName → found ${fields.length} element(s) with name="demoName".`);

  fields.forEach(function (field, index) {
    field.value = `Filled by JS – field ${index + 1}`;
    field.style.borderColor = '#e67e22';
  });
}

/* ══ 4. getElementsByTagName ═════════════════════════════════════════════════
   Returns an HTMLCollection of all elements with the given tag name.
*/
function demoGetByTag() {
  const paragraphs = document.getElementsByTagName('p');
  log(`getElementsByTagName → found ${paragraphs.length} <p> element(s) on the page.`);

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = 'bold';
  }
}

/* ══ 5. Dynamic list manipulation ════════════════════════════════════════════
   createElement, appendChild, removeChild
*/
let itemCount = 2;

function addListItem() {
  itemCount++;
  const list = document.getElementById('dynamicList');
  if (!list) return;

  const li = document.createElement('li');          // create element
  li.textContent = `Item ${itemCount} (added by JS)`;
  list.appendChild(li);                              // append to DOM
  log(`createElement + appendChild → added "Item ${itemCount}" to the list.`);
}

function removeLastItem() {
  const list = document.getElementById('dynamicList');
  if (!list || !list.lastElementChild) return;

  const removed = list.removeChild(list.lastElementChild); // remove last child
  itemCount = Math.max(0, itemCount - 1);
  log(`removeChild → removed "${removed.textContent}" from the list.`);
}

/* ── Init ────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  console.log('Experiment 4 – dom.js loaded.');
});
