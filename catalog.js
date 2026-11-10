// Approved Veyora appliance catalog, prices in Ghana cedis.
const approvedCatalog = [
 ['Samsung WD17T6300GP/SP Washer Dryer','Washing machines',18799,'images/samsung-wd17t6300gp-sp.webp.png'],
 ['Midea MDRF632FGN46D 4-Door Refrigerator','Refrigerators',13199,'images/MDRF632FGN46D.webp.png'],
 ['TCL 65T6D QLED TV','TVs',12199,'images/65T6D.webp.png'],
 ['Nasco NAS-1200FL-DD Chest Freezer','Chest freezers',12399,'images/NAS-1200FL-DD.webp.png'],
 ['Nasco NASF2-400FDR French Door Refrigerator','Refrigerators',8299,'images/NASF2-400FDR.webp.png'],
 ['TCL C211WDG Washer Dryer','Washing machines',8399,'images/C211WDG.webp.png'],
 ['TCL P211FLG Front Load Washer','Washing machines',7399],
 ['Midea MSAF24C-18CRDN1-R32 Inverter AC','Air conditioners',8399],
 ['Midea MDRC698FZN01 Chest Freezer','Chest freezers',8299],
 ['Nasco NAS-210 Chest Freezer','Chest freezers',3998],
 ['Nasco NAS-425FL-G Chest Freezer','Chest freezers',4998],
 ['Midea MDRC407FZN43D Chest Freezer','Chest freezers',4989],
 ['Nasco NAS-500FL-DD Chest Freezer','Chest freezers',6479],
 ['Nasco NAS-380SK Chest Freezer','Chest freezers',4198],
 ['Samsung WT12J4200MR Twin Tub Washer','Washing machines',6299],
 ['Midea MF110W80B/T Front Load Washer','Washing machines',5998],
 ['Midea MSAF24B-12CRDN1-R32 Inverter AC','Air conditioners',5959],
 ['TCL 50S5K Smart TV','TVs',5799],
 ['Nasco NASD2-36 Refrigerator','Refrigerators',6159],
 ['Nasco NASGC-LME90I Cooker','Cookers',6459],
 ['TCL 75P7K TV','TVs',14299,'images/75P7K.webp.png'],
 ['Samsung RT35CG5421S9GH Refrigerator','Refrigerators',11099],
 ['Midea MSAF-24CRN1 Air Conditioner','Air conditioners',11199],
 ['TCL 55T6D QLED TV','TVs',8189],
 ['Samsung WA80F13S5CNQ Washing Machine','Washing machines',8799],
 ['Midea MF200W120WB/T Front Load Washer','Washing machines',7899,'images/midea-mf200w120wbt.png'],
 ['TCL TAC-24CSA/TPH11I Air Conditioner','Air conditioners',8799],
 ['Samsung AR18TRHGAWK/GA Air Conditioner','Air conditioners',9359],
 ['Midea MSAF-18CRN1 Air Conditioner','Air conditioners',7659],
 ['Midea MSAF-12CRN1 Air Conditioner','Air conditioners',4789],
 ['Nasco NAS-J12-N1-ECO Air Conditioner','Air conditioners',3889],
 ['Samsung RT28HAR4DSA Refrigerator','Refrigerators',6959],
 ['Nasco NASF2-320FLD Refrigerator','Refrigerators',4989],
 ['Nasco NASF2-250FLD Refrigerator','Refrigerators',3989],
 ['Nasco NASD2-24FL Refrigerator','Refrigerators',4999],
 ['Midea MDRT241FTGN50 Refrigerator','Refrigerators',4289],
 ['Nasco NASD2-20FL Refrigerator','Refrigerators',3598],
 ['Nasco NAS-400FL-G Chest Freezer','Chest freezers',4798],
 ['Midea MDRC345FZG43 Chest Freezer','Chest freezers',4659],
 ['Nasco NAS-250FL Chest Freezer','Chest freezers',3998],
 ['Nasco NAS-200FL-G Chest Freezer','Chest freezers',2998],
 ['TCL F711TL Washing Machine','Washing machines',4979],
 ['TCL F708TL Washing Machine','Washing machines',3998,'images/F708TL.webp.png'],
 ['Midea MT100W120/WG Washing Machine','Washing machines',3998],
 ['TCL 43S5K Smart TV','TVs',4489,'images/tcl-43s5k.png'],
 ['Nasco NAS-J50FBFL TV','TVs',3998],
 ['Midea 30AMG5G027 Cooker','Cookers',5989],
 ['Samsung NX24BG45411VGH Cooker','Cookers',7399],
 ['Nasco NASGC-LME90B Cooker','Cookers',6459],
 ['Nasco NASGC-SNIPER50B-G Cooker','Cookers',2698]
];
const catalogDescriptions = {'Chest freezers':'Store frozen food with this chest freezer for your home or business.','Refrigerators':'Keep chilled and frozen foods in one convenient refrigerator.','Washing machines':'Take care of laundry at home with this washing machine.','Air conditioners':'Bring cooling to your living space with this air conditioner.','TVs':'Enjoy your favourite entertainment at home with this television.','Cookers':'Prepare everyday meals at home with this cooker.'};
PRODUCTS.splice(0, PRODUCTS.length, ...approvedCatalog.map(([name,category,price,image], i) => ({id:`appliance-${i+1}`,name,category,subcategory:category,price,description:catalogDescriptions[category],image:image||''})));

