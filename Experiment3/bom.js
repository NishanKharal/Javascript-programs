/**
 * Experiment 3 – BOM Objects (bom.js)
 * Demonstrates: Window, History, Navigator, Screen objects
 */

/* ── Helper: display text in the <pre> element ───────────────────────────── */
function display(text) {
  const el = document.getElementById('result');
  if (el) el.textContent = text;
  console.log(text);
}

/* ══ 1. WINDOW OBJECT ════════════════════════════════════════════════════════
   The global object in the browser. Every global variable / function is a
   property of window.
*/
function showWindow() {
  const info = [
    '── Window Object ──',
    `window.innerWidth   : ${window.innerWidth}`,
    `window.innerHeight  : ${window.innerHeight}`,
    `window.outerWidth   : ${window.outerWidth}`,
    `window.outerHeight  : ${window.outerHeight}`,
    `window.location.href: ${window.location.href}`,
    `window.location.host: ${window.location.host}`,
    `window.location.pathname: ${window.location.pathname}`,
    `window.name         : "${window.name}"`,
    `window.scrollX      : ${window.scrollX}`,
    `window.scrollY      : ${window.scrollY}`,
  ].join('\n');

  display(info);
}

function openNewTab() {
  // window.open(url, target, features)
  window.open('https://www.example.com', '_blank', 'noopener,noreferrer');
}

function scrollDemo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  display('Scrolled to top using window.scrollTo()');
}

/* ══ 2. HISTORY OBJECT ═══════════════════════════════════════════════════════
   Provides access to the browser session history.
*/
function showHistory() {
  const info = [
    '── History Object ──',
    `history.length : ${history.length}`,
    '(Use history.back() / history.forward() / history.go(n) to navigate)',
  ].join('\n');

  display(info);
}

/* ══ 3. NAVIGATOR OBJECT ═════════════════════════════════════════════════════
   Contains information about the browser and operating system.
*/
function showNavigator() {
  const info = [
    '── Navigator Object ──',
    `navigator.appName      : ${navigator.appName}`,
    `navigator.appVersion   : ${navigator.appVersion}`,
    `navigator.userAgent    : ${navigator.userAgent}`,
    `navigator.platform     : ${navigator.platform}`,
    `navigator.language     : ${navigator.language}`,
    `navigator.onLine       : ${navigator.onLine}`,
    `navigator.cookieEnabled: ${navigator.cookieEnabled}`,
    `navigator.hardwareConcurrency: ${navigator.hardwareConcurrency}`,
  ].join('\n');

  display(info);
}

/* ══ 4. SCREEN OBJECT ════════════════════════════════════════════════════════
   Contains information about the user's screen / display.
*/
function showScreen() {
  const info = [
    '── Screen Object ──',
    `screen.width       : ${screen.width}`,
    `screen.height      : ${screen.height}`,
    `screen.availWidth  : ${screen.availWidth}`,
    `screen.availHeight : ${screen.availHeight}`,
    `screen.colorDepth  : ${screen.colorDepth}`,
    `screen.pixelDepth  : ${screen.pixelDepth}`,
  ].join('\n');

  display(info);
}

/* ── Auto-log on load ────────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', function () {
  console.log('Experiment 3 – bom.js loaded.');
  console.log('Navigator userAgent:', navigator.userAgent);
  console.log('Screen resolution  :', screen.width, 'x', screen.height);
});
