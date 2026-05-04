/**
 * Experiment 2 – External JavaScript file (script.js)
 * Linked to index.html via: <script src="script.js"></script>
 *
 * Demonstrates:
 *  - External script linking
 *  - Comments (single-line and multi-line)
 *  - JavaScript keywords: var, let, const, function, return, if, else, typeof
 */

/* ── External script loaded confirmation ─────────────────────────────────── */
console.log('script.js loaded successfully (external script).');

/**
 * runExternal()
 * Called when the user clicks "Run External Script" button in index.html.
 * Updates the #externalMsg paragraph with a message built from variables.
 */
function runExternal() {
  // Keyword: let – block-scoped variable
  let subject = 'External JavaScript';

  // Keyword: const – immutable binding
  const linkedVia = '<script src="script.js"></script>';

  // Keyword: var – function-scoped variable (older style)
  var info = `This text was set by ${subject}, linked via ${linkedVia}`;

  // Keyword: typeof
  console.log('typeof subject:', typeof subject);
  console.log('typeof linkedVia:', typeof linkedVia);

  // Keyword: if / else
  if (typeof document !== 'undefined') {
    const el = document.getElementById('externalMsg');
    if (el) {
      el.textContent = info;
      el.style.color = '#27ae60';
    }
  } else {
    // Running in Node.js (no DOM)
    console.log(info);
  }
}

/* ── Auto-run on DOMContentLoaded ────────────────────────────────────────── */
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM ready – external script.js is active.');
  });
}
