// Cart state and product thumbnails.
(() => {
  const css=document.createElement('style');
  css.textContent=`.cart-line{display:grid;grid-template-columns:68px minmax(0,1fr);align-items:start;gap:12px}.cart-thumb{width:68px;height:68px;object-fit:contain;background:#f3f6f2;border-radius:8px}.cart-copy{min-width:0;overflow-wrap:anywhere}.cart-controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:8px}.cart-remove{border:0;background:transparent;color:#00382a;text-decoration:underline;padding:8px;min-height:40px}.add.is-added{background:#1769d2!important;color:white!important;border-color:#1769d2!important}.checkout-line{display:flex;gap:10px;align-items:center;margin:10px 0;min-width:0}.checkout-line span{min-width:0;overflow-wrap:anywhere}.checkout-total{font-weight:800}`;
  document.head.append(css);
  function thumb(product){const img=el('img','cart-thumb');if(product.image){img.src=product.image;img.alt=product.name;img.loading='lazy';}else{img.alt='Photo coming soon';}return img;}
  function sync(){document.querySelectorAll('button.add[data-product-id]').forEach(b=>{const active=Number(cart[b.dataset.productId])>0;b.textContent=active?'✓ Added':'Add to Cart';b.classList.toggle('is-added',active);b.setAttribute('aria-pressed',String(active));});const b=$('#detail-add');if(b&&detailProduct){const active=Number(cart[detailProduct.id])>0;b.textContent=active?'✓ Added':'Add to Cart';b.classList.toggle('is-added',active);b.setAttribute('aria-pressed',String(active));}}
  const save=saveCart;saveCart=function(){save();sync();};
  const cardMaker=makeCard;makeCard=function(p){const card=cardMaker(p),b=card.querySelector('button.add');if(b){b.dataset.productId=p.id;const active=Number(cart[p.id])>0;b.textContent=active?'✓ Added':'Add to Cart';b.classList.toggle('is-added',active);b.setAttribute('aria-pressed',String(active));}return card;};
  const detailOpener=openDetail;openDetail=function(p){detailOpener(p);sync();};
  window.addEventListener('click',event=>{const b=event.target.closest('button.add');if(!b)return;const id=b.id==='detail-add'&&detailProduct?detailProduct.id:b.dataset.productId;if(!id)return;event.preventDefault();event.stopImmediatePropagation();if(Number(cart[id])>0){delete cart[id];saveCart();notify('Removed from your cart.');}else{cart[id]=1;saveCart();notify('Added to your cart.');}if($('#cart-dialog').open)renderCart();},true);
  renderCart=function(){const area=$('#cart-items'),items=entries();area.replaceChildren();if(!items.length)area.append(el('p','','Your cart is empty.'));items.forEach(({product,quantity})=>{const line=el('div','cart-line'),copy=el('div','cart-copy'),controls=el('div','cart-controls'),qty=el('div','qty'),minus=el('button','','−'),plus=el('button','', '+'),remove=el('button','cart-remove','Remove');minus.type=plus.type=remove.type='button';minus.setAttribute('aria-label','Remove one '+product.name);plus.setAttribute('aria-label','Add one '+product.name);remove.setAttribute('aria-label','Remove '+product.name+' from cart');minus.addEventListener('click',()=>{if(--cart[product.id]<=0){delete cart[product.id];notify('Removed from your cart.');}saveCart();renderCart();});plus.addEventListener('click',()=>{cart[product.id]++;saveCart();renderCart();});remove.addEventListener('click',()=>{delete cart[product.id];saveCart();renderCart();notify('Removed from your cart.');});qty.append(minus,el('span','',String(quantity)),plus);controls.append(qty,remove);copy.append(el('strong','',product.name),el('div','muted',money(product.price)),controls);line.append(thumb(product),copy);area.append(line);});$('#cart-total').textContent=money(total(items));};
  const beginCheckout=checkout;checkout=function(items){beginCheckout(items);if(!$('#checkout-dialog').open)return;const summary=$('#checkout-summary');summary.replaceChildren();items.forEach(({product,quantity})=>{const row=el('div','checkout-line');row.append(thumb(product),el('span','',`${quantity} × ${product.name} — ${money(product.price*quantity)}`));summary.append(row);});summary.append(el('div','checkout-total','Total: '+money(total(items))));};
  renderCatalog();$('#rail').replaceChildren(...PRODUCTS.map(makeCard));sync();
})();