// Product-specific descriptions and supported specifications. Unresolved specifications are omitted.
const applianceDetails = [
 /* 1 */ ['Wash and dry in one machine with Samsung’s EcoBubble washer-dryer. Its AI controls and connected features bring convenient options to the laundry routine.','Wash: 17 kg; dry: 10 kg; EcoBubble; Wi-Fi; hygiene steam.'],
 /* 2 */ ['Keep fresh and frozen groceries organised in this four-door Midea refrigerator. The frost-free design and inverter compressor suit a busy kitchen.','Four doors; frost-free; inverter compressor; net capacity: 424 L.'],
 /* 3 */ ['Enjoy a larger picture with TCL’s 65-inch QLED Google TV. Dolby Vision and Dolby Atmos add to the home entertainment experience.','65-inch display; QLED; Google TV; 4K UHD; Dolby Vision and Atmos.'],
 /* 4 */ ['Store larger quantities of frozen food in this spacious double-door Nasco chest freezer. A removable basket helps organise frequently used items.','Capacity: 800 L; two doors; one storage basket; interior light; lock and key.'],
 /* 5 */ ['Organise chilled and frozen food across four doors in this frost-free Nasco refrigerator. Adjustable glass shelves make it easier to arrange your groceries.','Capacity: 360 L; fresh food: 230 L; freezer: 130 L; frost-free; silver finish.'],
 /* 6 */ ['The TCL C211WDG combines front-load washing and drying in one appliance. Choose from 16 programmes and add a forgotten garment during the wash.','Wash: 10.5 kg; dry: 6 kg; 1,200 rpm; 16 programmes; direct-drive inverter.'],
 /* 7 */ ['This front-load TCL washer offers a choice of programmes for different laundry loads. Its inverter motor and steam wash give you flexible care options.','Wash capacity: 10 kg; front load; inverter motor; steam wash; 15 programmes.'],
 /* 8 */ ['Bring cooling to your space with this Midea split air conditioner. Its inverter design offers a practical option for larger rooms.','2 HP; split air conditioner; inverter; R32 refrigerant.'],
 /* 9 */ ['The Midea MDRC698FZN01 gives you a large chest-freezer compartment for keeping frozen food organised. Its inverter compressor is designed for everyday storage.','Capacity: 508 L; chest freezer; inverter compressor.'],
 /* 10 */ ['Make room for frozen groceries with the Nasco NAS-210 chest freezer. Its chest format keeps your frozen essentials together in one place.','Model: NAS-210; chest freezer.'],
 /* 11 */ ['This gold-finish Nasco chest freezer provides dedicated storage for frozen food. The chest format makes it a practical choice for home or business.','Model: NAS-425FL-G; chest freezer; gold finish.'],
 /* 12 */ ['Keep frozen essentials together in this Midea inverter chest freezer. A removable basket helps organise smaller items.','Capacity: 294 L; inverter compressor; storage basket.'],
 /* 13 */ ['The NAS-500FL-DD provides two-door access to a generous chest freezer. Its storage baskets help separate the items you reach for most.','Capacity: 425 L; double door; two storage baskets.'],
 /* 14 */ ['This Nasco chest freezer offers organised frozen storage for household or business use. Its basket helps keep smaller packages within reach.','Capacity: 268 L; chest freezer; storage basket.'],
 /* 15 */ ['The Samsung WT12J4200MR twin-tub washer separates washing and spinning into two compartments. An EZ Wash Tray supports convenient hand-washing tasks.','Wash capacity: 12 kg; twin tub; EZ Wash Tray.'],
 /* 16 */ ['Care for everyday laundry with this Midea front-load washing machine. Select from its wash programmes to suit different loads.','Wash capacity: 8 kg; front load; 1,200 rpm.'],
 /* 17 */ ['Cool your space with the Midea MSAF24B-12CRDN1-R32 split air conditioner. Its inverter compressor and R32 refrigerant form part of the unit’s design.','1.5 HP; split air conditioner; inverter; R32 refrigerant.'],
 /* 18 */ ['Watch films and streaming entertainment on the TCL 50S5K smart TV. The 50-inch 4K screen uses Google TV to bring viewing options together.','50-inch display; 4K UHD; Google TV.'],
 /* 19 */ ['Keep fresh food above and frozen food below in this Nasco refrigerator. A water dispenser adds convenience to the front of the appliance.','Capacity: 268 L; bottom freezer; water dispenser.'],
 /* 20 */ ['Prepare meals on the NASGC-LME90I cooker, with five burners and an oven in one appliance. Its wider format provides space for multiple dishes.','Five burners; oven; 90 × 60 cm.'],
 /* 21 */ ['Make film nights bigger with TCL’s 75-inch P7K QLED TV. Its Google TV interface and Dolby picture and sound support add to the viewing experience.','75-inch display; QLED; 4K; Google TV; Dolby Vision and Atmos.'],
 /* 22 */ ['This Samsung top-mount refrigerator pairs separate fresh-food and freezer storage with All Round Cooling. A digital inverter compressor supports everyday operation.','Top-mount freezer; 348 L stated capacity; 345 L net capacity; digital inverter.'],
 /* 23 */ ['The Midea MSAF-24CRN1 is a 2.5 HP air conditioner for cooling your room. Its split design places the cooling unit inside the living space.','2.5 HP; split air conditioner; R410 refrigerant.'],
 /* 24 */ ['Bring vivid entertainment home with the TCL 55T6D QLED Google TV. Its slim design combines a 55-inch screen with Dolby Vision and Atmos support.','55-inch display; QLED; Google TV; Dolby Vision and Atmos.'],
 /* 25 */ ['Take on larger laundry loads with this Samsung top-load washer. AI Wash, EcoBubble and Wi-Fi features offer options for a connected laundry routine.','Wash capacity: 13 kg; top load; digital inverter; Wi-Fi.'],
 /* 26 */ ['The Midea Lunar Dial front-load washer offers room for larger loads and an LED control panel. Its inverter motor supports a range of laundry programmes.','Wash capacity: 12 kg; front load; inverter motor; LED display.'],
 /* 27 */ ['Cool your room with TCL’s BreezeIN inverter air conditioner. Wi-Fi control, smart airflow and an auto-clean feature add everyday convenience.','2.5 HP; inverter; R410 refrigerant; Wi-Fi control; auto clean.'],
 /* 28 */ ['This Samsung split air conditioner provides 2 HP cooling for your living space. The separate indoor unit fits neatly into a room.','2 HP; split air conditioner; R410 refrigerant.'],
 /* 29 */ ['The Midea MSAF-18CRN1 brings 2 HP of cooling to a room. Its split system separates the indoor and outdoor units.','2 HP; split air conditioner; R410 refrigerant.'],
 /* 30 */ ['Bring cooling to a smaller space with the Midea MSAF-12CRN1. This 1.5 HP split air conditioner uses an indoor and outdoor unit.','1.5 HP; split air conditioner; R410 refrigerant.'],
 /* 31 */ ['Cool your room with the Nasco NAS-J12-N1-ECO split air conditioner. The 1.5 HP model is a practical choice for a home or office.','1.5 HP; split air conditioner; 2-star rating.'],
 /* 32 */ ['Store chilled food and frozen essentials in Samsung’s RT28HAR4DSA refrigerator. Its frost-free design helps reduce manual defrosting.','Frost-free refrigerator; Duracool; 2-star rating.'],
 /* 33 */ ['The NASF2-320FLD combines a top-mounted freezer with a water dispenser. It offers space for chilled groceries and frozen essentials in one appliance.','Capacity: 280 L; top-mount freezer; water dispenser.'],
 /* 34 */ ['Keep food and drinks organised in this Nasco top-mount refrigerator. A built-in water dispenser makes a cool drink easy to access.','Capacity: 210 L; top-mount freezer; water dispenser; 2-star rating.'],
 /* 35 */ ['Place your fresh food within reach with this Nasco refrigerator and its lower freezer compartment. Its 196-litre format fits everyday grocery storage.','Capacity: 196 L; bottom freezer; 2-star rating.'],
 /* 36 */ ['This Midea refrigerator combines chilled storage with a bottom freezer compartment. It gives everyday groceries a dedicated place in the kitchen.','Capacity: 174 L; bottom freezer.'],
 /* 37 */ ['Keep fresh and frozen groceries together in this compact Nasco refrigerator. The freezer sits below the fresh-food section.','Capacity: 158 L; bottom-mount freezer; 2-star rating.'],
 /* 38 */ ['Keep a supply of frozen food in this Nasco chest freezer. The 288-litre format offers room to organise groceries for home or business.','Capacity: 288 L; chest freezer; 2-star rating.'],
 /* 39 */ ['The Midea MDRC345FZG43 chest freezer offers inverter operation and a 249-litre storage compartment. Its door hinges are designed to stay open while you load it.','Capacity: 249 L; inverter; balanced hinges.'],
 /* 40 */ ['Stock up on frozen groceries with the Nasco NAS-250FL chest freezer. Its chest format keeps your frozen items in one dedicated space.','Capacity: 180 L; chest freezer; 2-star rating.'],
 /* 41 */ ['The gold Nasco NAS-200FL-G provides a compact chest-freezer option. Its interior basket helps organise smaller frozen items.','Capacity: 120 L; gold finish; storage basket.'],
 /* 42 */ ['The TCL F711TL top-load washer handles larger laundry loads with fully automatic operation. Select a programme for the load and let the machine do the washing.','Wash capacity: 11 kg; top load; fully automatic.'],
 /* 43 */ ['Keep laundry simple with the TCL F708TL fully automatic top-load washer. Its 8 kg capacity is suited to regular household loads.','Wash capacity: 8 kg; top load; fully automatic.'],
 /* 44 */ ['This Midea twin-tub washer separates washing and spinning for hands-on laundry care. The wash tray gives you another surface for washing tasks.','Wash capacity: 12 kg; twin tub; wash tray.'],
 /* 45 */ ['Enjoy your favourite shows on the TCL 43S5K smart TV. Its 43-inch display uses Google TV to bring entertainment together.','43-inch display; full HD; Google TV.'],
 /* 46 */ ['The Nasco NAS-J50FBFL brings a 50-inch display to your living room. Use its built-in smart features to access entertainment.','50-inch display; smart TV; webOS.'],
 /* 47 */ ['Prepare meals with the Midea 30AMG5G027 cooker. Its five gas burners and oven put stovetop and oven cooking in one unit.','Five gas burners; oven; 90 × 60 cm.'],
 /* 48 */ ['The Samsung NX24BG45411VGH combines a five-burner gas hob with an oven. A convection fan and electric ignition add convenience to meal preparation.','Five gas burners; gas oven; convection fan; electric ignition.'],
 /* 49 */ ['Cook several dishes at once with the Nasco NASGC-LME90B. This five-burner cooker includes an oven for baking and roasting.','Five burners; oven; 90 × 60 cm.'],
 /* 50 */ ['The Nasco NASGC-SNIPER50B-G cooker combines four burners with an oven in a compact format. Its glass lid helps cover the hob when not in use.','Four burners; oven; 50 × 50 cm; glass lid.']
];
if (applianceDetails.length === PRODUCTS.length) PRODUCTS.forEach((p,i) => { p.description = applianceDetails[i][0]; p.specs = applianceDetails[i][1]; });

