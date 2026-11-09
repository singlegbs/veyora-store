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

// Account menu uses the existing customer session and sign-out flow.
const accountDialog = document.createElement('dialog');
accountDialog.setAttribute('aria-labelledby', 'account-title');
accountDialog.innerHTML = '<div class="dialog-head"><h2 id="account-title">My Account</h2><button type="button" class="close" aria-label="Close account">×</button></div><p id="account-email"></p><p id="account-message" role="status"></p><button type="button" class="primary full" id="account-signout">Log out</button>';
document.body.append(accountDialog);
accountDialog.querySelector('.close').addEventListener('click', () => accountDialog.close());
accountDialog.addEventListener('click', e => { if (e.target === accountDialog) accountDialog.close(); });
$('#account-label').addEventListener('click', async () => {
  const {data, error} = await supa.auth.getSession();
  if (error || !data.session) { authState(null); notify('Please log in to your account.'); return; }
  $('#account-email').textContent = data.session.user.email || '';
  $('#account-message').textContent = '';
  accountDialog.showModal();
});
$('#account-signout').addEventListener('click', async () => {
  const button = $('#account-signout'); button.disabled = true;
  try { const {error} = await supa.auth.signOut(); if (error) throw error; authState(null); accountDialog.close(); notify('You are logged out.'); }
  catch (err) { $('#account-message').textContent = 'Could not log out. Please try again.'; }
  finally { button.disabled = false; }
});

// Accessible product details built from the public catalog only.
const detailStyle=document.createElement('style');
detailStyle.textContent=`.detail-dialog{width:min(760px,calc(100vw - 32px));max-height:90vh;overflow:auto}.detail-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px}.detail-photo{min-height:220px;background:#f5f7f5;border-radius:12px;display:grid;place-items:center;overflow:hidden}.detail-photo img{width:100%;max-height:360px;object-fit:contain}.detail-copy{min-width:0;overflow-wrap:anywhere}.detail-copy h2{margin-top:0}.detail-copy .buttons{display:flex;flex-wrap:wrap;gap:10px}.card .photo[role=button],.card h4[role=button]{cursor:pointer}.card .photo:focus-visible,.card h4:focus-visible{outline:3px solid #155bd5;outline-offset:3px}@media(max-width:600px){.detail-layout{grid-template-columns:1fr}.detail-photo{min-height:180px}.detail-photo img{max-height:240px}}`;
document.head.append(detailStyle);
const detailDialog=document.createElement('dialog');detailDialog.className='detail-dialog';detailDialog.setAttribute('aria-labelledby','detail-title');
detailDialog.innerHTML='<div class="dialog-head"><span></span><button type="button" class="close" aria-label="Close product details">×</button></div><div class="detail-layout"><div class="detail-photo"></div><div class="detail-copy"><h2 id="detail-title"></h2><p id="detail-category"></p><p id="detail-price" class="price"></p><p id="detail-description"></p><p id="detail-specs"></p><p>Availability: Please confirm before ordering.</p><div class="buttons"><button type="button" class="add" id="detail-add">Add to Cart</button><button type="button" class="buy" id="detail-buy">Buy Now</button></div></div></div>';
document.body.append(detailDialog);
let detailProduct=null;
function closeDetail(){if(!detailDialog.open)return;detailDialog.close();if(history.state && history.state.veyoraDetail)history.back();}
function openDetail(p){detailProduct=p;const imageBox=detailDialog.querySelector('.detail-photo');imageBox.replaceChildren();if(p.image){const image=document.createElement('img');image.src=p.image;image.alt=p.name;imageBox.append(image);}else imageBox.textContent='Photo coming soon';$('#detail-title').textContent=p.name;$('#detail-category').textContent=p.category;$('#detail-price').textContent=money(p.price);$('#detail-description').textContent=p.description||'';$('#detail-specs').textContent=p.specs ? String(p.specs) : 'Specifications available on request.';$('#detail-add').textContent='Add to Cart';history.pushState({veyoraDetail:true},'');detailDialog.showModal();}
detailDialog.querySelector('.close').addEventListener('click',closeDetail);
detailDialog.addEventListener('cancel',e=>{e.preventDefault();closeDetail();});
detailDialog.addEventListener('click',e=>{if(e.target===detailDialog)closeDetail();});
window.addEventListener('popstate',()=>{if(detailDialog.open)detailDialog.close();});
$('#detail-add').addEventListener('click',()=>{if(!detailProduct)return;add(detailProduct.id);const b=$('#detail-add');b.textContent='✓ Added';b.style.color='#155bd5';setTimeout(()=>{b.textContent='Add to Cart';b.style.color='';},1800);});
$('#detail-buy').addEventListener('click',()=>{if(!detailProduct)return;const p=detailProduct;closeDetail();checkout([{product:p,quantity:1}]);});
const basicCard=makeCard;
makeCard=function(p){const card=basicCard(p);for(const node of [card.querySelector('.photo'),card.querySelector('h4')]){node.tabIndex=0;node.setAttribute('role','button');node.setAttribute('aria-label','View details for '+p.name);node.addEventListener('click',()=>openDetail(p));node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDetail(p);}});}return card;};
renderCatalog();$('#rail').replaceChildren(...PRODUCTS.map(makeCard));

