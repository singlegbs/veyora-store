'use strict';
// Guest orders are inserted before payment. The browser cannot mark orders paid.
const originalCheckoutForm=$('#checkout-form');
const checkoutForm=originalCheckoutForm.cloneNode(true); originalCheckoutForm.replaceWith(checkoutForm);
checkout = function(items) {
 if(!items.length){notify('Your cart is empty.');return;}
 selected=items; $('#checkout-summary').textContent=items.map(i=>`${i.quantity} × ${i.product.name}`).join(', ')+' — '+money(total(items));
 $('#checkout-message').textContent=''; if($('#cart-dialog').open)$('#cart-dialog').close(); $('#checkout-dialog').showModal();
};
checkoutForm.addEventListener('submit', async e=>{
 e.preventDefault(); if(!checkoutForm.reportValidity())return;
 const message=$('#checkout-message'),button=$('#checkout-submit');
 if(!supa || typeof PaystackPop==='undefined' || !PAYSTACK_PUBLIC_KEY.trim()){message.textContent='Checkout is temporarily unavailable. Please try again later.';return;}
 const name=$('#customer-name').value.trim(),phone=$('#customer-phone').value.trim(),email=$('#customer-email').value.trim(),address=$('#customer-address').value.trim(),note=$('#customer-note').value.trim();
 if(!name || !phone || !email || !address){message.textContent='Please complete all required fields.';return;}
 const ref='VYR-'+crypto.randomUUID().replace(/-/g,'').slice(0,24).toUpperCase();
 const amount=total(selected),items=selected.map(i=>({name:i.product.name,quantity:i.quantity,unit_price:i.product.price}));
 button.disabled=true;message.textContent='Saving your order…';let saved=false;
 try{
  const {error}=await supa.from('orders').insert({buyer_name:name,phone,email,delivery_address:address,note:note||null,items,total_ghs:amount,paystack_reference:ref});
  if(error)throw error;saved=true;
  $('#checkout-dialog').close();
  const parts=name.split(/\s+/),firstName=parts.shift(),lastName=parts.join(' ');
  new PaystackPop().newTransaction({key:PAYSTACK_PUBLIC_KEY,email,firstName,lastName,reference:ref,amount:Math.round(amount*100),currency:'GHS',metadata:{buyer_name:name,products:items},
   onSuccess:()=>{$('#confirmation-reference').textContent=ref;$('#confirmation-dialog').showModal();},
   onCancel:()=>notify('Payment cancelled. Your order remains pending.'),
   onError:()=>notify('Payment could not be completed. Your order remains pending.')});
 }catch(err){if(saved){notify('Payment could not be opened. Your order remains pending.');}else{message.textContent='Could not save your order. Please try again.';}}
 finally{button.disabled=false;}
});
// An insert-only subscriber list; duplicates receive the same response.
const oldSignup=$('#signup'),signup=oldSignup.cloneNode(true);oldSignup.replaceWith(signup);
signup.addEventListener('submit',async e=>{
 e.preventDefault();if(!signup.reportValidity())return;
 const status=$('#signup-status'),button=signup.querySelector('button'),email=$('#signup-email').value.trim().toLowerCase();
 if(!supa){status.textContent='Signup is temporarily unavailable. Please try again later.';return;}
 button.disabled=true;status.textContent='Please wait…';
 try{const {error}=await supa.from('subscribers').insert({email});if(error && error.code!=='23505')throw error;status.textContent='Thanks! You are on the list.';signup.reset();}
 catch(err){status.textContent='Could not save your email. Please try again.';}
 finally{button.disabled=false;}
});