// Correct or omit conflicting and unsupported specifications from the shortlist.
const verifiedCorrections = {
  'TCL P211FLG Front Load Washer': {description:'This TCL front-load washer offers programmes for different laundry loads. Its inverter motor and steam wash provide flexible care options.', specs:'Wash capacity: 10.5 kg; front load; inverter motor; steam wash.'},
  'Midea MDRC698FZN01 Chest Freezer': {description:'The Midea MDRC698FZN01 offers a large chest-freezer compartment for keeping frozen food together. Its chest format makes it useful for stocking up.', specs:'Capacity: 508 L; chest freezer.'},
  'Nasco NAS-500FL-DD Chest Freezer': {description:'The NAS-500FL-DD provides two-door access to chest-freezer storage. Keep frozen items together for home or business use.', specs:'Double-door chest freezer.'},
  'Nasco NAS-380SK Chest Freezer': {description:'This Nasco chest freezer offers dedicated frozen storage for home or business. Its chest format keeps frozen groceries together.', specs:'Chest freezer.'},
  'Midea MF110W80B/T Front Load Washer': {description:'Care for everyday laundry with this Midea front-load washing machine. Select from its wash programmes to suit different loads.', specs:'Wash capacity: 8 kg; front load.'},
  'TCL 50S5K Smart TV': {description:'Watch films and entertainment on the TCL 50S5K smart TV. Its 50-inch Full HD display brings viewing into the living room.', specs:'50-inch display; Full HD; smart TV.'},
  'Midea MDRC345FZG43 Chest Freezer': {description:'The Midea MDRC345FZG43 can switch between fridge and freezer use. Its 249-litre compartment and hovering lid help make food storage convenient.', specs:'Capacity: 249 L; convertible fridge/freezer; multi-angle hovering lid; LED light.'},
  'Nasco NAS-250FL Chest Freezer': {description:'Stock up on frozen groceries with the Nasco NAS-250FL chest freezer. Its chest format keeps frozen items together.', specs:'Chest freezer; 2-star rating.'},
  'Nasco NAS-200FL-G Chest Freezer': {description:'The gold Nasco NAS-200FL-G provides dedicated freezer storage for the home. Its chest format keeps frozen groceries together.', specs:'150 L stated capacity; 145 L net capacity; gold finish.'},
  'Midea MT100W120/WG Washing Machine': {description:'This Midea twin-tub washer separates washing and spinning for hands-on laundry care. Its dual pulsator helps handle regular loads.', specs:'Wash capacity: 12 kg; twin tub; dual pulsator.'},
  'TCL 43S5K Smart TV': {description:'Enjoy your favourite shows on the TCL 43S5K smart TV. Its 43-inch Full HD display brings entertainment into your home.', specs:'43-inch display; Full HD; smart TV.'},
  'Nasco NAS-J50FBFL TV': {description:'The Nasco NAS-J50FBFL brings a 50-inch Full HD display to your living room. It includes digital satellite TV support.', specs:'50-inch display; Full HD; digital satellite TV.'},
  'Midea 30AMG5G027 Cooker': {description:'Prepare meals with the Midea 30AMG5G027 gas cooker. Its five burners and grill give you space for different cooking tasks.', specs:'Five gas burners; grill; auto ignition; rotisserie.'},
  'Samsung NX24BG45411VGH Cooker': {description:'The Samsung NX24BG45411VGH gas cooker combines four burners with a grill. Auto ignition makes lighting the hob more convenient.', specs:'Four gas burners; grill; auto ignition.'}
};
PRODUCTS.forEach(p => { if (verifiedCorrections[p.name]) Object.assign(p, verifiedCorrections[p.name]); });
// Omit details not independently established by the research shortlist.
for (const p of PRODUCTS) {
 if (p.name === 'TCL P211FLG Front Load Washer') {
  p.description = 'This TCL front-load washer offers programmes for different laundry loads. Its inverter motor supports everyday washing.';
  p.specs = 'Wash capacity: 10.5 kg; front load; inverter motor; 15 programmes; 1,200 rpm.';
 }
 if (p.name === 'Nasco NASD2-36 Refrigerator') {
  p.description = 'Keep fresh food and frozen items together in this Nasco bottom-freezer refrigerator. Its separate compartments help organise groceries.';
  p.specs = 'Bottom-freezer refrigerator; model: NASD2-36.';
 }
}

