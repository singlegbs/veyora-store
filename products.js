// VEYORA CONFIGURATION — paste only your Paystack PUBLIC key (pk_...) here. Never use a secret key.
const PAYSTACK_PUBLIC_KEY = '';

// SAMPLE CATALOG — placeholder names, prices, descriptions, ratings and images.
// Replace this array with your real products. Prices are in Ghana cedis (GHS).
const PRODUCTS = [
  {id:'blender', name:'Everyday Blender', category:'Appliances', subcategory:'Kitchen', price:450, description:'Blend smoothies and sauces with ease.', image:'blender.jpg'},
  {id:'air-fryer', name:'Compact Air Fryer', category:'Appliances', subcategory:'Kitchen', price:950, description:'A convenient companion for crisp favourites.', image:'air-fryer.jpg'},
  {id:'kettle', name:'Electric Kettle', category:'Appliances', subcategory:'Kitchen', price:320, description:'A simple essential for a comforting cup.', image:'kettle.jpg'},
  {id:'fan', name:'Rechargeable Fan', category:'Appliances', subcategory:'Cooling', price:580, description:'A refreshing breeze for your everyday spaces.', image:'fan.jpg'},
  {id:'art', name:'Abstract Wall Art', category:'Decor', subcategory:'Wall Art', price:380, description:'Bring a little personality to your walls.', image:'art.jpg'},
  {id:'vase', name:'Ceramic Vase', category:'Decor', subcategory:'Decor accents', price:220, description:'A timeless finishing touch for any room.', image:'vase.jpg'},
  {id:'pillows', name:'Throw Pillow Set', category:'Decor', subcategory:'Textiles', price:290, description:'Soft accents to make a space feel like home.', image:'pillows.jpg'},
  {id:'lamp', name:'Table Lamp', category:'Decor', subcategory:'Lighting', price:420, description:'A warm glow for your favourite corner.', image:'lamp.jpg'}
];
