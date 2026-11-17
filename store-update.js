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
// Helpful contact options in product details; no message is sent automatically.
const detailContact=document.createElement('a');
detailContact.className='detail-contact';detailContact.textContent='Order on WhatsApp';detailContact.target='_blank';detailContact.rel='noopener noreferrer';
detailContact.style.cssText='display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;border-radius:10px;background:#00382a;color:#fff;text-decoration:none;font-weight:700';
detailDialog.querySelector('.detail-copy .buttons').append(detailContact);
const detailTrust=document.createElement('p');detailTrust.style.cssText='font-size:.85rem;line-height:1.55;color:#53675d;margin:16px 0 0';
detailTrust.textContent='Based in Accra · WhatsApp +233 53 818 1600 · hello@veyoragh.com';
detailDialog.querySelector('.detail-copy .buttons').after(detailTrust);
const openDetailWithContact=openDetail;
openDetail=function(p){openDetailWithContact(p);detailContact.href='https://wa.me/233538181600?text='+encodeURIComponent('Hello Veyora, I am interested in '+p.name+' ('+money(p.price)+').');};

// Product card presentation, November 17 2026. Selling prices are never modified.
// Retail comparisons require an exact-model, current regular-price source; none verified.
(()=>{
 const recentlyRestored=new Set(["appliance-bruhmbtf32s","appliance-bruhmbfd500en","appliance-bruhmbfq510eng","appliance-bruhmbht60fb","appliance-bruhmbhv60fb","appliance-bruhmbwf070g","appliance-bruhmbmm20mb","appliance-bruhmbme20gb","appliance-bruhmbfm421500b","appliance-bruhmbfe571750b","appliance-bruhmbfe903200b","appliance-bruhmbsm700bs","appliance-bruhmbsm700bp","appliance-bruhmbtm650b","appliance-bruhmbkn15dwr","appliance-bruhmbkn15dbl","appliance-philipshr374011","appliance-philipshr730190"]);
 PRODUCTS.forEach(p=>{p.isNew=recentlyRestored.has(p.id);});
 const previousCard=makeCard;
 makeCard=function(p){
  const card=previousCard(p),photo=card.querySelector('.photo');
  card.querySelector('.badge')?.remove();card.querySelector('.product-description')?.remove();
  const brand=el('div','card-brand',p.brand||p.name.split(' ')[0]);
  photo.after(brand);
  if(p.isNew)photo.append(el('span','card-new','NEW'));
  const image=photo.querySelector('img');if(image){image.loading='lazy';image.decoding='async';}
  // A future retailReference must include exact-model evidence, date and regular price.
  const r=p.retailReference;
  if(r&&r.verified===true&&r.kind==='regular'&&r.sourceUrl&&r.checkedOn&&r.price>p.price){
   photo.append(el('span','card-save','Save ₵'+(r.price-p.price).toLocaleString('en-GH',{minimumFractionDigits:2,maximumFractionDigits:2})));
   const old=el('del','card-retail',money(r.price));old.title='Other retailer regular price, checked '+r.checkedOn;
   card.querySelector('.details').prepend(old);
  }
  return card;
 };
 const style=el('style');style.textContent=`
 .grid .card,.rail .card{background:#fff;border:0;border-radius:0;padding:0;box-shadow:none;transform:none;transition:none;display:flex;flex-direction:column;min-width:0}
 .card .photo{position:relative;background:#fff;border-radius:0;aspect-ratio:1/1;overflow:hidden;width:100%;margin:0 0 14px}
 .card .photo img{object-fit:contain;padding:0;filter:none;transform:none;transition:none;animation:none;width:100%;height:100%}
 .card .card-brand{font-size:10px;font-weight:600;line-height:1;color:#989898;text-transform:uppercase;letter-spacing:.04em;margin:0 0 9px}
 .card h4{color:#252525;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 9px;overflow-wrap:anywhere}
 .card .details{display:flex;flex-direction:column;align-items:flex-start;gap:5px;margin:0 0 12px;padding:0}
 .card .price{font-size:16px;font-weight:700;line-height:1.15;color:#252525;border:0;padding:0;white-space:normal}
 .card .card-retail{font-size:14px;font-weight:400;color:#777;line-height:1.15}
 .card .card-save{position:absolute;left:0;top:0;background:#cf2929;color:#fff;font-size:10px;font-weight:600;line-height:1;padding:4px 7px;border-radius:0;pointer-events:none}
 .card .card-new{position:absolute;left:8px;bottom:8px;background:#fff;color:#252525;border-radius:20px;padding:5px 9px;font-size:10px;line-height:1;font-weight:600;pointer-events:none}
 .card .photo-placeholder{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f5f5f5;color:#777;font-size:12px}
 .grid .card .buttons,.rail .card .buttons{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:0}
 .card .buttons button{flex:1;min-width:0;min-height:40px;padding:8px 5px;border-radius:3px;font-size:11px;font-weight:600;box-shadow:none}
 .card .buttons .add{background:#fff;border:1px solid #ddd;color:#252525}
 .card .buttons .buy{background:#252525;border:1px solid #252525;color:#fff}
 .card .buttons .add:hover{border-color:#a9ed36;background:#fff}
 .grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 22px}
 .rail{grid-auto-columns:calc((100% - 66px)/4);gap:22px}
 @media(max-width:1000px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
 @media(max-width:700px){.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:26px 14px}.rail{grid-auto-columns:calc((100% - 14px)/2);gap:14px}.card .photo{margin-bottom:12px}}
 `;
 document.head.append(style);renderCatalog();$('#rail').replaceChildren(...PRODUCTS.map(makeCard));
})();