// Locally hosted product image from the supplier listing.
for (const p of PRODUCTS) if (p.name === 'Midea MDRC698FZN01 Chest Freezer') p.image = 'images/MDRC698FZN01.webp.png';
// Locally hosted product photos.
const imageBatchSix = {
'Nasco NAS-425FL-G Chest Freezer': 'images/NAS-425FL-G.webp.png',
'Midea MDRC407FZN43D Chest Freezer': 'images/MDRC407FZN43D.webp.png',
'Nasco NAS-500FL-DD Chest Freezer': 'images/NAS-500FL-DD.webp.png',
'Nasco NAS-380SK Chest Freezer': 'images/NAS-380SK.png',
'Samsung WT12J4200MR Twin Tub Washer': 'images/WT12J4200MR.webp.png',
'Midea MF110W80B/T Front Load Washer': 'images/MF110W80B-T.webp.png'
};
for (const p of PRODUCTS) if (imageBatchSix[p.name]) p.image = imageBatchSix[p.name];
// Locally hosted exact-model product photos.
for (const p of PRODUCTS) {
  if (p.name === 'TCL 50S5K Smart TV') {
    p.image = 'images/50S5K-main.png';
    p.images = ['images/50S5K-main.png', 'images/50S5K-alt1.png', 'images/50S5K-alt2.png'];
  }
  if (p.name === 'Nasco NASGC-LME90I Cooker') p.image = 'images/NASGC-LME90I-main.png';
}
// Exact-listing Nasco refrigerator gallery, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NASD2-36 Refrigerator') {
    p.image = 'images/NASD2-36-main.png';
    p.images = ['images/NASD2-36-main.png', 'images/NASD2-36-alt1.png', 'images/NASD2-36-alt2.png', 'images/NASD2-36-alt3.png'];
  }
}
// Samsung refrigerator exact-model gallery, hosted locally.
for (const p of PRODUCTS) {
  if (p.name === 'Samsung RT35CG5421S9GH Refrigerator') {
    p.image = 'images/RT35CG5421S9GH-main.webp.png';
    p.images = ['images/RT35CG5421S9GH-main.webp.png', 'images/RT35CG5421S9GH-alt1.webp.png', 'images/RT35CG5421S9GH-alt2.webp.png', 'images/RT35CG5421S9GH-alt3.webp.png'];
  }
}
// Exact-model Midea washer gallery, hosted locally.
for (const p of PRODUCTS) {
  if (p.name === 'Midea MF110W80B/T Front Load Washer') {
    p.images = ['images/MF110W80B-T.webp.png', 'images/MF110W80B-T-gallery-1.webp.png', 'images/MF110W80B-T-gallery-2.webp.png', 'images/MF110W80B-T-gallery-3.webp.png', 'images/MF110W80B-T-gallery-4.webp.png', 'images/MF110W80B-T-gallery-5.webp.png'];
  }
}
// Nasco refrigerator exact-model gallery, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NASF2-250FLD Refrigerator') {
    p.image = 'images/nasf2-250fld-1.png';
    p.images = ['images/nasf2-250fld-1.png', 'images/nasf2-250fld-2.png', 'images/nasf2-250fld-3.png', 'images/nasf2-250fld-4.png', 'images/nasf2-250fld-5.png'];
  }
}
// Locally hosted Midea MT100W120/WG exact-model gallery.
for (const p of PRODUCTS) { if (p.name === 'Midea MT100W120/WG Washing Machine') { p.image = 'images/midea-mt100w120wg-1.webp.png'; p.images = ['images/midea-mt100w120wg-1.webp.png', 'images/midea-mt100w120wg-2.webp.png', 'images/midea-mt100w120wg-3.webp.png']; } }

// Exact-model Samsung washer-dryer gallery.
for (const p of PRODUCTS) {
  if (p.name === 'Samsung WD17T6300GP/SP Washer Dryer') {
    p.image = 'images/samsung-wd17t6300gp-1.webp.png';
    p.images = [1, 2, 3, 4, 5].map(n => `images/samsung-wd17t6300gp-${n}.webp.png`);
  }
}
// Locally hosted exact-model Nasco appliance photos.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NASD2-24FL Refrigerator') {
    p.image = 'images/nasd2-24fl-1.webp.png';
    p.images = ['images/nasd2-24fl-1.webp.png', 'images/nasd2-24fl-3.webp.png', 'images/nasd2-24fl-4.webp.png', 'images/nasd2-24fl-5.webp.png'];
  }
  if (p.name === 'Nasco NAS-250FL Chest Freezer') {
    p.image = 'images/nas-250fl-1.webp.png';
    p.images = ['images/nas-250fl-1.webp.png', 'images/nas-250fl-2.webp.png'];
  }
  if (p.name === 'Nasco NAS-210 Chest Freezer') {
    p.image = 'images/nas-210-1.png';
    p.images = ['images/nas-210-1.png'];
  }
}
// Locally hosted exact-model Nasco images.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NASF2-320FLD Refrigerator') p.image = 'images/nasf2-320fld-1.webp.png';
  if (p.name === 'Nasco NASD2-20FL Refrigerator') p.image = 'images/NASD2-20FL-main.webp.png';
  if (p.name === 'Nasco NAS-200FL-G Chest Freezer') p.image = 'images/nas-200fl-g-1.webp.png';
}
// TCL P211FLG exact-model photographs, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'TCL P211FLG Front Load Washer') {
    p.image = 'images/tcl-p211flg-1.jpg';
    p.images = ['images/tcl-p211flg-1.jpg', 'images/tcl-p211flg-3.jpg', 'images/tcl-p211flg-4.jpg', 'images/tcl-p211flg-5.jpg'];
  }
}
// Exact-model Midea chest freezer gallery, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'Midea MDRC698FZN01 Chest Freezer') {
    p.image = 'images/midea-mdrc698fzn01-1.jpg';
    p.images = [1, 2, 3, 4].map(n => `images/midea-mdrc698fzn01-${n}.jpg`);
  }
}
// Exact-model Nasco NASF2-320FLD refrigerator gallery, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NASF2-320FLD Refrigerator') {
    p.image = 'images/nasco-nasf2-320fld-1.jpg';
    p.images = [1, 2, 3, 4].map(n => `images/nasco-nasf2-320fld-${n}.jpg`);
  }
}
// Exact-model Samsung cooker photographs, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'Samsung NX24BG45411VGH Cooker') {
    p.image = 'images/samsung-nx24-1.webp.png';
    p.images = [1, 2, 3, 4, 5, 6].map(n => `images/samsung-nx24-${n}.webp.png`);
  }
}
// Locally hosted exact-model refrigerator and cooker photographs.
for (const p of PRODUCTS) {
  if (p.name === 'Midea MDRT241FTGN50 Refrigerator') {
    p.images = [1, 2, 3].map(n => `images/Midea MDRT241 view ${n}.webp.png`);
    p.image = p.images[0];
  }
  if (p.name === 'Nasco NASGC-LME90B Cooker') {
    p.image = 'images/nasgc-lme90b-source.webp.png';
    p.images = [p.image];
  }
}
// Exact-model Nasco NAS-400FL-G photographs, hosted locally.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NAS-400FL-G Chest Freezer') {
    p.images = ['images/nas-400fl-g-1.jpg', 'images/nas-400fl-g-view3.jpg', 'images/nas-400fl-g-view4.jpg', 'images/nas-400fl-g-view5.jpg'];
    p.image = p.images[0];
  }
}
// Exact-model Midea cooker photographs, hosted locally.
for (const p of PRODUCTS) {
  if (p.name === 'Midea 30AMG5G027 Cooker') {
    p.images = ['images/midea-30amg5g027-1.jpg', 'images/midea-30amg5g027-4.jpg'];
    p.image = p.images[0];
  }
}
// Exact-model Nasco television photograph, hosted locally.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NAS-J50FBFL TV') {
    p.images = ['images/nasco-nas-j50fbfl-1.jpg'];
    p.image = p.images[0];
  }
}
// Locally hosted exact-model Midea appliance photographs.
for (const p of PRODUCTS) {
  const images = {
    'Midea MSAF24C-18CRDN1-R32 Inverter AC': 'images/midea-msaf24c-18crdn1-r32.png',
    'Midea MSAF24B-12CRDN1-R32 Inverter AC': 'images/midea-msaf24b-12crdn1-r32.png',
    'Midea MDRC345FZG43 Chest Freezer': 'images/midea-mdrc345fzg43-1.webp.png'
  };
  if (images[p.name]) { p.image = images[p.name]; p.images = [p.image]; }
}
// Locally hosted exact-model product photography.
for (const p of PRODUCTS) {
  const galleries = {
    'Samsung WA80F13S5CNQ Washing Machine': ['images/samsung-wa80f13s5cnq-1.png', 'images/samsung-wa80f13s5cnq-3.png', 'images/samsung-wa80f13s5cnq-dynamic.jpg'],
    'TCL TAC-24CSA/TPH11I Air Conditioner': [1, 2, 3, 4].map(n => `images/tcl-tac-24csa-tph11i-${n}.webp.webp`),
    'Samsung RT28HAR4DSA Refrigerator': ['images/samsung-rt28har4dsa-1.jpg']
  };
  if (galleries[p.name]) { p.images = galleries[p.name]; p.image = p.images[0]; }
}

