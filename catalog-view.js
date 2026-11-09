'use strict';
// Render the approved appliance catalog without sample ratings or unverified photos.
makeCard = function(p) {
 const card=el('article','card'), photo=el('div','photo');
 if(p.image){const image=el('img');image.src=p.image;image.alt=p.name;image.loading='lazy';photo.append(image);}
 else photo.append(el('span','photo-placeholder','Photo coming soon'));
 photo.append(el('span','badge',p.category));
 const details=el('div','details');details.append(el('span','price',money(p.price)));
 const buttons=el('div','buttons'),a=el('button','add','Add to Cart'),b=el('button','buy','Buy Now');
 a.type=b.type='button';a.addEventListener('click',()=>add(p.id));b.addEventListener('click',()=>checkout([{product:p,quantity:1}]));buttons.append(a,b);
 card.append(photo,el('h4','',p.name),el('p','product-description',p.description),details,buttons);return card;
};
renderCatalog = function(){
 const area=$('#filters');area.replaceChildren();
 ['All',...new Set(PRODUCTS.map(p=>p.category))].forEach(name=>{const b=el('button','filter'+(name===filter?' active':''),name);b.type='button';b.setAttribute('aria-pressed',String(name===filter));b.addEventListener('click',()=>{filter=name;renderCatalog();});area.append(b);});
 const list=PRODUCTS.filter(p=>(filter==='All'||p.category===filter)&&(`${p.name} ${p.category}`.toLowerCase().includes(query)));
 $('#product-grid').replaceChildren(...list.map(makeCard));$('#empty-result').hidden=!!list.length;
};
// Pause payments until guest order collection has been enabled and tested.
checkout = function(){notify('Checkout is temporarily unavailable. Please check back soon.');};
renderCatalog();$('#rail').replaceChildren(...PRODUCTS.map(makeCard));
