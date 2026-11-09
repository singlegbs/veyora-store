'use strict';
// Catalog cards and category navigation for the approved appliance selection.
makeCard = function(p) {
  const card=el('article','card'), photo=el('div','photo');
  if (p.image) { const image=el('img'); image.src=p.image; image.alt=p.name; image.loading='lazy'; photo.append(image); }
  else { const placeholder=el('span','photo-placeholder','Photo coming soon'); photo.append(placeholder); }
  photo.append(el('span','badge',p.category));
  const details=el('div','details'); details.append(el('span','price',money(p.price)));
  const buttons=el('div','buttons'), a=el('button','add','Add to Cart'), b=el('button','buy','Buy Now');
  a.type=b.type='button'; a.addEventListener('click',()=>add(p.id)); b.addEventListener('click',()=>checkout([{product:p,quantity:1}])); buttons.append(a,b);
  card.append(photo,el('h4','',p.name),el('p','product-description',p.description),details,buttons); return card;
};
renderCatalog = function() {
 const area=$('#filters'); area.replaceChildren();
 const names=['All',...new Set(PRODUCTS.map(p=>p.category))];
 names.forEach(name=>{const b=el('button','filter'+(name===filter?' active':''),name);b.type='button';b.setAttribute('aria-pressed',String(name===filter));b.addEventListener('click',()=>{filter=name;renderCatalog();});area.append(b);});
 const list=PRODUCTS.filter(p=>(filter==='All'||p.category===filter)&&(`${p.name} ${p.category}`.toLowerCase().includes(query)));
 $('#product-grid').replaceChildren(...list.map(makeCard)); $('#empty-result').hidden=!!list.length;
};
renderCatalog(); $('#rail').replaceChildren(...PRODUCTS.map(makeCard));

// Replace the sample checkout listeners with guest-order collection.
const originalCheckoutForm=$('#checkout-form');
const checkoutForm=originalCheckoutForm.cloneNode(true); originalCheckoutForm.replaceWith(checkoutForm);
checkout = function(items) {
 if(!items.length){notify('Your cart is empty.');return;}
 selected=items; $('#checkout-summary').textContent=items.map(i=>`${i.quantity} × ${i.product.name}`).join(', ')+' — '+money(total(items));
 $('#checkout-message').textContent=''; if($('#cart-dialog').open)$('#cart-dialog').close(); $('#checkout-dialog').showModal();
};
checkoutForm.addEventListener('submit', async e=>{
 e.preventDefault(); if(!checkoutForm.reportValidity())return;
 const message=$('#checkout-message'), button=$('#checkout-submit');
 if(!supa || typeof PaystackPop==='undefined' || !PAYSTACK_PUBLIC_KEY.trim()){message.textContent='Checkout is temporarily unavailable. Please try again later.';return;}
 const name=$('#customer-name').value.trim(), phone=$('#customer-phone').value.trim(), email=$('#customer-email').value.trim(), address=$('#customer-address').value.trim(), note=$('#customer-note').value.trim();
 if(!name || !phone || !email || !address){message.textContent='Please complete all required fields.';return;}
 const ref='VYR-'+crypto.randomUUID().replace(/-/g,'').slice(0,24).toUpperCase();
 const amount=total(selected), items=selected.map(i=>({name:i.product.name,quantity:i.quantity,unit_price:i.product.price}));
 button.disabled=true; message.textContent='Saving your order…';
 try {
  const {error}=await supa.from('orders').insert({buyer_name:name,phone,email,delivery_address:address,note:note||null,items,total_ghs:amount,paystack_reference:ref});
  if(error) throw error;
  $('#checkout-dialog').close();
  const parts=name.split(/\s+/), firstName=parts.shift(), lastName=parts.join(' ');
  new PaystackPop().newTransaction({key:PAYSTACK_PUBLIC_KEY,email,firstName,lastName,reference:ref,amount:Math.round(amount*100),currency:'GHS',metadata:{buyer_name:name,phone,delivery_address:address,products:items},
    onSuccess:()=>{ $('#confirmation-reference').textContent=ref; $('#confirmation-dialog').showModal(); },
    onCancel:()=>notify('Payment cancelled. Your order remains pending.'),
    onError:()=>notify('Payment could not be completed. Your order remains pending.')});
 } catch(err) { message.textContent='Could not save your order. Please try again.'; }
 finally {button.disabled=false;}
});

// An insert-only subscriber list; duplicate addresses receive the same response.
const oldSignup=$('#signup'), signup=oldSignup.cloneNode(true); oldSignup.replaceWith(signup);
signup.addEventListener('submit',async e=>{
 e.preventDefault(); if(!signup.reportValidity())return;
 const status=$('#signup-status'), button=signup.querySelector('button'), email=$('#signup-email').value.trim().toLowerCase();
 if(!supa){status.textContent='Signup is temporarily unavailable. Please try again later.';return;}
 button.disabled=true; status.textContent='Please wait…';
 try{const {error}=await supa.from('subscribers').insert({email}); if(error && error.code!=='23505')throw error; status.textContent='Thanks! You are on the list.'; signup.reset();}
 catch(err){status.textContent='Could not save your email. Please try again.';}
 finally{button.disabled=false;}
});