// Premium side-by-side replacement for the retired top-mount refrigerator.
for (const p of PRODUCTS) {
  if (p.name === 'Samsung RT35CG5421S9GH Refrigerator') {
    Object.assign(p, {
      id: 'midea-mdrs710fgf46d',
      name: 'Midea MDRS710FGF46D Side-by-Side Refrigerator',
      category: 'Refrigerators', subcategory: 'Refrigerators', price: 11199,
      description: 'Organise fresh and frozen food side by side in this Midea refrigerator. Its brushed-steel finish, digital controls and built-in water dispenser bring practical style to the kitchen.',
      specs: 'Type: side-by-side; Compressor: inverter; Defrost: frost-free; Display: digital; Water dispenser; Child lock; Finish: brushed steel.',
      image: 'images/midea-mdrs710-01.webp.png',
      images: [1, 2, 3, 4].map(n => `images/midea-mdrs710-0${n}.webp.png`)
    });
  }
}
// Do not silently replace a previously selected product in an existing cart.
try {
  const existing = JSON.parse(sessionStorage.getItem('veyora-cart') || '{}');
  if (existing && Object.prototype.hasOwnProperty.call(existing, 'appliance-22')) {
    delete existing['appliance-22'];
    sessionStorage.setItem('veyora-cart', JSON.stringify(existing));
  }
} catch (e) { /* Storage may be unavailable. */ }
// Locally hosted exact-model TCL 55T6D photographs.
for (const p of PRODUCTS) {
  if (p.name === 'TCL 55T6D QLED TV') {
    p.images = ['images/tcl-55t6d-02.webp.png', 'images/tcl-55t6d-03.webp.png', 'images/tcl-55t6d-04.webp.png'];
    p.image = p.images[0];
  }
}
// Exact-model Nasco air conditioner gallery, hosted locally.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NAS-J12-N1-ECO Air Conditioner') {
    p.images = [1, 2, 3, 4].map(n => `images/nas-j12-eco-${n}.webp.png`);
    p.image = p.images[0];
  }
}
// Exact-model Midea four-door refrigerator gallery, locally hosted.
for (const p of PRODUCTS) {
  if (p.name === 'Midea MDRF632FGN46D 4-Door Refrigerator') {
    p.images = ['images/MDRF632FGN46D.webp.png', 'images/mdrf632fgn46d-2.webp.png', 'images/mdrf632fgn46d-3.webp.png', 'images/mdrf632fgn46d-4.webp.png', 'images/mdrf632fgn46d-5.webp.png'];
    p.image = p.images[0];
  }
}
// Exact-model Nasco refrigerator and TCL washer-dryer gallery photographs.
for (const p of PRODUCTS) {
  if (p.name === 'Nasco NASF2-400FDR French Door Refrigerator') {
    p.images = ['images/NASF2-400FDR.webp.png', 'images/nasf2-400fdr-2.webp.png'];
    p.image = p.images[0];
  }
  if (p.name === 'TCL C211WDG Washer Dryer') {
    p.images = ['images/C211WDG.webp.png', 'images/c211wdg-2.webp.png', 'images/c211wdg-3.webp.png', 'images/c211wdg-4.webp.png'];
    p.image = p.images[0];
  }
  // Supplier capacity figures conflict; omit until confirmed.
  if (p.name === 'Midea MDRF632FGN46D 4-Door Refrigerator') p.specs = 'Four doors; frost-free; inverter compressor.';
}

// Premium mirror-finish inverter air conditioner.
PRODUCTS.push({
  id: 'tcl-tac-12csa-xa82i',
  name: 'TCL TAC-12CSA/XA82I 1.5HP Inverter Air Conditioner',
  category: 'Air conditioners',
  subcategory: 'Air conditioners',
  price: 5399,
  description: 'Bring a polished look to your space with this TCL split air conditioner. Its black mirror panel and inverter compressor pair modern styling with practical cooling.',
  specs: 'Capacity: 1.5 HP (12,000 BTU/h); Compressor: inverter; Refrigerant: R410A; Finish: grey body with black mirror panel; Mode: cooling only; Copper pipes: 3 m; Voltage: 220–240 V, 50 Hz.',
  image: 'images/tcl-xa82i-1.webp.png',
  images: ['images/tcl-xa82i-1.webp.png', 'images/tcl-xa82i-2.webp.png', 'images/tcl-tac-12csa-xa82i-angle3.jpg', 'images/tcl-tac-12csa-xa82i-angle4.jpg']
});
// LG ARTCOOL mirror-finish inverter air conditioner.
PRODUCTS.push({ id:'lg-s4-q12jartb', name:'LG S4-Q12JARTB ARTCOOL 1.5HP Inverter Air Conditioner', category:'Air conditioners', subcategory:'Air conditioners', price:12999, description:'LG’s ARTCOOL split air conditioner pairs a mirror-finish front with an inverter compressor for contemporary cooling. An ioniser and smart diagnosis add practical air-care and troubleshooting functions.', specs:'Capacity: 1.5 HP; Type: split air conditioner; Compressor: dual inverter; Refrigerant: R410A; Features: ioniser, LG ThinQ, smart diagnosis; Finish: mirror glass.', image:'images/lg-s4-q12jartb-official-1.jpg', images:['images/lg-s4-q12jartb-official-1.jpg','images/lg-s4-q12jartb-official-2.jpg','images/lg-s4-q12jartb-official-3.jpg'] });

// Replace the earlier side-by-side selection with a competitively priced premium model.
for (const product of PRODUCTS) {
  if (product.id === 'midea-mdrs710fgf46d') {
    Object.assign(product, {
      id: 'samsung-rs70f65k4tgh',
      name: 'Samsung RS70F65K4TGH 635L Side-by-Side Refrigerator',
      category: 'Refrigerators',
      subcategory: 'Refrigerators',
      price: 19999,
      description: 'Organise fresh and frozen groceries side by side in this spacious Samsung refrigerator. Its non-plumbed water and ice dispenser puts refreshment within easy reach.',
      specs: 'Capacity: 635 L; Type: side-by-side; Defrost: frost-free; Compressor: digital inverter; Water and ice dispenser: non-plumbed; SpaceMax technology.',
      image: 'images/samsung-rs70f65k4tgh-1.png',
      images: ['images/samsung-rs70f65k4tgh-1.png', 'images/samsung-rs70f65k4tgh-2.png', 'images/samsung-rs70f65k4tgh-3.png']
    });
  }
}
// Remove the retired item's cart entry instead of silently changing it to another product.
try {
  const cart = JSON.parse(sessionStorage.getItem('veyora-cart') || '{}');
  if (cart && Object.prototype.hasOwnProperty.call(cart, 'midea-mdrs710fgf46d')) {
    delete cart['midea-mdrs710fgf46d'];
    sessionStorage.setItem('veyora-cart', JSON.stringify(cart));
  }
} catch (e) { /* Storage may be unavailable. */ }