// Present supported catalog details as short features and structured specifications.
const featureStyle=document.createElement('style');
featureStyle.textContent=`.detail-facts h3{font-size:1rem;margin:1.1rem 0 .45rem}.detail-facts ul{padding-left:1.15rem;margin:.2rem 0}.detail-facts li{margin:.25rem 0}.detail-facts dl{margin:0}.detail-facts .spec-row{display:grid;grid-template-columns:minmax(100px,40%) minmax(0,1fr);gap:.5rem;padding:.35rem 0;border-bottom:1px solid #e5ebe6}.detail-facts dt{font-weight:600}.detail-facts dd{margin:0;overflow-wrap:anywhere}@media(max-width:380px){.detail-facts .spec-row{grid-template-columns:minmax(80px,40%) minmax(0,1fr)}}`;
document.head.append(featureStyle);
const originalOpenDetail=openDetail;
openDetail=function(p){
  originalOpenDetail(p);
  const old=$('#detail-specs'),box=document.createElement('div');
  box.id='detail-specs';box.className='detail-facts';old.replaceWith(box);
  const parts=String(p.specs||'').split(';').map(s=>s.trim().replace(/\.$/,'')).filter(Boolean);
  const features=parts.filter(s=>!/^model\s*:/i.test(s)).slice(0,6);
  if(features.length){
    const heading=document.createElement('h3'),list=document.createElement('ul');heading.textContent='Features';box.append(heading,list);
    features.forEach(value=>{const item=document.createElement('li');item.textContent=value;list.append(item);});
  }
  if(parts.length){
    const heading=document.createElement('h3'),list=document.createElement('dl');heading.textContent='Specifications';box.append(heading,list);
    parts.forEach(part=>{
      let label='Detail',value=part,split=part.indexOf(':');
      if(split>0){label=part.slice(0,split).trim();value=part.slice(split+1).trim();}
      else if(/\brpm\b/i.test(part))label='Spin speed';
      else if(/\bprogrammes?\b/i.test(part))label='Programmes';
      else if(/inch display/i.test(part))label='Display size';
      else if(/\bHP\b/i.test(part))label='Power';
      else if(/refrigerant/i.test(part))label='Refrigerant';
      else if(/front load|top load|twin tub/i.test(part))label='Loading type';
      else if(/\d-star/i.test(part))label='Energy rating';
      else if(/finish/i.test(part))label='Finish';
      const row=document.createElement('div'),term=document.createElement('dt'),definition=document.createElement('dd');
      row.className='spec-row';term.textContent=label;definition.textContent=value;row.append(term,definition);list.append(row);
    });
  }
};
