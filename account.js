'use strict';
// Customer account: orders are protected by an own-user row policy in Supabase.
(() => {
 const style=document.createElement('style');
 style.textContent=`.account-page{width:min(860px,calc(100vw - 32px));max-height:90vh;overflow:auto}.account-layout{display:grid;grid-template-columns:180px minmax(0,1fr);gap:26px}.account-nav{display:flex;flex-direction:column;gap:5px}.account-nav button{text-align:left;border:0;border-radius:8px;background:#f3f7f1;color:#00382a;padding:11px;font:inherit;cursor:pointer}.account-nav button[aria-current=true]{background:#e2f4dc;font-weight:700}.account-main{min-width:0;overflow-wrap:anywhere}.account-main h3{margin-top:0}.account-order{border-bottom:1px solid #dce6dc;padding:10px 0}.account-order p{margin:.3rem 0}.account-address{width:100%;min-height:100px;border:1px solid #bdccc0;border-radius:8px;padding:10px;font:inherit}@media(max-width:600px){.account-layout{grid-template-columns:1fr;gap:18px}.account-nav{flex-direction:row;flex-wrap:wrap}.account-nav button{flex:1 1 40%}}`;
 document.head.append(style);
 const dialog=document.createElement('dialog');dialog.className='account-page';dialog.setAttribute('aria-labelledby','account-page-title');
 dialog.innerHTML='<div class="dialog-head"><h2 id="account-page-title">My Account</h2><button type="button" class="close" aria-label="Close My Account">×</button></div><div class="account-layout"><nav class="account-nav" aria-label="Account sections"><button type="button" data-tab="dashboard">Dashboard</button><button type="button" data-tab="orders">Orders</button><button type="button" data-tab="details">Account details</button><button type="button" data-tab="address">Address</button><button type="button" data-tab="logout">Log out</button></nav><section class="account-main" aria-live="polite"></section></div>';
 document.body.append(dialog);
 const old=$('#account-label'), trigger=old.cloneNode(true);old.replaceWith(trigger);
 const panel=dialog.querySelector('.account-main');let currentUser=null;
 const p=(parent,text,tag='p')=>{const n=document.createElement(tag);n.textContent=text;parent.append(n);return n;};
 function close(){dialog.close();}dialog.querySelector('.close').addEventListener('click',close);dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
 async function show(tab){
  dialog.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-current',String(b.dataset.tab===tab)));
  panel.replaceChildren();if(!currentUser)return;
  if(tab==='dashboard'){p(panel,'Dashboard','h3');p(panel,'Welcome, '+(currentUser.user_metadata?.full_name||currentUser.email||'customer')+'.');p(panel,'View your orders and manage your delivery address here.');}
  if(tab==='details'){p(panel,'Account details','h3');p(panel,'Email: '+(currentUser.email||''));if(currentUser.user_metadata?.full_name)p(panel,'Name: '+currentUser.user_metadata.full_name);}
  if(tab==='orders'){
   p(panel,'Your orders','h3');let status=p(panel,'Loading orders…');
   const {data,error}=await supa.from('orders').select('paystack_reference,created_at,items,total_ghs,status').order('created_at',{ascending:false});
   if(!panel.contains(status))return;if(error){status.textContent='Orders could not be loaded. Please try again.';return;}
   if(!data.length){status.textContent='No account-linked orders yet. Guest orders may not appear here.';return;}status.remove();
   for(const order of data){const box=document.createElement('div');box.className='account-order';p(box,'Reference: '+(order.paystack_reference||'—'),'strong');p(box,'Date: '+new Date(order.created_at).toLocaleDateString('en-GH'));for(const item of (Array.isArray(order.items)?order.items:[]))p(box,`${item.quantity} × ${item.name} — ${money(item.unit_price)}`);p(box,'Total: '+money(order.total_ghs));p(box,'Status: '+(order.status||'pending'));panel.append(box);}
  }
  if(tab==='address'){
   p(panel,'Default delivery address','h3');const label=document.createElement('label');label.textContent='Street and area';label.htmlFor='account-address-input';panel.append(label);const input=document.createElement('textarea');input.id='account-address-input';input.className='account-address';input.autocomplete='street-address';input.value=currentUser.user_metadata?.delivery_address||'';panel.append(input);const save=p(panel,'Save address','button');save.type='button';save.className='primary';const msg=p(panel,'');msg.setAttribute('role','status');save.addEventListener('click',async()=>{save.disabled=true;msg.textContent='Saving…';const {data,error}=await supa.auth.updateUser({data:{delivery_address:input.value.trim()}});save.disabled=false;if(error){msg.textContent='Could not save your address. Please try again.';return;}currentUser=data.user;msg.textContent='Address saved.';});
  }
  if(tab==='logout'){p(panel,'Log out','h3');const b=p(panel,'Log out','button');b.type='button';b.className='primary';const msg=p(panel,'');b.addEventListener('click',async()=>{b.disabled=true;const {error}=await supa.auth.signOut();b.disabled=false;if(error){msg.textContent='Could not log out. Please try again.';return;}currentUser=null;authState(null);close();notify('You are logged out.');});}
 }
 dialog.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.tab)));
 trigger.addEventListener('click',async()=>{if(!supa){notify('Accounts are temporarily unavailable.');return;}const {data,error}=await supa.auth.getUser();if(error||!data.user){authState(null);authView('login');$('#auth-dialog').showModal();return;}currentUser=data.user;dialog.showModal();show('dashboard');});
 const previousCheckout=checkout;checkout=function(items){previousCheckout(items);if(!supa||!$('#checkout-dialog').open)return;supa.auth.getUser().then(({data})=>{const user=data?.user;if(!user||!$('#checkout-dialog').open)return;const email=$('#customer-email'),name=$('#customer-name'),address=$('#customer-address');if(!email.value)email.value=user.email||'';if(!name.value)name.value=user.user_metadata?.full_name||'';if(!address.value)address.value=user.user_metadata?.delivery_address||'';}).catch(()=>{});};
})();