// Replace the earlier top-mount refrigerator with a premium side-by-side model.
for (const product of PRODUCTS) {
  if (product.name === 'Samsung RT35CG5421S9GH Refrigerator') {
    Object.assign(product, {
      id: 'samsung-rs80f65g4fgh',
      name: 'Samsung RS80F65G4FGH Side-by-Side Refrigerator',
      category: 'Refrigerators', subcategory: 'Refrigerators', price: 27999,
      description: 'Give fresh and frozen food room to stay organised in this Samsung side-by-side refrigerator. Its non-plumbed ice and water dispenser brings refreshments within easy reach.',
      specs: 'Net capacity: 609 L; Type: side-by-side; Frost-free; Digital inverter compressor; Non-plumbed water and ice dispenser; All Around Cooling; Power Cool; Power Freeze.',
      features: ['Side-by-side storage', 'Non-plumbed ice and water dispenser', 'Digital inverter compressor', 'All Around Cooling', 'Power Cool and Power Freeze'],
      image: 'images/samsung-rs80-front.webp.png',
      images: ['images/samsung-rs80-front.webp.png', 'images/samsung-rs80-2.webp.png', 'images/samsung-rs80-3.webp.png']
    });
  }
}
// Do not silently substitute a different product in a returning visitor's cart.
try {
  const cart = JSON.parse(sessionStorage.getItem('veyora-cart') || '{}');
  if (cart && Object.prototype.hasOwnProperty.call(cart, 'appliance-22')) {
    delete cart['appliance-22'];
    sessionStorage.setItem('veyora-cart', JSON.stringify(cart));
  }
} catch (e) { /* Storage may be unavailable. */ }
// Add the premium Samsung refrigerator; the original RT35 was replaced earlier.
PRODUCTS.push({
  id: 'samsung-rs80f65g4fgh',
  name: 'Samsung RS80F65G4FGH Side-by-Side Refrigerator',
  category: 'Refrigerators', subcategory: 'Refrigerators', price: 27999,
  description: 'Give fresh and frozen food room to stay organised in this Samsung side-by-side refrigerator. Its non-plumbed ice and water dispenser brings refreshments within easy reach.',
  specs: 'Net capacity: 609 L; Type: side-by-side; Frost-free; Digital inverter compressor; Non-plumbed water and ice dispenser; All Around Cooling; Power Cool; Power Freeze.',
  features: ['Side-by-side storage', 'Non-plumbed ice and water dispenser', 'Digital inverter compressor', 'All Around Cooling', 'Power Cool and Power Freeze'],
  image: 'images/samsung-rs80-front.webp.png',
  images: ['images/samsung-rs80-front.webp.png', 'images/samsung-rs80-2.webp.png', 'images/samsung-rs80-3.webp.png']
});
// Official TCL gallery for the exact 43S5K model.
for (const product of PRODUCTS) { if (product.name === 'TCL 43S5K Smart TV') { product.image = 'images/tcl-43s5k-official-1.png'; product.images = ['images/tcl-43s5k-official-1.png', 'images/tcl-43s5k-official-2.webp', 'images/tcl-43s5k-official-3.webp']; } }

// Owner-selected additions, priced in Ghana cedis.
PRODUCTS.push(
  { id: 'sunnywalk-2hp-r410', name: 'Sunnywalk 2.0HP R410 Split Air Conditioner', category: 'Air conditioners', subcategory: 'Air conditioners', price: 5899, description: 'Bring cooling to your room with this Sunnywalk split air conditioner. Its 2.0HP system pairs an indoor unit with an outdoor unit for everyday comfort.', specs: '2.0HP; split air conditioner; R410 refrigerant.', features: ['2.0HP cooling', 'Split-system design', 'R410 refrigerant'], image: 'images/sunnywalk-2hp-r410.webp.png', images: ['images/sunnywalk-2hp-r410.webp.png'] },
  { id: 'nasco-nas-j50fbfl-g', name: 'Nasco NAS-J50FBFL-G 50-inch Google Smart TV', category: 'TVs', subcategory: 'TVs', price: 4989, description: 'Bring your favourite entertainment together on this 50-inch Nasco Google Smart TV. Browse Google Play and enjoy Netflix, YouTube and Prime Video, with Chromecast built in for streaming from compatible devices.', specs: '50-inch display; Google TV; Google Play; Chromecast built-in; Netflix; YouTube; Prime Video.', features: ['Google TV and Google Play', 'Chromecast built-in', 'Netflix, YouTube and Prime Video'], image: 'images/nasco-j50fbfl-g-jumia.jpg', images: ['images/nasco-j50fbfl-g-jumia.jpg'] }
);
// Owner-selected LG twin-tub washing machine.
PRODUCTS.push({ id: 'lg-p800r3agnc', name: 'LG P800R3AGNC 8kg Twin Tub Washing Machine', category: 'Washing machines', subcategory: 'Washing machines', price: 4299, description: 'Make laundry day simpler with this 8kg LG twin tub washer. Wash Dynamics combines washing motions for everyday loads, while 3+1 wash programs help you select a cycle for different fabrics.', specs: 'Capacity: 8 kg; Type: twin tub; 3+1 wash programs; Wash Dynamics Technology; Wind Jet Dry.', features: ['8kg twin-tub capacity', 'Wash Dynamics Technology', '3+1 wash programs', 'Wind Jet Dry'], image: 'images/lg-p800r3agnc-1.jpg', images: ['images/lg-p800r3agnc-1.jpg', 'images/lg-p800r3agnc-2.jpg', 'images/lg-p800r3agnc-3.jpg'] });
// Owner-selected Wanbo smart projector.
PRODUCTS.push({ id: 'wanbo-vali-1-pro', name: 'Wanbo Vali 1 Pro Smart Projector', category: 'Projectors', subcategory: 'Projectors', price: 6249, description: 'Bring movie nights home with the Wanbo Vali 1 Pro in warm white. Google TV brings entertainment together, while MEMC motion processing and Dolby audio add to the viewing experience.', specs: 'Native resolution: Full HD 1080p; 4K content supported; Google TV 14; MEMC; Dolby audio; Memory: 2GB RAM and 32GB storage; Finish: warm white.', features: ['Full HD 1080p with 4K content support', 'Google TV 14', 'MEMC and Dolby audio', '2GB RAM and 32GB storage'], image: 'images/wanbo-vali1pro-1.png', images: ['images/wanbo-vali1pro-1.png', 'images/wanbo-vali1pro-2.png', 'images/wanbo-vali1pro-3.png'] });

// Owner-selected appliances and projectors.
PRODUCTS.push(
  {
    id: 'wanbo-cube-2-pro-beige-green',
    name: 'Wanbo Cube 2 Pro Full HD Smart Projector',
    category: 'Projectors', subcategory: 'Projectors', price: 4599,
    description: 'Bring entertainment home with the Wanbo Cube 2 Pro in beige green. Its compact design combines Full HD projection with smart entertainment and ToF autofocus.',
    specs: 'Native resolution: Full HD 1080p; ToF autofocus; Android TV 11; finish: beige green.',
    features: ['Full HD 1080p projection', 'ToF autofocus', 'Android TV 11', 'Beige green finish'],
    image: 'images/wanbo-cube2pro-beigegreen.png', images: ['images/wanbo-cube2pro-beigegreen.png']
  },
  {
    id: 'samsung-sp-lsp7tuaxgh',
    name: 'Samsung The Premiere LSP7T 4K Laser Projector',
    category: 'Projectors', subcategory: 'Projectors', price: 46799,
    description: 'Turn your room into a big-screen entertainment space with Samsung The Premiere. This ultra-short-throw laser projector delivers a 4K picture of up to 120 inches and brings smart entertainment to the screen.',
    specs: 'Model: SP-LSP7TUAXGH; up to 120-inch picture; 4K UHD; ultra-short throw; laser; Smart Hub.',
    features: ['Up to 120-inch picture', '4K laser projection', 'Ultra-short-throw design', 'Smart Hub entertainment'],
    image: 'images/samsung-lsp7t-1.webp.png', images: ['images/samsung-lsp7t-1.webp.png', 'images/samsung-lsp7t-2.webp.png', 'images/samsung-lsp7t-3.webp.png']
  },
  {
    id: 'samsung-wd90f22bcsnq',
    name: 'Samsung WD90F22BCSNQ 22kg/11kg Bespoke AI Washer Dryer',
    category: 'Washing machines', subcategory: 'Washing machines', price: 19999,
    description: 'Care for large laundry loads with this dark grey Samsung Bespoke AI washer-dryer. EcoBubble and AI Wash+ combine with a 7-inch display and connected controls for a flexible laundry routine.',
    specs: 'Wash: 22 kg; dry: 11 kg; Bespoke AI; EcoBubble; 7-inch LCD; AI Wash+; Wi-Fi; voice enabled; Speed Shot; child lock; dark grey.',
    features: ['22kg wash and 11kg dry capacity', 'Bespoke AI and EcoBubble', '7-inch LCD and AI Wash+', 'Wi-Fi and voice enabled', 'Speed Shot and child lock'],
    image: 'images/samsung-wd90f22-1.webp.png', images: ['images/samsung-wd90f22-1.webp.png', 'images/samsung-wd90f22-2.webp.png', 'images/samsung-wd90f22-3.webp.png']
  },
  {
    id: 'cecotec-bolero-aguazero-2500-s-bi-black-glass',
    name: 'Cecotec Bolero Aguazero 2500 S-BI Black Glass Dishwasher',
    category: 'Dishwashers', subcategory: 'Dishwashers', price: 8999,
    description: 'Keep the kitchen looking streamlined with this compact black-glass dishwasher. Six place settings, five programmes and touch controls make it a convenient choice for everyday dishes.',
    specs: 'Semi-integrated compact dishwasher; 6 place settings; 1380 W; 5 programmes; touch controls; delay start; child lock; cutlery basket; black glass.',
    features: ['Six place settings', 'Five wash programmes', 'Touch control and delay start', 'Child lock and cutlery basket'],
    image: 'images/cecotec-2500-1.png', images: ['images/cecotec-2500-1.png', 'images/cecotec-2500-2.png', 'images/cecotec-2500-third.png']
  }
);

