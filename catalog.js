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
