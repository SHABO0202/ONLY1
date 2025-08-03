const products = [
{ id: 1, name: "Wireless Earbuds", price: 25, img: "https://via.placeholder.com/150" },
{ id: 2, name: "Smartwatch", price: 45, img: "https://via.placeholder.com/150" },
];

function loadProducts() {
const container = document.getElementById("products");
products.forEach(p => {
const card = document.createElement("div");
card.innerHTML = `
<img src="${p.img}" width="100" /><br/>
<strong>${p.name}</strong><br/>
$${p.price}<br/>
<button onclick="addToCart(${p.id})">Add to Cart</button>
`;
container.appendChild(card);
});
}

function addToCart(id) {
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const item = products.find(p => p.id === id);
cart.push(item);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart!");
}

window.onload = loadProducts;