// Owner-selected Samsung French door refrigerator.
PRODUCTS.push({
  id: 'samsung-rf48a4000m9gh',
  name: 'Samsung RF48A4000M9/GH French Door Refrigerator',
  category: 'Refrigerators', subcategory: 'Refrigerators', price: 15499,
  description: 'Keep fresh and frozen groceries organised in this Samsung French door refrigerator. Twin Cooling Plus helps maintain separate cooling conditions, while the electronic display puts controls in view.',
  specs: 'Model: RF48A4000M9/GH; French door; Twin Cooling Plus; electronic display; frost-free; digital inverter compressor.',
  features: ['Twin Cooling Plus', 'Electronic display', 'Frost-free design', 'Digital inverter compressor'],
  image: 'images/samsung-rf48a4000m9gh-1.jpg',
  images: ['images/samsung-rf48a4000m9gh-1.jpg', 'images/samsung-rf48a4000m9gh-3.jpg', 'images/samsung-rf48-supplier-3.webp.png', 'images/samsung-rf48-supplier-4.webp.png']
});

// Owner-selected Beko cooker hood; product images from Beko.
PRODUCTS.push({
  id: 'beko-bhcb61622bxh',
  name: 'Beko BHCB61622BXH 60cm Stainless Steel Cooker Hood',
  category: 'Cookers', subcategory: 'Cookers', price: 3699,
  description: 'Give your kitchen a streamlined finish with this 60cm stainless-steel Beko cooker hood. Three speeds, LED illumination and dishwasher-safe filters make everyday cooking easier.',
  specs: 'Model: BHCB61622BXH; 60 cm; stainless steel; wall-mounted; 3 speeds; LED illumination; dishwasher-safe filters; ducted or recirculation operation.',
  features: ['60cm stainless-steel design', 'Three power levels', 'LED illumination', 'Dishwasher-safe filters', 'Ducted or recirculation operation'],
  image: 'https://www.beko.com/content/dam/croatia-hr-aem/croatia-hr-aemProductCatalog/product-images/7703331104-BHCB61622BXH/7703331104-LO1-20220729-124040.png',
  images: [
    'https://www.beko.com/content/dam/croatia-hr-aem/croatia-hr-aemProductCatalog/product-images/7703331104-BHCB61622BXH/7703331104-LO1-20220729-124040.png',
    'https://www.beko.com/content/dam/croatia-hr-aem/croatia-hr-aemProductCatalog/product-images/7703331104-BHCB61622BXH/7703331104-LO2-20220729-124051.png',
    'https://www.beko.com/content/dam/croatia-hr-aem/croatia-hr-aemProductCatalog/product-images/7703331104-BHCB61622BXH/7703331104-LO3-20220117-100011.png'
  ]
});

// Owner-selected interactive display; manufacturer images.
PRODUCTS.push({
  id: 'samsung-lh75wafplgcxue',
  name: 'Samsung LH75WAFPLGCXUE 75-inch Interactive E-Board',
  category: 'Interactive Displays', subcategory: 'Interactive Displays', price: 38099,
  description: 'Bring collaboration into view with this 75-inch Samsung interactive display. Its 4K UHD screen, built-in camera and touch technology support engaging presentations and shared work.',
  specs: 'Model: LH75WAFPLGCXUE; 75-inch IPS; 4K UHD; IR touch; 8ms response; built-in camera; Android; Wi-Fi and Bluetooth; 12/7 operation.',
  features: ['75-inch 4K UHD IPS screen', 'IR touch and built-in camera', 'Android with Wi-Fi and Bluetooth', 'Designed for 12/7 operation'],
  image: 'https://images.samsung.com/is/image/samsung/p6pim/ae/lh75wafplgcxue/gallery/ae-wafx-p-lh75wafplgcxue-548877160?$Q90_684_547_JPG$',
  images: [
    'https://images.samsung.com/is/image/samsung/p6pim/ae/lh75wafplgcxue/gallery/ae-wafx-p-lh75wafplgcxue-548877160?$Q90_684_547_JPG$',
    'https://images.samsung.com/is/image/samsung/p6pim/ae/lh75wafplgcxue/gallery/ae-wafx-p-lh75wafplgcxue-548877123?$Q90_684_547_JPG$',
    'https://images.samsung.com/is/image/samsung/p6pim/ae/lh75wafplgcxue/gallery/ae-wafx-p-lh75wafplgcxue-548877124?$Q90_684_547_JPG$'
  ]
});
// Owner-selected Candy island cooker hood; manufacturer images.
PRODUCTS.push({
  id: 'candy-cvmi970lx', name: 'Candy CVMI-970LX 90cm Island Cooker Hood',
  category: 'Cookers', subcategory: 'Cookers', price: 7999,
  description: 'Create a polished kitchen centrepiece with this 90cm Candy island cooker hood. Its stainless-steel finish, LED lighting and three extraction speeds bring practical control to your cooking space.',
  specs: 'Model: CVMI970LX; 90cm island cooker hood; stainless steel; button control; three speeds; LED lighting; aluminium grease filter.',
  features: ['90cm island design', 'Stainless-steel finish', 'Three extraction speeds', 'LED lighting and button controls'],
  image: 'https://www.candy-home.com/h-image/haier-product/2024/8/17225275/1_36900382_19_01_l_cvm670lx-M.jpg?w=1000&h=742&f=jpeg&q=80&s=HVfxHm_k4JydsnQ8',
  images: [
    'https://www.candy-home.com/h-image/haier-product/2024/8/17225275/1_36900382_19_01_l_cvm670lx-M.jpg?w=1000&h=742&f=jpeg&q=80&s=HVfxHm_k4JydsnQ8',
    'https://www.candy-home.com/h-image/haier-product/2024/8/17225285/1_36900382_19_02_l_cvm670lx-32238-M.jpg?w=1000&h=743&f=jpeg&q=80&s=DZ-c-vaHjPR957QG',
    'https://www.candy-home.com/h-image/haier-product/2024/8/17225285/1_36900382_19_03_p_cvm670lx-90148-M.jpg?w=982&h=1000&f=jpeg&q=80&s=FwNLr-X7M3KYEZ7-'
  ]
});

