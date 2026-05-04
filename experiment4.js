// Experiment 4: DOM manipulation using getElementById, getElementsByClassName, getElementsByName, and getElementsByTagName.

// This example is written for browser use and logs DOM access operations.

function runExperiment4() {
  console.log('Experiment 4: DOM manipulation examples');

  const idElement = document.getElementById('demoId');
  console.log('getElementById(#demoId):', idElement);

  const classElements = document.getElementsByClassName('demoClass');
  console.log('getElementsByClassName(.demoClass) count:', classElements.length);

  const nameElements = document.getElementsByName('demoName');
  console.log('getElementsByName([name="demoName"]) count:', nameElements.length);

  const tagElements = document.getElementsByTagName('p');
  console.log('getElementsByTagName(<p>) count:', tagElements.length);

  if (idElement) {
    idElement.innerHTML = 'Updated by experiment4.js';
    idElement.style.color = 'blue';
  }

  if (classElements.length > 0) {
    classElements[0].classList.add('highlighted');
  }

  if (nameElements.length > 0) {
    nameElements[0].value = 'changed by script';
  }

  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This paragraph was added with createElement and appendChild.';
  const container = document.getElementById('experiment4Container');
  if (container) {
    container.appendChild(newParagraph);
  }

  const tagList = document.getElementsByTagName('span');
  console.log('getElementsByTagName(<span>) count:', tagList.length);
}

function addNewItem() {
  const listContainer = document.getElementById('experiment4List');
  if (!listContainer) return;

  const item = document.createElement('li');
  item.textContent = `New item added at ${new Date().toLocaleTimeString()}`;
  item.className = 'demoClass';
  listContainer.appendChild(item);
}

if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    runExperiment4();

    const addButton = document.getElementById('experiment4Add');
    if (addButton) {
      addButton.addEventListener('click', addNewItem);
    }
  });
} else {
  console.log('Experiment 4: DOM methods require a browser environment.');
}