// Product galleries use only the locally stored, model-specific photos.
(() => {
 const css=document.createElement('style');
 css.textContent=`.detail-photo{display:flex!important;flex-direction:column;min-width:0;gap:10px}.detail-photo>img{max-width:100%;max-height:360px;object-fit:contain}.gallery-thumbs{display:flex;gap:8px;max-width:100%;overflow-x:auto;padding:3px}.gallery-thumbs button{flex:0 0 60px;width:60px;height:60px;padding:3px;border:1px solid #ccd9ce;border-radius:8px;background:#fff;cursor:pointer}.gallery-thumbs button[aria-pressed=true]{border:2px solid #08764d}.gallery-thumbs img{width:100%;height:100%;object-fit:contain}.gallery-thumbs button:focus-visible{outline:3px solid #08764d;outline-offset:2px}`;
 document.head.append(css);
 const previousOpen=openDetail;
 openDetail=function(product){
  previousOpen(product);
  const photos=Array.isArray(product.images)?product.images.filter(Boolean):[];
  const box=detailDialog.querySelector('.detail-photo'),main=box.querySelector('img');
  if(!main||photos.length<2)return;
  const strip=document.createElement('div');strip.className='gallery-thumbs';strip.setAttribute('aria-label','Product photos');
  photos.forEach((src,index)=>{
   const button=document.createElement('button'),thumb=document.createElement('img');
   button.type='button';button.setAttribute('aria-label','View product photo '+(index+1));button.setAttribute('aria-pressed',String(index===0));
   thumb.src=src;thumb.alt='';thumb.loading='lazy';button.append(thumb);
   button.addEventListener('click',()=>{main.src=src;strip.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));});
   strip.append(button);
  });
  box.append(strip);
 };
})();

// Keep the page still while any store dialog is open, including on mobile Safari.
(() => {
 const style=document.createElement('style');
 style.textContent=`dialog[open]{max-height:90vh;max-height:90dvh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;box-sizing:border-box}dialog::backdrop{touch-action:none}`;
 document.head.append(style);
 let saved=null;
 function syncModalScroll(){
  const open=!!document.querySelector('dialog[open]:not(.route-page)');
  if(open&&!saved){
   const body=document.body,root=document.documentElement;
   saved={y:window.scrollY,position:body.style.position,top:body.style.top,left:body.style.left,right:body.style.right,width:body.style.width,overflow:body.style.overflow,rootOverflow:root.style.overflow};
   body.style.position='fixed';body.style.top=`-${saved.y}px`;body.style.left='0';body.style.right='0';body.style.width='100%';body.style.overflow='hidden';root.style.overflow='hidden';
  } else if(!open&&saved){
   const body=document.body,root=document.documentElement,old=saved;saved=null;
   body.style.position=old.position;body.style.top=old.top;body.style.left=old.left;body.style.right=old.right;body.style.width=old.width;body.style.overflow=old.overflow;root.style.overflow=old.rootOverflow;window.scrollTo(0,old.y);
  }
 }
 const showModal=HTMLDialogElement.prototype.showModal,close=HTMLDialogElement.prototype.close;
 HTMLDialogElement.prototype.showModal=function(...args){const result=showModal.apply(this,args);syncModalScroll();return result;};
 HTMLDialogElement.prototype.close=function(...args){const result=close.apply(this,args);syncModalScroll();return result;};
 new MutationObserver(syncModalScroll).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['open']});
 syncModalScroll();
})();

// Keep touch gestures inside the topmost modal, including at scroll boundaries.
(() => {
  const css = document.createElement('style');
  css.textContent = `dialog[open]{overscroll-behavior:contain;touch-action:pan-x pan-y}dialog::backdrop{touch-action:none}`;
  document.head.append(css);
  let point = null;
  document.addEventListener('touchstart', e => {
    if (e.touches.length === 1 && document.querySelector('dialog[open]:not(.route-page)')) {
      point = {x:e.touches[0].clientX, y:e.touches[0].clientY};
    } else point = null;
  }, {passive:true, capture:true});
  document.addEventListener('touchmove', e => {
    const dialogs = Array.from(document.querySelectorAll('dialog[open]:not(.route-page)'));
    if (!dialogs.length || !point || e.touches.length !== 1) return;
    const dialog = dialogs[dialogs.length - 1], t = e.touches[0];
    const dx = point.x - t.clientX, dy = point.y - t.clientY;
    point = {x:t.clientX, y:t.clientY};
    const rect = dialog.getBoundingClientRect();
    if (!dialog.contains(e.target) || t.clientX < rect.left || t.clientX > rect.right || t.clientY < rect.top || t.clientY > rect.bottom) { e.preventDefault(); return; }
    const vertical = Math.abs(dy) >= Math.abs(dx), delta = vertical ? dy : dx;
    let node = e.target instanceof Element ? e.target : e.target.parentElement;
    while (node && dialog.contains(node)) {
      const cs = getComputedStyle(node), overflow = vertical ? cs.overflowY : cs.overflowX;
      const pos = vertical ? node.scrollTop : node.scrollLeft;
      const max = vertical ? node.scrollHeight-node.clientHeight : node.scrollWidth-node.clientWidth;
      if (/(auto|scroll)/.test(overflow) && max > 1 && ((delta < 0 && pos > 0) || (delta > 0 && pos < max-1))) return;
      if (node === dialog) break;
      node = node.parentElement;
    }
    e.preventDefault();
  }, {passive:false, capture:true});
  document.addEventListener('touchend', () => { point = null; }, {passive:true, capture:true});
})();

