// Experiment 3: Use BOM objects like window, history, navigator, and screen.

console.log('Experiment 3: Browser Object Model (BOM)');

function showBomInfo() {
  if (typeof window !== 'undefined') {
    console.log('Window object exists.');
    console.log('Window inner width:', window.innerWidth);
    console.log('Window inner height:', window.innerHeight);
    console.log('Window location URL:', window.location.href);
    console.log('Window protocol:', window.location.protocol);
  }

  if (typeof navigator !== 'undefined') {
    console.log('Navigator user agent:', navigator.userAgent);
    console.log('Navigator platform:', navigator.platform);
    console.log('Navigator online:', navigator.onLine);
  }

  if (typeof screen !== 'undefined') {
    console.log('Screen width:', screen.width);
    console.log('Screen height:', screen.height);
    console.log('Screen color depth:', screen.colorDepth);
  }

  if (typeof history !== 'undefined') {
    console.log('History length:', history.length);
    console.log('Can go back?', history.length > 1);
  }
}

function autoResizeMessage() {
  if (typeof document !== 'undefined') {
    const message = document.getElementById('bomMessage');
    if (message) {
      message.innerHTML = `This page was sized at ${window.innerWidth} x ${window.innerHeight}.`;
    }
  }
}

if (typeof window !== 'undefined') {
  showBomInfo();
  window.addEventListener('resize', () => {
    console.log('Window resized to:', window.innerWidth, window.innerHeight);
    autoResizeMessage();
  });
  window.addEventListener('DOMContentLoaded', autoResizeMessage);
} else {
  console.log('Experiment 3: BOM objects require a browser environment.');
}
