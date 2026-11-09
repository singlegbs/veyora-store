// Veyora storefront interactions. Catalog and public key live in products.js.
'use strict';
const $ = (selector) => document.querySelector(selector);
const money = (n) => `GH₵ ${Number(n).toFixed(2)}`;
const byId = (id) => PRODUCTS.find((p) => p.id === id);
let cart = {};
try { cart = JSON.parse(sessionStorage.getItem('veyora-cart') || '{}') || {}; }
catch (_) { cart = {}; }
let selected = [];
let filter = 'All';
function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
function saveCart() {
  try { sessionStorage.setItem('veyora-cart', JSON.stringify(cart)); } catch (_) {}
  $('#cart-count').textContent = Object.values(cart).reduce((a, b) => a + b, 0);
}
function notify(message) {
  $('#status').textContent = message;
  const openDialog = document.querySelector('dialog[open]');
  if (openDialog) {
    let msg = openDialog.querySelector('.dialog-status');
    if (!msg) { msg = element('p', 'dialog-status'); openDialog.append(msg); }
    msg.setAttribute('role', 'status');
    msg.textContent = message;
  }
}
function add(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  notify('Added to your cart.');
}
function makeCard(p) {
  const card = element('article', 'card');
  const photo = element('div', 'photo');
  const image = element('img');
  image.src = p.image; image.alt = p.name; image.loading = 'lazy';
  photo.append(image, element('span', 'badge', p.category));
  const title = element('h4', '', p.name);
  const desc = element('p', 'desc', p.description);
  const details = element('div', 'details');
  details.append(element('span', 'stars', '★★★★★ Sample rating'),
    element('span', 'price', money(p.price)));
  const buttons = element('div', 'buttons');
  const addButton = element('button', 'add', 'Add to Cart');
  const buyButton = element('button', 'buy', 'Buy Now');
  addButton.type = buyButton.type = 'button';
  addButton.addEventListener('click', () => add(p.id));
  buyButton.addEventListener('click', () => checkout([{product:p, quantity:1}]));
  buttons.append(addButton, buyButton);
  card.append(photo, title, desc, details, buttons);
  return card;
}
const filters = ['All', 'Appliances', 'Decor',
  ...new Set(PRODUCTS.map((p) => p.subcategory))];
function renderFilters() {
  const area = $('#filters'); area.replaceChildren();
  filters.forEach((name) => {
    const b = element('button', 'filter' + (name === filter ? ' active' : ''), name);
    b.type = 'button'; b.setAttribute('aria-pressed', String(name === filter));
    b.addEventListener('click', () => { filter = name; renderCatalog(); });
    area.append(b);
  });
}
function renderCatalog() {
  renderFilters();
  ['Appliances', 'Decor'].forEach((category) => {
    const section = $('#' + category.toLowerCase());
    const grid = $('#' + category.toLowerCase() + '-grid');
    const list = PRODUCTS.filter((p) => p.category === category &&
      (filter === 'All' || p.category === filter || p.subcategory === filter));
    grid.replaceChildren(...list.map(makeCard));
    section.hidden = list.length === 0;
  });
}
function entries() {
  return Object.entries(cart).map(([id, quantity]) => ({product:byId(id), quantity}))
    .filter((item) => item.product && item.quantity > 0);
}
function total(items) {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
function renderCart() {
  const area = $('#cart-items'); area.replaceChildren();
  const items = entries();
  if (!items.length) area.append(element('p', '', 'Your cart is empty.'));
  items.forEach(({product, quantity}) => {
    const line = element('div', 'cart-line');
    const info = element('div');
    info.append(element('strong', '', product.name),
      element('div', 'muted', money(product.price)));
    const controls = element('div', 'qty');
    const minus = element('button', '', '−');
    const plus = element('button', '', '+');
    minus.setAttribute('aria-label', 'Remove one ' + product.name);
    plus.setAttribute('aria-label', 'Add one ' + product.name);
    minus.addEventListener('click', () => {
      cart[product.id]--; if (!cart[product.id]) delete cart[product.id];
      saveCart(); renderCart();
    });
    plus.addEventListener('click', () => {
      cart[product.id]++; saveCart(); renderCart();
    });
    controls.append(minus, element('span', '', String(quantity)), plus);
    line.append(info, controls); area.append(line);
  });
  $('#cart-total').textContent = money(total(items));
}
function checkout(items) {
  if (!items.length) { notify('Your cart is empty.'); return; }
  if (!PAYSTACK_PUBLIC_KEY.trim()) { notify('Checkout coming soon.'); return; }
  selected = items;
  $('#checkout-summary').textContent = items.map((i) =>
    `${i.quantity} × ${i.product.name}`).join(', ') + ' — ' + money(total(items));
  if ($('#cart-dialog').open) $('#cart-dialog').close();
  $('#checkout-dialog').showModal();
}
$('#checkout-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!PAYSTACK_PUBLIC_KEY.trim()) { notify('Checkout coming soon.'); return; }
  if (typeof PaystackPop === 'undefined') {
    notify('Checkout is temporarily unavailable. Please try again.'); return;
  }
  const popup = new PaystackPop();
  popup.newTransaction({
    key: PAYSTACK_PUBLIC_KEY, email: $('#customer-email').value.trim(),
    amount: Math.round(total(selected) * 100), currency: 'GHS',
    metadata: {products: selected.map((i) => ({
      name:i.product.name, quantity:i.quantity, price:i.product.price
    }))},
    onSuccess: () => { $('#checkout-dialog').close();
      notify('Payment submitted. Please contact the store about your order.'); },
    onCancel: () => notify('Checkout cancelled.'),
    onError: () => notify('Checkout could not be completed. Please try again.')
  });
});
$('#open-cart').addEventListener('click', () => { renderCart(); $('#cart-dialog').showModal(); });
$('#cart-checkout').addEventListener('click', () => checkout(entries()));
document.querySelectorAll('[data-close]').forEach((button) =>
  button.addEventListener('click', () => $('#' + button.dataset.close).close()));
document.querySelectorAll('[data-nav]').forEach((link) =>
  link.addEventListener('click', () => { filter = link.dataset.nav; renderCatalog(); }));
$('#signup').addEventListener('submit', (event) => {
  event.preventDefault();
  $('#signup-status').textContent = 'Thanks! Signup is coming soon; your email was not saved.';
  event.currentTarget.reset();
});
$('#prev').addEventListener('click', () => $('#rail').scrollBy({left:-300, behavior:'smooth'}));
$('#next').addEventListener('click', () => $('#rail').scrollBy({left:300, behavior:'smooth'}));
$('#rail').replaceChildren(...PRODUCTS.map(makeCard));
saveCart(); renderCatalog();