// Store views share normal document navigation, never a modal backdrop.
(() => {
 const css=el('style');css.textContent=`body.view-open .hero,body.view-open main,body.view-open footer,body.view-open #product-page{display:none!important}dialog.route-page{position:relative!important;inset:auto!important;transform:none!important;margin:0 auto!important;width:100%!important;max-width:1100px!important;min-height:70vh;max-height:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:20px 20px 120px!important;background:#fff;color:#00382a;overflow:visible!important}body.view-open{background:#fff!important}dialog.route-page:not([open]){display:none!important}.route-back{display:block;margin:0 0 24px;padding:12px 18px;border:1px solid #b9cdbf;border-radius:30px;background:#f0f6ec;color:#00382a;font:inherit;cursor:pointer}dialog.route-page .dialog-head .close{display:none!important}dialog.route-page input,dialog.route-page textarea{max-width:100%;box-sizing:border-box}.shop-back{margin:16px 0}body.view-open .whatsapp-float{display:none}@media(min-width:701px){dialog.route-page{padding:28px 36px 100px!important}}`;document.head.append(css);
 let restoring=false;
 const ds=[...document.querySelectorAll('dialog:not(#pwa-help)')];
 ds.forEach((d,i)=>{d.classList.add('route-page');if(!d.id)d.id=d.classList.contains('account-page')?'account-page':'store-view-'+i;const b=el('button','route-back','← Back');b.type='button';b.onclick=back;d.prepend(b);});
 const name=d=>d.id.replace(/-dialog$/,'');
 function go(u,replace=false){history[replace?'replaceState':'pushState']({storePage:true},'',u);}
 function clean(){ds.forEach(d=>d.removeAttribute('open'));document.body.classList.remove('view-open');}
 function back(){if(history.state?.storePage)history.back();else{go(location.pathname+'#shop',true);restore();}}
 function open(d){clean();d.setAttribute('open','');document.body.classList.add('view-open');if(!restoring){const u=new URL(location.href);u.search='';u.hash='';u.searchParams.set('view',name(d));if(d.id==='checkout-dialog')u.searchParams.set('items',selected.map(x=>x.product.id+':'+x.quantity).join(','));go(u);}scrollTo({top:0,left:0,behavior:'instant'});}
 ds.forEach(d=>{d.showModal=()=>open(d);d.close=()=>{d.removeAttribute('open');document.body.classList.remove('view-open');};});
 const sb=el('button','route-back shop-back','← Back');sb.type='button';sb.onclick=back;$('#filters').before(sb);sb.hidden=true;
 function restore(){restoring=true;clean();const u=new URL(location.href),view=u.searchParams.get('view');if(view){if(['profile','login','signup','account-page','account'].includes(view)){go(location.pathname+'#home',true);}else if(view==='cart'){renderCart();open($('#cart-dialog'));}else if(view==='checkout'){const items=(u.searchParams.get('items')||'').split(',').map(x=>{const [id,n]=x.split(':');return {product:byId(id),quantity:Math.max(1,Math.min(99,Number(n)||1))};}).filter(x=>x.product);if(items.length)checkout(items);else{renderCart();open($('#cart-dialog'));}}else{const d=document.getElementById(view+'-dialog')||document.getElementById(view);if(d&&d.tagName==='DIALOG'){open(d);const tab=u.searchParams.get('tab');if(tab)d.querySelector('[data-tab="'+CSS.escape(tab)+'"]')?.click();}}}else if(!u.searchParams.has('product')){filter=u.searchParams.get('category')||'All';query=u.searchParams.get('q')||'';renderCatalog();sb.hidden=!(u.searchParams.has('category')||u.searchParams.has('q'));}restoring=false;}
 document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#"]');if(link&&!link.closest('.pp-crumb')){const u=new URL(location.href);u.search='';u.hash=link.getAttribute('href');go(u);clean();}const close=e.target.closest('[data-close],dialog .close');if(close){e.preventDefault();back();return;}const f=e.target.closest('#filters button');if(f){queueMicrotask(()=>{const u=new URL(location.href);u.search='';u.hash='shop';u.searchParams.set('category',filter);go(u);sb.hidden=false;$('#shop')?.scrollIntoView();});}},true);
 document.addEventListener('submit',e=>{if(e.target.id==='search-form')queueMicrotask(()=>{const u=new URL(location.href);u.search='';u.hash='shop';u.searchParams.set('q',query);go(u);sb.hidden=false;});});
 window.addEventListener('popstate',restore);window.addEventListener('hashchange',()=>{if(location.hash){const u=new URL(location.href);u.searchParams.delete('view');u.searchParams.delete('items');history.replaceState(history.state,'',u);clean();}});restore();
})();
