const products = [
  { id: 1, name: "T-shirt", price: 399 },
  { id: 2, name: "Shoes", price: 999 },
  { id: 3, name: "Cap", price: 199 },
];

const productsDiv = document.getElementById("products");
const cartList = document.getElementById("cart");
const totalText = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <strong>${product.name}</strong> - ₹${product.price}<br>
      <button class="add-btn" data-id="${product.id}">Add to Cart</button>
    `;

    productsDiv.appendChild(div);
  });
}

displayProducts();

function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₹${item.price} × ${item.qty}
      <button class="inc" data-index="${index}">+</button>
      <button class="dec" data-index="${index}">-</button>
      <button class="del" data-index="${index}">Delete</button>
    `;

    cartList.appendChild(li);
  });

  calculateTotal();
}

function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalText.textContent = "Total: ₹" + total;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

productsDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    let id = event.target.dataset.id;
    let product = products.find((p) => p.id == id);

    let existing = cart.find((item) => item.id == id);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    saveCart();
    renderCart();
  }
});

cartList.addEventListener("click", (event) => {
  let index = event.target.dataset.index;

  if (event.target.classList.contains("inc")) {
    cart[index].qty++;
  }

  if (event.target.classList.contains("dec")) {
    cart[index].qty--;
    if (cart[index].qty === 0) {
      cart.splice(index, 1);
    }
  }

  if (event.target.classList.contains("del")) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
});

renderCart();
