// Experiment 5: Dynamic page behavior using JavaScript events, conditional logic, loops, and innerHTML.

const products = [
  { name: 'Laptop', category: 'Electronics', price: 850 },
  { name: 'Notebook', category: 'Stationery', price: 3 },
  { name: 'Smartphone', category: 'Electronics', price: 550 },
  { name: 'Pen', category: 'Stationery', price: 1.5 },
];

function renderProducts(filterText = '') {
  const result = document.getElementById('experiment5Result');
  if (!result) return;

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(filterText.toLowerCase()) ||
    product.category.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filtered.length === 0) {
    result.innerHTML = '<p>No products match the search.</p>';
    return;
  }

  const listHtml = filtered
    .map(
      (product) =>
        `<li>${product.name} - ${product.category} - $${product.price.toFixed(2)}</li>`
    )
    .join('');

  result.innerHTML = `<ul>${listHtml}</ul>`;
}

function experiment5() {
  const searchInput = document.getElementById('experiment5Search');
  const filterText = searchInput ? searchInput.value : '';
  renderProducts(filterText);
}

function addProduct() {
  const nameInput = document.getElementById('experiment5Name');
  const categoryInput = document.getElementById('experiment5Category');
  const priceInput = document.getElementById('experiment5Price');

  if (!nameInput || !categoryInput || !priceInput) return;

  const newProduct = {
    name: nameInput.value.trim(),
    category: categoryInput.value.trim(),
    price: parseFloat(priceInput.value),
  };

  if (!newProduct.name || !newProduct.category || Number.isNaN(newProduct.price)) {
    alert('Please enter valid product details.');
    return;
  }

  products.push(newProduct);
  renderProducts('');
  nameInput.value = '';
  categoryInput.value = '';
  priceInput.value = '';
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const searchButton = document.getElementById('experiment5Button');
    if (searchButton) {
      searchButton.addEventListener('click', experiment5);
    }

    const addButton = document.getElementById('experiment5AddButton');
    if (addButton) {
      addButton.addEventListener('click', addProduct);
    }
  });
} else {
  console.log('Experiment 5: Use in a browser with HTML elements to see dynamic updates.');
}