// Owner-selected Sunnywalk 55-inch Android television.
PRODUCTS.push({
  id: 'sunnywalk-55-android-tv',
  name: 'Sunnywalk 55-inch 4K UHD Android Smart TV',
  category: 'TVs', subcategory: 'TVs', price: 6299,
  description: 'Enjoy big-screen entertainment with this 55-inch Sunnywalk Android Smart TV. Its bezel-less design and Bluetooth connectivity bring flexible viewing to your living space.',
  specs: '55-inch; 4K UHD; Android 12; bezel-less design; Bluetooth.',
  features: ['55-inch 4K UHD display', 'Android 12 Smart TV', 'Bezel-less design', 'Bluetooth connectivity'],
  image: 'images/sunnywalk-55-smart-tv.webp.png',
  images: ['images/sunnywalk-55-smart-tv.webp.png']
});
// TCL TAC-48CHFA/FHI: official exact-model product photography.
PRODUCTS.push({id:'tcl-tac-48chfa-fhi',name:'TCL TAC-48CHFA/FHI 5HP Inverter Floor Standing Air Conditioner',category:'Air conditioners',subcategory:'Air conditioners',price:23999,description:'Keep larger spaces comfortable with this floor-standing TCL air conditioner. Its inverter design, touch controls and long airflow combine flexible operation with a sleek upright profile.',specs:'Model: TAC-48CHFA/FHI; 5HP; floor-standing; inverter; R410 refrigerant; touch control; remote control.',features:['5HP floor-standing cooling','Inverter technology','Touch controls and remote','Long airflow'],image:'images/tcl-48chfa-1.png',images:['images/tcl-48chfa-1.png','images/tcl-48chfa-2.png','images/tcl-48chfa-3.png']});
// TCL 75C6K exact-model product gallery.
PRODUCTS.push({id:'tcl-75c6k',name:'TCL 75C6K 75-inch QD-Mini LED 4K TV',category:'TVs',subcategory:'TVs',price:17999,description:'Bring cinematic entertainment into your living room with the TCL 75C6K. Its expansive 4K QD-Mini LED display and slim design give films, sport and games a striking stage.',specs:'Model: 75C6K; 75-inch display; 4K UHD; QD-Mini LED; 144Hz native refresh rate; HVA panel; Game Master.',features:['75-inch 4K UHD display','QD-Mini LED technology','144Hz native refresh rate','Game Master'],image:'images/tcl75c6k-official.png',images:['images/tcl75c6k-official.png','images/tcl-75c6k-side-1.png','images/tcl-75c6k-side-2.png']});
// Exact-model manufacturer photograph for Midea MSAF-12CRN1.
{ const item = PRODUCTS.find(p => p.name === 'Midea MSAF-12CRN1 Air Conditioner'); if (item) { item.image = 'images/midea-msaf-12crn1-official.png'; item.images = [item.image]; } }
// Exact-model manufacturer photograph for Midea MSAF-18CRN1.
{ const item = PRODUCTS.find(p => p.name === 'Midea MSAF-18CRN1 Air Conditioner'); if (item) { item.image = 'images/midea-msaf-18crn1-official.png'; item.images = [item.image]; } }

// Owner-selected premium refrigerator and cooker hood.
PRODUCTS.push({
  id: 'midea-mdrs925cim46m',
  name: 'Midea MDRS925CIM46M 700L SPACEMASTER Side-by-Side Refrigerator',
  category: 'Refrigerators', subcategory: 'Refrigerators', price: 16599,
  description: 'Give fresh and frozen groceries room to breathe with the Midea SPACEMASTER side-by-side refrigerator. A built-in pitcher, automatic ice maker and smart home connectivity add convenience to a spacious frost-free design.',
  specs: 'Model: MDRS925CIM46M; 700L net capacity; side-by-side; 4-star; frost-free; digital inverter; built-in pitcher; automatic ice maker; smart home connected.',
  features: ['700L net capacity', 'Built-in pitcher and auto ice maker', 'Smart home connectivity', '4-star frost-free design'],
  image: 'images/midea-mdrs925cim46m-1.webp.png',
  images: ['images/midea-mdrs925cim46m-1.webp.png','images/midea-mdrs925cim46m-2.webp.png','images/midea-mdrs925cim46m-3.webp.png','images/midea-mdrs925cim46m-4.webp.png']
});
PRODUCTS.push({
  id: 'bruhm-bhg-90fb',
  name: 'Bruhm BHG-90FB 90cm Curved Glass Cooker Hood',
  category: 'Cookers', subcategory: 'Cookers', price: 2489,
  description: 'Bring a sleek finish to your kitchen with the Bruhm BHG-90FB ducted chimney hood. Curved glass, a stainless-steel panel and touch controls pair with bright LED lighting and heat auto-clean for practical everyday cooking.',
  specs: 'Model: BHG-90FB; 90cm; ducted chimney hood; curved glass; 3-speed touch sensor controls; heat auto clean; stainless-steel panel; baffle filter; LED lights.',
  features: ['90cm curved-glass chimney design', 'Three-speed touch sensor control', 'Strong suction and heat auto clean', 'Baffle filter and LED lights'],
  image: 'images/bruhm-bhg90fb-1.jpg',
  images: ['images/bruhm-bhg90fb-1.jpg','images/bruhm-bhg90fb-2.jpg','images/bruhm-bhg90fb-3.jpg']
});

PRODUCTS.push({id:'corner-wing-90cm-black-hood',name:'90cm Corner Wing Black Cooker Hood Extractor',category:'Cookers',subcategory:'Cookers',price:6999,description:'Give your kitchen a bold finish with this 90cm black corner-wing extractor. Its distinctive profile adds a contemporary touch to the cooking area.',specs:'90cm; corner-wing cooker hood; electric; black finish.',features:['90cm corner-wing design','Black finish'],image:'images/corner-wing-black-hood.webp.png',images:['images/corner-wing-black-hood.webp.png']});
// TCL F711TL retailer gallery, model identified on the source listing.
{ const item = PRODUCTS.find(p => p.name === 'TCL F711TL Washing Machine'); if (item) { item.image = 'images/tcl-f711tl-electroland-1.webp.webp'; item.images = ['images/tcl-f711tl-electroland-1.webp.webp','images/tcl-f711tl-electroland-2.webp.webp','images/tcl-f711tl-electroland-3.webp.webp']; } }
// TCL 85C6K exact-model manufacturer gallery.
PRODUCTS.push({id:'tcl-85c6k',name:'TCL 85C6K 85-inch QD-Mini LED 4K TV',category:'TVs',subcategory:'TVs',price:26999,description:'Make movie nights feel larger with the TCL 85C6K. Its expansive 4K QD-Mini LED display brings rich colour to entertainment, while the slim design and smooth 144Hz refresh rate make a striking centrepiece for films, sport and games.',specs:'Model: 85C6K; 85-inch display; 4K UHD; QD-Mini LED; QLED; Google TV; 144Hz native refresh rate; ONKYO 2.1 audio.',features:['85-inch 4K QD-Mini LED display','144Hz native refresh rate','Google TV entertainment','ONKYO 2.1 sound'],image:'images/tcl-85c6k-1.png',images:['images/tcl-85c6k-1.png','images/tcl-85c6k-2.webp','images/tcl-85c6k-3.webp']});
