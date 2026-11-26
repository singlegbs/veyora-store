'use strict';
// Store interactions; public configuration and sample data are in products.js.
const $ = s => document.querySelector(s);
const el = (tag, cls, text) => { const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n; };
const money = n => `GH₵ ${Number(n).toLocaleString('en-GH', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
const byId = id => PRODUCTS.find(p=>p.id===id);
let cart={}; try { cart=JSON.parse(sessionStorage.getItem('veyora-cart')||'{}')||{}; } catch(e) {}
let filter='All', query='', selected=[];
function saveCart(){ try{sessionStorage.setItem('veyora-cart',JSON.stringify(cart));}catch(e){} $('#cart-count').textContent=Object.values(cart).reduce((a,b)=>a+Number(b),0); }
function notify(message){ $('#status').textContent=message; const dialog=document.querySelector('dialog[open]'); if(dialog){let msg=dialog.querySelector('.dialog-status');if(!msg){msg=el('p','dialog-status');msg.setAttribute('role','status');dialog.append(msg);}msg.textContent=message;} }
function add(id){cart[id]=(cart[id]||0)+1;saveCart();notify('Added to your cart.');}
function makeCard(p){
 const card=el('article','card'), photo=el('div','photo'), image=el('img'); image.src=p.image;image.alt=p.name;image.loading='lazy';photo.append(image,el('span','badge',p.category));
 const details=el('div','details');details.append(el('span','stars','★★★★★ Sample rating'),el('span','price',money(p.price)));
 const buttons=el('div','buttons'), a=el('button','add','Add to Cart'), b=el('button','buy','Buy Now');a.type=b.type='button';a.addEventListener('click',()=>add(p.id));b.addEventListener('click',()=>checkout([{product:p,quantity:1}]));buttons.append(a,b);
 card.append(photo,el('h4','',p.name),details,buttons);return card;
}
const filters=['All','Appliances','Decor',...new Set(PRODUCTS.map(p=>p.subcategory))];
function renderCatalog(){const area=$('#filters');area.replaceChildren();filters.forEach(name=>{const b=el('button','filter'+(name===filter?' active':''),name);b.type='button';b.setAttribute('aria-pressed',String(name===filter));b.addEventListener('click',()=>{filter=name;renderCatalog();});area.append(b);});const list=PRODUCTS.filter(p=>(filter==='All'||p.category===filter||p.subcategory===filter)&&(`${p.name} ${p.category} ${p.subcategory}`.toLowerCase().includes(query)));$('#product-grid').replaceChildren(...list.map(makeCard));$('#empty-result').hidden=!!list.length;}
$('#search-form').addEventListener('submit',e=>{e.preventDefault();query=$('#search-input').value.trim().toLowerCase();renderCatalog();});
function entries(){return Object.entries(cart).map(([id,quantity])=>({product:byId(id),quantity:Number(quantity)})).filter(i=>i.product&&i.quantity>0);}
function total(items){return items.reduce((sum,i)=>sum+i.product.price*i.quantity,0);}
function renderCart(){const area=$('#cart-items');area.replaceChildren();const items=entries();if(!items.length)area.append(el('p','','Your cart is empty.'));items.forEach(({product,quantity})=>{const line=el('div','cart-line'),info=el('div'),controls=el('div','qty'),minus=el('button','','−'),plus=el('button','', '+');info.append(el('strong','',product.name),el('div','muted',money(product.price)));minus.setAttribute('aria-label','Remove one '+product.name);plus.setAttribute('aria-label','Add one '+product.name);minus.addEventListener('click',()=>{if(--cart[product.id]<=0)delete cart[product.id];saveCart();renderCart();});plus.addEventListener('click',()=>{cart[product.id]++;saveCart();renderCart();});controls.append(minus,el('span','',String(quantity)),plus);line.append(info,controls);area.append(line);});$('#cart-total').textContent=money(total(items));}
function checkout(items){if(!items.length){notify('Your cart is empty.');return;}if(!PAYSTACK_PUBLIC_KEY.trim()){notify('Checkout coming soon.');return;}selected=items;$('#checkout-summary').textContent=items.map(i=>`${i.quantity} × ${i.product.name}`).join(', ')+' — '+money(total(items));if($('#cart-dialog').open)$('#cart-dialog').close();$('#checkout-dialog').showModal();}
$('#checkout-form').addEventListener('submit',e=>{e.preventDefault();if(!PAYSTACK_PUBLIC_KEY.trim()){notify('Checkout coming soon.');return;}if(typeof PaystackPop==='undefined'){notify('Checkout is temporarily unavailable.');return;}new PaystackPop().newTransaction({key:PAYSTACK_PUBLIC_KEY,email:$('#customer-email').value.trim(),amount:Math.round(total(selected)*100),currency:'GHS',metadata:{products:selected.map(i=>({name:i.product.name,quantity:i.quantity,price:i.product.price}))},onSuccess:()=>{$('#checkout-dialog').close();notify('Payment submitted. Please contact the store about your order.');},onCancel:()=>notify('Checkout cancelled.'),onError:()=>notify('Checkout could not be completed.')});});
// Close the store dialog before opening Paystack so the payment window is not covered.
$('#checkout-form').addEventListener('submit',()=>$('#checkout-dialog').close(),true);


// Cart feedback: a brief blue checkmark and a three-second status message.
const originalNotify = notify;
let statusTimer;
notify = function(message) {
  originalNotify(message);
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    if ($('#status').textContent === message) $('#status').textContent = '';
    document.querySelectorAll('.dialog-status').forEach(node => {
      if (node.textContent === message) node.textContent = '';
    });
  }, 3000);
};
const addedTimers = new WeakMap();
document.addEventListener('click', event => {
  const button = event.target.closest('button.add');
  if (!button) return;
  clearTimeout(addedTimers.get(button));
  button.textContent = '✓ Added';
  button.style.setProperty('background-color', '#1769d2', 'important');
  button.style.setProperty('color', '#ffffff', 'important');
  button.style.setProperty('border-color', '#1769d2', 'important');
  addedTimers.set(button, setTimeout(() => {
    button.textContent = 'Add to Cart';
    button.style.removeProperty('background-color');
    button.style.removeProperty('color');
    button.style.removeProperty('border-color');
  }, 3000));
}, true);

// Reload at the top without changing normal in-page navigation.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const navEntry = performance.getEntriesByType('navigation')[0];
if (navEntry && navEntry.type === 'reload') {
  if (location.hash) history.replaceState(history.state, '', location.pathname + location.search);
  window.scrollTo(0, 0);
  window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
}

$('#open-cart').addEventListener('click',()=>{renderCart();$('#cart-dialog').showModal();});$('#cart-checkout').addEventListener('click',()=>checkout(entries()));document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#'+b.dataset.close).close()));
$('#signup').addEventListener('submit',e=>{e.preventDefault();$('#signup-status').textContent='Thanks! Signup is coming soon; your email was not saved.';e.currentTarget.reset();});$('#prev').addEventListener('click',()=>$('#rail').scrollBy({left:-300,behavior:'smooth'}));$('#next').addEventListener('click',()=>$('#rail').scrollBy({left:300,behavior:'smooth'}));$('#rail').replaceChildren(...PRODUCTS.map(makeCard));
// Guest-only data access: use the public REST endpoint without an auth client or session.
const supa=SUPABASE_URL&&SUPABASE_ANON_KEY?{from:table=>({insert:async values=>{const response=await fetch(SUPABASE_URL.replace(/\/$/,'')+'/rest/v1/'+encodeURIComponent(table),{method:'POST',headers:{apikey:SUPABASE_ANON_KEY,Authorization:'Bearer '+SUPABASE_ANON_KEY,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(values)});return {error:response.ok?null:await response.json().catch(()=>({message:'Order could not be saved'}))};}})}:null;
saveCart();renderCatalog();