// Full-page product routes. Catalog prices and checkout remain unchanged.
(()=>{
 const page=el('section','product-page');page.id='product-page';page.hidden=true;
 document.querySelector('main').before(page);
 const css=el('style');css.textContent=`
 body.product-open{background:#fff;color:#00382a}
 body.product-open>.hero,body.product-open>main,body.product-open>.footer{display:none!important}
 .product-page{background:#fff;width:100%;padding:18px max(16px,calc((100vw - 1160px)/2)) 120px;box-sizing:border-box;min-height:80vh}
 .product-page *{box-sizing:border-box}.product-page [hidden]{display:none!important}
 .pp-back{border:0;background:#edf5e9;color:#00382a;padding:10px 16px;border-radius:30px;font:inherit;cursor:pointer;margin-bottom:18px}
 .pp-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:40px;align-items:start}
 .pp-gallery,.pp-copy{min-width:0}.pp-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain;touch-action:pan-x pan-y;border-radius:0;background:white}
 .pp-track::-webkit-scrollbar{display:none}.pp-slide{flex:0 0 100%;width:100%;height:470px;scroll-snap-align:start;display:grid;place-items:center;margin:0}
 .pp-slide img{display:block;width:100%;height:100%;max-height:470px;object-fit:contain}
 .pp-progress{height:3px;background:#e8ece7;margin:14px 0}.pp-progress span{display:block;height:100%;background:#00382a;transition:transform .15s}
 .pp-thumbs{display:flex;gap:8px;overflow:auto;margin-bottom:24px}.pp-thumbs button{flex:0 0 58px;width:58px;height:58px;padding:3px;background:#fff;border:1px solid #e5e9e3;border-radius:3px;cursor:pointer}.pp-thumbs button[aria-current=true]{border:2px solid #00382a}.pp-thumbs img{width:100%;height:100%;object-fit:contain}
 .pp-crumb{display:flex;flex-wrap:wrap;gap:7px;font-size:12px;color:#69736c;margin:0 0 18px}.pp-crumb a{color:inherit;text-decoration:none}.pp-copy h1{font-size:clamp(26px,2.6vw,36px);font-weight:750;line-height:1.2;margin:0 0 20px;overflow-wrap:anywhere;color:#00382a}
 .pp-price{font-size:26px;font-weight:750;margin:0 0 22px}.pp-features{padding-left:19px;margin:0 0 24px;line-height:1.65;font-size:14px}.pp-features li{margin:7px 0}
 .pp-copy details{border-top:1px solid #e0e7df;padding:18px 0;font-size:14px;line-height:1.65}.pp-copy summary{cursor:pointer;font-size:16px;font-weight:650;list-style:none;display:flex;justify-content:space-between;gap:16px}.pp-copy summary:after{content:'+'}.pp-copy details[open] summary:after{content:'−'}.pp-copy details p{margin-bottom:0}
 .pp-spec{display:grid;grid-template-columns:minmax(85px,38%) minmax(0,1fr);gap:12px;padding:9px 0;border-bottom:1px solid #edf0eb}.pp-spec dt{font-weight:600}.pp-spec dd{margin:0;overflow-wrap:anywhere}
 .pp-sku{color:#6b746c;font-size:12px;border-top:1px solid #e0e7df;padding-top:16px;overflow-wrap:anywhere}
 .pp-actions{display:flex;gap:12px;margin:24px 0 16px;align-items:stretch;flex-wrap:wrap}.pp-quantity{display:flex;align-items:center;border:1px solid #d5ddd3;border-radius:4px;min-height:50px}.pp-quantity button{border:0;background:#fff;width:36px;height:48px;font-size:22px;color:#00382a;cursor:pointer}.pp-quantity output{min-width:26px;text-align:center;font-size:16px}.pp-add{flex:1;min-width:150px;background:#111;color:#fff;border:0;border-radius:4px;padding:15px 20px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.pp-add:hover{background:#00382a}.pp-checkout,.pp-chat{font:inherit;font-size:13px;color:#00382a;background:transparent;border:0;padding:10px 0;text-decoration:underline;cursor:pointer}.pp-links{display:flex;gap:24px;flex-wrap:wrap}
 .pp-section{margin-top:48px}.pp-section h2{font-size:24px;margin:0 0 24px}.pp-section .grid{display:grid}.pp-empty{font-size:14px;color:#69736c}
 @media(max-width:700px){.product-page{padding:14px 16px 120px}.pp-layout{grid-template-columns:1fr;gap:0}.pp-slide{height:390px;height:min(44svh,370px);min-height:300px}.pp-slide img{max-height:430px}.pp-copy h1{font-size:32px}.pp-features{font-size:16px}.pp-crumb{margin-top:3px}.pp-actions{position:static}.pp-section{margin-top:38px}}
 `;document.head.append(css);
 let current=null,qty=1,previousScroll=0;
 const key='veyora-recent-products';
 const recent=()=>{try{const a=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(a)?a.filter(x=>typeof x==='string').slice(0,12):[];}catch{return [];}};
 const route=()=>PRODUCTS.find(p=>p.id===new URL(location.href).searchParams.get('product'));
 function leave(){page.hidden=true;document.body.classList.remove('product-open');document.title='Veyora | Home appliances & decor';window.scrollTo(0,previousScroll);}
 function shop(category){const u=new URL(location.href);u.searchParams.delete('product');u.hash='shop';history.pushState({},'',u);filter=category||'All';renderCatalog();leave();document.querySelector('#shop')?.scrollIntoView();}
 function showProduct(p,push=true){
  if(detailDialog.open)detailDialog.close();
  if(!document.body.classList.contains('product-open'))previousScroll=scrollY;
  const earlier=recent().filter(id=>id!==p.id);current=p;qty=1;
  if(push){const u=new URL(location.href);u.searchParams.set('product',p.id);u.hash='';history.pushState({veyoraProduct:true},'',u);}
  page.replaceChildren();page.hidden=false;document.body.classList.add('product-open');document.title=p.name+' | Veyora';
  const back=el('button','pp-back','← Back to shop');back.type='button';back.onclick=()=>{if(history.state?.veyoraProduct)history.back();else shop();};page.append(back);
  const layout=el('div','pp-layout'),gallery=el('div','pp-gallery'),copy=el('div','pp-copy');layout.append(gallery,copy);page.append(layout);
  const photos=[...new Set([p.image,...(p.images||[])].filter(Boolean))];
  const track=el('div','pp-track');track.setAttribute('aria-label','Product photo gallery');track.tabIndex=0;
  const progress=el('div','pp-progress'),bar=el('span');progress.append(bar);bar.style.width=(100/Math.max(1,photos.length))+'%';
  const thumbs=el('div','pp-thumbs');thumbs.setAttribute('aria-label','Choose product photo');
  photos.forEach((url,i)=>{const slide=el('figure','pp-slide'),img=el('img');img.alt=p.name+' — photo '+(i+1);img.loading=i?'lazy':'eager';img.decoding='async';if(!i)img.fetchPriority='high';img.src=url;img.onerror=()=>{img.hidden=true;slide.textContent='Photo unavailable';};slide.append(img);track.append(slide);const b=el('button'),t=el('img');b.type='button';b.setAttribute('aria-label','Show photo '+(i+1));b.setAttribute('aria-current',String(i===0));t.src=url;t.alt='';t.loading='lazy';b.append(t);b.onclick=()=>track.scrollTo({left:i*track.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});thumbs.append(b);});
  if(!photos.length)track.append(el('div','pp-slide','Photo coming soon'));
  function update(){const i=Math.round(track.scrollLeft/Math.max(1,track.clientWidth));bar.style.transform='translateX('+(i*100)+'%)';[...thumbs.children].forEach((b,n)=>b.setAttribute('aria-current',String(i===n)));}
  track.addEventListener('scroll',update,{passive:true});track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();track.scrollBy({left:track.clientWidth*(e.key==='ArrowRight'?1:-1),behavior:'smooth'});}});gallery.append(track,progress,thumbs);
  const crumb=el('nav','pp-crumb');crumb.setAttribute('aria-label','Breadcrumb');[['Home','home'],['Shop','shop'],[p.category,'category']].forEach(([label,dest],i)=>{if(i)crumb.append(el('span','','›'));const a=el('a','',label);a.href=dest==='home'?'#home':'#shop';a.onclick=e=>{e.preventDefault();if(dest==='home'){const u=new URL(location.href);u.searchParams.delete('product');u.hash='home';history.pushState({},'',u);leave();scrollTo(0,0);}else shop(dest==='category'?p.category:undefined);};crumb.append(a);});copy.append(crumb,el('h1','',p.name),el('p','pp-price',money(p.price)));
  const parts=String(p.specs||'').split(';').map(s=>s.trim()).filter(Boolean);
  const safe=parts.filter(s=>!/^Product:|supplier|wholesale|stock quantity|delivery/i.test(s));const features=el('ul','pp-features');safe.slice(0,5).forEach(s=>features.append(el('li','',s.replace(/^Feature:\s*/i,''))));if(features.children.length)copy.append(features);
  const description=el('details'),ds=el('summary','','Description');description.append(ds,el('p','',p.description||''));
  const info=el('details'),is=el('summary','','Additional information'),dl=el('dl');info.append(is,dl);safe.forEach(s=>{const n=s.indexOf(':'),row=el('div','pp-spec');row.append(el('dt','',n>0?s.slice(0,n):'Detail'),el('dd','',n>0?s.slice(n+1).trim():s));dl.append(row);});copy.append(description,info);
  const model=parts.find(s=>/^Model(?: code)?:/i.test(s));const code=model?model.split(':').slice(1).join(':').trim():(p.name.match(/\b[A-Z]+[A-Z0-9]*[-/][A-Z0-9/-]+\b/)||p.name.match(/\b[A-Z]+\d[A-Z0-9]+\b/)||[])[0];if(code)copy.append(el('p','pp-sku','SKU: '+code));
  const actions=el('div','pp-actions'),stepper=el('div','pp-quantity'),minus=el('button','','−'),value=el('output','','1'),plus=el('button','','+'),addButton=el('button','pp-add','ADD TO CART');minus.type=plus.type=addButton.type='button';minus.setAttribute('aria-label','Decrease quantity');plus.setAttribute('aria-label','Increase quantity');value.setAttribute('aria-label','Quantity');value.setAttribute('aria-live','polite');minus.onclick=()=>{qty=Math.max(1,qty-1);value.textContent=qty;};plus.onclick=()=>{qty++;value.textContent=qty;};addButton.onclick=()=>{for(let i=0;i<qty;i++)add(p.id);addButton.textContent='✓ ADDED TO CART';setTimeout(()=>addButton.textContent='ADD TO CART',1500);};stepper.append(minus,value,plus);actions.append(stepper,addButton);copy.append(actions);
  const links=el('div','pp-links'),buy=el('button','pp-checkout','Buy now'),chat=el('a','pp-chat','Chat on WhatsApp');buy.type='button';buy.onclick=()=>checkout([{product:p,quantity:qty}]);chat.href='https://wa.me/233538181600?text='+encodeURIComponent('Hello Veyora, I am interested in '+p.name+'.');chat.target='_blank';chat.rel='noopener';links.append(buy,chat);copy.append(links);
  function cards(title,products,empty){const section=el('section','pp-section');section.append(el('h2','',title));if(products.length){const grid=el('div','grid');grid.append(...products.map(makeCard));section.append(grid);}else section.append(el('p','pp-empty',empty));page.append(section);}
  cards('Related Products',PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4),'More products coming soon.');cards('Recently Viewed',earlier.map(id=>PRODUCTS.find(x=>x.id===id)).filter(Boolean).slice(0,4),'Products viewed recently will appear here.');
  try{localStorage.setItem(key,JSON.stringify([p.id,...earlier].slice(0,12)));}catch{}
  scrollTo(0,0);back.focus({preventScroll:true});
 }
 openDetail=p=>showProduct(p);
 window.addEventListener('popstate',()=>{const p=route();if(p)showProduct(p,false);else leave();});
 window.addEventListener('hashchange',()=>{if(location.hash&&document.body.classList.contains('product-open')){const u=new URL(location.href);u.searchParams.delete('product');history.replaceState({},'',u);leave();document.querySelector(location.hash)?.scrollIntoView();}});
 const initial=route();if(initial)showProduct(initial,false);
})();
