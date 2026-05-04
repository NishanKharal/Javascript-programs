// Experiment 2: Demonstrate internal/external script usage, comments, and keywords.

const message = 'JavaScript connected successfully.';
const pageTitle = 'Experiment 2: HTML + JS';
const themeColors = ['red', 'green', 'blue', 'orange'];

console.log('Experiment 2: Embed and link JavaScript with HTML');
console.log(message);
console.log('Page Title:', pageTitle);

function showCommentExample() {
  // Single-line comment example
  /* Multi-line comment example:
     This function uses JS keywords and logs text. */
  return 'Comments, keywords, and HTML integration are demonstrated.';
}

function updatePageInfo() {
  const infoElement = document.getElementById('experiment2Info');
  if (infoElement) {
    infoElement.innerHTML = `Page title is <strong>${pageTitle}</strong> and message is <em>${message}</em>.`;
  }
}

function createColorList() {
  const colorList = document.getElementById('experiment2Colors');
  if (!colorList) return;

  colorList.innerHTML = '';
  themeColors.forEach((color) => {
    const item = document.createElement('li');
    item.textContent = color;
    item.style.color = color;
    colorList.appendChild(item);
  });
}

function showPageTitleInConsole() {
  console.log(`The current document title is: ${document.title}`);
}

function changeBackground() {
  document.body.style.backgroundColor = themeColors[Math.floor(Math.random() * themeColors.length)];
}

if (typeof document !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    updatePageInfo();
    createColorList();
    showPageTitleInConsole();

    const button = document.getElementById('experiment2Button');
    if (button) {
      button.addEventListener('click', changeBackground);
    }
  });
} else {
  console.log(showCommentExample());
}
