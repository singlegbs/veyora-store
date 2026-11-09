// VEYORA CONFIGURATION — replace with your Paystack PUBLIC key (pk_...) only.
// Leave blank to disable checkout until launch. Never put a secret key here.
const PAYSTACK_PUBLIC_KEY = '';

// SAMPLE DATA ONLY — replace the entire array with your real products before launch.
// All names, descriptions, images, ratings and GHS prices below are PLACEHOLDERS.
const PRODUCTS = [
  {id:'blender', name:'Everyday Blender', category:'Appliances', subcategory:'Kitchen', price:450, description:'Blend smoothies and sauces with ease.', image:'blender.jpg'},
  {id:'toaster', name:'Everyday Toaster', category:'Appliances', subcategory:'Kitchen', price:350, description:'A simple essential for golden morning toast.', image:'toaster.jpg'},
  {id:'kettle', name:'Electric Kettle', category:'Appliances', subcategory:'Kitchen', price:320, description:'A simple essential for a comforting cup.', image:'kettle.jpg'},
  {id:'fan', name:'Rechargeable Fan', category:'Appliances', subcategory:'Cooling', price:580, description:'A refreshing breeze for your everyday spaces.', image:'fan.jpg'},
  {id:'air-fryer', name:'Compact Air Fryer', category:'Appliances', subcategory:'Kitchen', price:950, description:'A convenient companion for crisp favourites.', image:'air-fryer.jpg'},
  {id:'coffee', name:'Coffee Maker', category:'Appliances', subcategory:'Kitchen', price:690, description:'Make your morning brew at home.', image:'coffee.jpg'},
  {id:'mixer', name:'Kitchen Mixer', category:'Appliances', subcategory:'Kitchen', price:650, description:'A handy helper for your kitchen.', image:'pexels-mohammadabbasi-30946801.jpg'},
  {id:'art', name:'Framed Wall Art', category:'Decor', subcategory:'Wall Art', price:380, description:'Bring personality to your walls.', image:'art.jpg'},
  {id:'vase', name:'Ceramic Vase', category:'Decor', subcategory:'Decor accents', price:220, description:'A timeless finishing touch for any room.', image:'vase.jpg'},
  {id:'pillows', name:'Throw Pillow Set', category:'Decor', subcategory:'Textiles', price:290, description:'Soft accents to make a space feel like home.', image:'pillows.jpg'},
  {id:'lamp', name:'Table Lamp', category:'Decor', subcategory:'Lighting', price:420, description:'A warm glow for your favourite corner.', image:'lamp.jpg'},
  {id:'throw', name:'Cosy Throw Blanket', category:'Decor', subcategory:'Textiles', price:250, description:'An inviting layer for relaxed evenings.', image:'textiles.jpg'},
  {id:'candle', name:'Decorative Candle', category:'Decor', subcategory:'Decor accents', price:120, description:'A gentle accent for a cosy space.', image:'candle.jpg'},
  {id:'tray', name:'Decorative Tray', category:'Decor', subcategory:'Decor accents', price:190, description:'A stylish home for your favourite accents.', image:'tray.jpg'}
];
