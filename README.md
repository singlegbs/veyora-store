# veyora-store

Veyora Store — home appliances and decor.

## Product images and credits

The appliance catalog is in `catalog.js`. Product images are stored in `images/`; a placeholder is shown where an image has not yet been added. Confirm usage rights before reuse.

- `images/midea-mf200w120wbt.png`: Midea, https://www.midea.com/ng/washing-machines/front-load/front-load-washer-lunar-dial-series.mf200w120wb-t
- `images/tcl-43s5k.png`: TCL, https://www.tcl.com/global/en/support/model/43s5k
- `images/samsung-wd17t6300gp-sp.webp.png`: VariBuy product listing, https://varibuy.com/product/samsung-17kg-10kg-eco-bubble-washer-dryer-w-ai-control-air-wash-1100-rpm-hygiene-steam-wifi-embedded-smart-app-support-inox-wd17t6300gp-sp/ (image https://varibuy.com/wp-content/uploads/2024/07/WD17T6300GP-SP.webp). Confirm usage rights before reuse.
- `pexels-mohammadabbasi-30946801.jpg`: Mohammad abasi, Pexels, https://www.pexels.com/photo/stylish-black-kitchen-appliance-set-on-warm-background-30946801/ ; Pexels license https://www.pexels.com/license/ . This is a lifestyle image, not a verified product model.

The sources and licenses for the other old placeholder images, including the living-room image, have not been verified.

## Configuration

`products.js` holds legacy sample product data and public Paystack and Supabase configuration. `catalog.js` replaces the sample array for the current appliance catalog. The Paystack key uses live mode; do not enter payment details during testing. Live payment success depends on account approval. Never put a Paystack secret key or Supabase service-role key in this public repository.

Orders are stored as pending; verify successful payment reference and amount in Paystack before fulfillment, and update status manually in Supabase. Public inserts do not establish that an order is paid.

### Additional appliance images

The following local product images come from VariBuy listings. Confirm usage rights before reuse.

- `images/MDRF632FGN46D.webp.png`: https://varibuy.com/product/midea-470l-frost-free-4-door-refrigerator-w-electronic-display-424l-net-capacity-quattro-inverter-compressor-mdrf632fgn46d/ (image https://varibuy.com/wp-content/uploads/2024/10/MDRF632FGN46D-1.webp)
- `images/65T6D.webp.png`: https://varibuy.com/product/tcl-65-t6d-premium-qled-google-tv-2026-colourful-quantum-crystal-bionic-colour-optimization-technology-hva-panel-ai-cinematic-agent-aipq-processor-dolby-vision-dolby-atmos-slim-uni-b/ (image https://varibuy.com/wp-content/uploads/2026/05/65T6D.webp)
- `images/NAS-1200FL-DD.webp.png`: https://varibuy.com/product/nasco-800l-double-door-chest-freezer-silver-nas-1200fl-dd/ (image https://varibuy.com/wp-content/uploads/2024/11/NAS-1200FL-DD-1.webp)
- `images/NASF2-400FDR.webp.png`: https://varibuy.com/product/nasco-360l-2-star-french-door-refrigerator-cross-door-fridge-freezer-combination-nasf2-400fdr/ (image https://varibuy.com/wp-content/uploads/2026/02/NASF2-400FDR-4-DOOR-REFRIGERATOR.webp)
- `images/C211WDG.webp.png`: https://varibuy.com/product/tcl-10-5kg-6kg-dd-inverter-washer-dryer-combo-1200-rpm-dark-grey-16-programs-c211wdg/ (image https://varibuy.com/wp-content/uploads/2024/08/C211WDG-TCL-WASHER-DRYER.webp)
- `images/75P7K.webp.png`: VariBuy listing, https://varibuy.com/product/tcl-75-p7k-qled-4k-google-tv-2025-4k-hdr-led-tv-google-assistant-bbc-iplayer-dolby-atmos-dolby-vision-hdr10-120hz-game-accelerator-motion-clarity-75p7k/ ; image https://varibuy.com/wp-content/uploads/2025/04/75P7K.webp. Confirm usage rights before reuse.

- `images/F708TL.webp.png`: VariBuy product listing, https://varibuy.com/wp-content/uploads/2023/09/F708TL-450x450.avif. Confirm usage rights before reuse.
- 
- `images/MDRC698FZN01.webp.png`: VariBuy product listing, https://varibuy.com/product/midea-508l-double-door-chest-freezer-white-mdrc698fzn01/ (image https://varibuy.com/wp-content/uploads/2024/08/MDRC698FZN01.webp). Confirm usage rights before reuse.

## Additional photo source credits

VariBuy listing images; confirm reuse rights before use.

`images/NAS-425FL-G.webp.png`: https://varibuy.com/wp-content/uploads/2025/04/NAS-425FL-G-CHEST-FREEZER.webp

`images/MDRC407FZN43D.webp.png`: https://varibuy.com/wp-content/uploads/2024/10/MDRC407FZN43D-CHEST-FREEZER.webp

`images/NAS-500FL-DD.webp.png`: https://varibuy.com/wp-content/uploads/2024/11/NAS-500FL-DD-CHEST-FREEZER.webp

`images/NAS-380SK.png`: https://varibuy.com/wp-content/uploads/2024/10/NAS-380SK-CHEST-FREEZER.png

`images/WT12J4200MR.webp.png`: https://varibuy.com/wp-content/uploads/2023/03/WT12J4200MR-WASHER.webp

`images/MF110W80B-T.webp.png`: https://varibuy.com/wp-content/uploads/2025/12/MF110W80B-T-FL-WASHING-MACHINE.webp

### Additional photo credits
VariBuy product listing images; confirm usage rights before reuse.
- `images/50S5K-main.png`: https://varibuy.com/wp-content/uploads/2025/08/50S5K-2K-FHD-TV-1.webp
- `images/50S5K-alt1.png`: https://varibuy.com/wp-content/uploads/2025/08/50S5K-1.webp
- `images/50S5K-alt2.png`: https://varibuy.com/wp-content/uploads/2025/08/50S5K.webp
- `images/NASGC-LME90I-main.png`: https://varibuy.com/wp-content/uploads/2023/04/NASGC-LME90I.webp

### Nasco NASD2-36 refrigerator gallery
- `images/NASD2-36-main.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/04/NASD2-36D.webp
- `images/NASD2-36-alt1.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/04/NASD2-36D-NASCO-REFRIGERATOR.webp
- `images/NASD2-36-alt2.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/04/NASD2-36D..webp
- `images/NASD2-36-alt3.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/04/NASCO-NASD2-36D.webp
### Samsung RT35CG5421S9GH refrigerator gallery
- `images/RT35CG5421S9GH-main.webp.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/10/RT35CG5421S9GH.webp
- `images/RT35CG5421S9GH-alt1.webp.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/10/RT35CG5421S9GH-1.webp
- `images/RT35CG5421S9GH-alt2.webp.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/10/SAMSUNG-RT35CG5421S9GH.webp
- `images/RT35CG5421S9GH-alt3.webp.png`: VariBuy listing, https://varibuy.com/wp-content/uploads/2023/10/RT35CG5421S9GH-REF.webp
Listing: https://varibuy.com/product/samsung-345l-frost-free-top-mount-refrigerator-with-twist-ice-maker-rt35cg5421s9gh/ . Confirm usage rights before reuse.

### Midea MF110W80B/T washer gallery
Images `images/MF110W80B-T-gallery-1.webp.png` through `images/MF110W80B-T-gallery-5.webp.png` were sourced from VariBuy's exact-model product listing: https://varibuy.com/product/midea-8kg-front-load-washing-machine-bldc-inverter-motor-1400-rpm-15-programs-lunar-dial-integrated-digital-control-led-display-panel-mf110w80b-t/. The respective source images are:
- https://varibuy.com/wp-content/uploads/2025/12/MIDEA-MF110W80B-T-FL-WASHING-MACHINE.webp
- https://varibuy.com/wp-content/uploads/2025/12/MF110W80B-T-1.webp
- https://varibuy.com/wp-content/uploads/2025/12/MF110W80B-T.webp
- https://varibuy.com/wp-content/uploads/2025/12/MIDEA-MF110W80B-T.webp
- https://varibuy.com/wp-content/uploads/2025/12/MIDEA-MF110W80B-T-WASHER-1.webp
Confirm image usage rights before reuse.

### Nasco NASF2-250FLD refrigerator gallery
The five images `images/nasf2-250fld-1.png` through `images/nasf2-250fld-5.png` are sourced in order from the VariBuy exact-model listing https://varibuy.com/product/nasco-210l-2-star-top-mount-refrigerator-w-water-dispenser-nasf2-250fld/:
- https://varibuy.com/wp-content/uploads/2024/10/NASF2-250FLD-DD-REF.webp
- https://varibuy.com/wp-content/uploads/2024/10/NASF2-250FLD-REFRIGERATOR-WITH-DISPENSER-1.webp
- https://varibuy.com/wp-content/uploads/2024/10/NASF2-250FLD-REF.webp
- https://varibuy.com/wp-content/uploads/2024/10/NASCO-NASF2-250FLD-REF.webp
- https://varibuy.com/wp-content/uploads/2024/10/NASCO-NASF2-250FLD.webp
Confirm image usage rights before reuse.

### Midea MT100W120/WG washer gallery

Images `images/midea-mt100w120wg-1.webp.png` through `images/midea-mt100w120wg-3.webp.png` are from the VariBuy exact-model listing https://varibuy.com/product/midea-12kg-twin-tub-washing-machine-mt100w120-wg-2/. Sources in order:

- https://varibuy.com/wp-content/uploads/2023/06/MIDEA-MT100W120-WG-WASHER.webp
- https://varibuy.com/wp-content/uploads/2023/06/MT100W120-WG-WASHER.webp
- https://varibuy.com/wp-content/uploads/2023/06/MT100W120-WG-WASHER-1.webp

Confirm image usage rights before reuse.
- `images/samsung-wd17t6300gp-{1..5}.webp.png`: VariBuy Samsung WD17T6300GP/SP listing: https://varibuy.com/product/samsung-17kg-10kg-eco-bubble-washer-dryer-w-ai-control-air-wash-1100-rpm-hygiene-steam-wifi-embedded-smart-app-support-inox-wd17t6300gp-sp/ . Original images: https://varibuy.com/wp-content/uploads/2024/07/WD17T6300GP-SP.webp ; https://varibuy.com/wp-content/uploads/2024/07/WD17T6300GP-SP-1.webp ; https://varibuy.com/wp-content/uploads/2024/07/SAMSUNG-WD17T6300GP-SP-1.webp ; https://varibuy.com/wp-content/uploads/2024/07/WD17T6300GP-SP-SAMSUNG-WASHER-DRYER-1.webp ; https://varibuy.com/wp-content/uploads/2024/07/SAMSUNG-WD17T6300GP-SP.webp . Confirm usage rights before reuse.

### Nasco gallery image credits
- `images/nasd2-24fl-1.webp.png`, `images/nasd2-24fl-3.webp.png`, `images/nasd2-24fl-4.webp.png`, `images/nasd2-24fl-5.webp.png`: VariBuy NASD2-24FL listing https://varibuy.com/product/nasco-196l-bottom-freezer-refrigerator-nasd2-24fl/ . Source images: https://varibuy.com/wp-content/uploads/2025/02/NASD2-24FL-1.webp ; https://varibuy.com/wp-content/uploads/2025/02/NASD2-24FL-REF.webp ; https://varibuy.com/wp-content/uploads/2025/02/NASCO-NASD2-24FL-REF.webp ; https://varibuy.com/wp-content/uploads/2025/02/NASCO-NASD2-24FL-BOTTOM-MOUNT-REF.webp .
- `images/nas-250fl-1.webp.png`, `images/nas-250fl-2.webp.png`: VariBuy NAS-250FL listing https://varibuy.com/product/nasco-198l-2-star-chest-freezer-nas-250fl/ .
- `images/nas-210-1.png`: VariBuy NAS-210 listing https://varibuy.com/product/nasco-200l-chest-freezer-nas-210/ .

Confirm image usage rights before reuse.

### Additional Nasco product images
- `images/nasf2-320fld-1.webp.png`: VariBuy NASF2-320FLD listing, https://varibuy.com/product/nasco-280l-3-star-top-mount-refrigerator-w-dispenser-nasf2-320fld/ ; image https://varibuy.com/wp-content/uploads/2024/06/NASF2-320FLD.webp
- `images/NASD2-20FL-main.webp.png`: VariBuy NASD2-20FL listing, https://varibuy.com/product/nasco-158l-bottom-mount-freezer-refrigerator-nasd2-20fl/ ; image https://varibuy.com/wp-content/uploads/2023/08/NASCO-NASD2-20FL-REF.webp
- `images/nas-200fl-g-1.webp.png`: VariBuy NAS-200FL-G listing, https://varibuy.com/product/nasco-145l-2-star-chest-freezer-nas-200fl-g/ ; image https://varibuy.com/wp-content/uploads/2024/12/NASCO-NAS-200FL-G-FREEZER.webp
Confirm image usage rights before reuse.

### TCL P211FLG washer gallery

`images/tcl-p211flg-1.jpg`, `images/tcl-p211flg-3.jpg`, `images/tcl-p211flg-4.jpg`, and `images/tcl-p211flg-5.jpg` are sourced from the Mehia exact-model listing: https://mehia.com.gh/product/tcl-front-load-inverter-10-5kg-washing-machine-p211flg/ . Confirm image usage rights before reuse.

### Midea MDRC698FZN01 chest freezer gallery
The four images `images/midea-mdrc698fzn01-1.jpg` through `images/midea-mdrc698fzn01-4.jpg` are from the [Appliancity exact-model listing](https://appliancitymall.com/midea-508l-chest-freezer-mdrc698fzn01/). Source images, in order:
- https://appliancitymall.com/wp-content/uploads/MIDEA-508LTRS-CHEST-FREEZER-MDRC698FZN01-FRONT.jpg
- https://appliancitymall.com/wp-content/uploads/MIDEA-508LTRS-CHEST-FREEZER-MDRC698FZN01-SIDE-OPEN-1.jpg
- https://appliancitymall.com/wp-content/uploads/MIDEA-508LTRS-CHEST-FREEZER-MDRC698FZN01-FRONT-OPEN-1.jpg
- https://appliancitymall.com/wp-content/uploads/MIDEA-508LTRS-CHEST-FREEZER-MDRC698FZN01-SIDE-OPEN-2.jpg

Confirm image usage rights before reuse.

### Nasco NASF2-320FLD refrigerator gallery

Images `images/nasco-nasf2-320fld-1.jpg` through `images/nasco-nasf2-320fld-4.jpg` are from Mehia's exact-model listing: https://mehia.com.gh/product/nasco-280ltr-top-mounted-freezer-nasf2-320fld/ . Confirm image usage rights before reuse.

### Samsung NX24BG45411VGH cooker gallery

Images `images/samsung-nx24-1.webp.png` through `images/samsung-nx24-6.webp.png` were sourced in order from VariBuy's exact-model listing: https://varibuy.com/product/samsung-4-burner-50x60-gas-cooker-w-grill-auto-ignition-silver-nx24bg45411vgh/. Confirm image usage rights before reuse.

### Midea MDRT241FTGN50 and Nasco NASGC-LME90B photos

- `images/Midea MDRT241 view 1.webp.png`: https://varibuy.com/wp-content/uploads/2024/09/MIDEA-MDRT241FTGN50-1.webp
- `images/Midea MDRT241 view 2.webp.png`: https://varibuy.com/wp-content/uploads/2024/09/MDRT241FTGN50-BOTTOM-MOUNT-REF.webp
- `images/Midea MDRT241 view 3.webp.png`: https://varibuy.com/wp-content/uploads/2024/09/MDRT241FTGN50-REF-1.webp
- `images/nasgc-lme90b-source.webp.png`: VariBuy exact-model listing https://varibuy.com/product/nasco-90x60-5-burner-gas-cooker-w-grill-black-nasgc-lme90b/

Confirm usage rights before reuse.
### Nasco NAS-400FL-G freezer gallery

The four locally hosted images `images/nas-400fl-g-1.jpg`, `images/nas-400fl-g-view3.jpg`, `images/nas-400fl-g-view4.jpg` and `images/nas-400fl-g-view5.jpg` are from CompuGhana's exact-model listing https://compughana.com/products/nasco-nas-400fl-g-288l-chest-freezer-golden. Original images: https://compughana.com/cdn/shop/files/project_79.jpg?v=1772536464&width=600, https://compughana.com/cdn/shop/files/project_81.jpg?v=1772536463&width=600, https://compughana.com/cdn/shop/files/project_82.jpg?v=1772536463&width=600 and https://compughana.com/cdn/shop/files/project_83.jpg?v=1772536464&width=600. Confirm usage rights before reuse.
### Midea 30AMG5G027 cooker photographs

`images/midea-30amg5g027-1.jpg` and `images/midea-30amg5g027-4.jpg` are from Electroland's exact-model listing: https://electrolandgh.com/product/midea-5-burner-gas-cooker-with-oven-30amg5g027/ . Original files: https://electrolandgh.com/wp-content/uploads/2025/05/30AMG5G027-SILVER.jpg and https://electrolandgh.com/wp-content/uploads/2025/05/30AMG5G027.jpg . Confirm image usage rights before reuse.

### Nasco NAS-J50FBFL television photograph

`images/nasco-nas-j50fbfl-1.jpg` is from Electroland's exact-model listing https://electrolandgh.com/product/nasco-50%E2%80%B3-led-digital-satellite-tv-nas-j50fbfl/ . Original image: https://electrolandgh.com/wp-content/uploads/2025/02/NAS-J50FBFL-1-scaled-1-1024x1024.jpg . Confirm image usage rights before reuse.

### Additional Midea appliance photos
- `images/midea-msaf24c-18crdn1-r32.png` and `images/midea-msaf24b-12crdn1-r32.png`: Electroland exact-model listing https://electrolandgh.com/product/midea-unicool-inverter-air-condition/ ; originals https://electrolandgh.com/wp-content/uploads/2026/01/MSAF24C-18CRDN1-R32-1-1-1024x1024.png and https://electrolandgh.com/wp-content/uploads/2026/01/MSAF24B-12CRDN1-R32-L-1024x1024.png .
- `images/midea-mdrc345fzg43-1.webp.png`: VariBuy exact-model listing https://varibuy.com/product/midea-249l-chest-freezer-mdrc345fzg43/ ; original https://varibuy.com/wp-content/uploads/2023/05/MIDEA-MDRC345FZG43-FREEZER.webp .
Confirm image usage rights before reuse.

### Samsung washer and TCL air conditioner galleries

- `images/samsung-wa80f13s5cnq-1.png` and `images/samsung-wa80f13s5cnq-3.png`: Electroland, https://electrolandgh.com/product/samsung-13kg-top-load-washing-machine/
- `images/samsung-wa80f13s5cnq-dynamic.jpg`: Samsung, https://www.samsung.com/africa_en/washers-and-dryers/washing-machines/wa80f-24-top-load-washer-ai-wash-ecobubble-ai-energy-mode-13kg-cotta-charcoal-wa80f13s5cnq/
- `images/tcl-tac-24csa-tph11i-1.webp.webp` through `images/tcl-tac-24csa-tph11i-4.webp.webp`: Niamapa, https://www.niamapa.com/product/tcl-2-5hp-breezein-inverter-smart-air-conditioner-r410-gas-tac-24csa-tph11i/
- `images/samsung-rt28har4dsa-1.jpg`: Electroland, https://electrolandgh.com/product/samsung-duracool-234ltr-top-mount-fridge/

Confirm image usage rights before reuse.

### Midea MDRS710FGF46D side-by-side refrigerator images

The four files `images/midea-mdrs710-01.webp.png` through `images/midea-mdrs710-04.webp.png` were sourced, in order, from the VariBuy exact-model listing: https://varibuy.com/product/midea-548l-frost-free-side-by-side-refrigerator-w-led-display-water-dispenser-inverter-compressor-multi-air-flow-cooling-child-lock-bru-steel-mdrs710fgf46d-copy/ . Original images: https://varibuy.com/wp-content/uploads/2026/05/MDRS710FGF46D.webp ; https://varibuy.com/wp-content/uploads/2026/05/MDRS710FGF46D-REF.webp ; https://varibuy.com/wp-content/uploads/2026/05/MIDEA-MDRS710FGF46D.webp ; https://varibuy.com/wp-content/uploads/2026/05/MDRS710FGF46D-1.webp . Confirm image usage rights before reuse.

### TCL 55T6D TV gallery

`images/tcl-55t6d-02.webp.png`, `images/tcl-55t6d-03.webp.png`, and `images/tcl-55t6d-04.webp.png` are from the VariBuy exact-model listing: https://varibuy.com/product/tcl-55-t6d-premium-qled-google-tv-2026-colourful-quantum-crystal-bionic-colour-optimization-technology-hva-panel-ai-cinematic-agent-aipq-processor-dolby-vision-dolby-atmos-slim-uni-b/ . Confirm image usage rights before reuse.

### Nasco NAS-J12-N1-ECO air conditioner gallery
Images `images/nas-j12-eco-1.webp.png` through `images/nas-j12-eco-4.webp.png` are from the VariBuy exact-model listing https://varibuy.com/product/nasco-1-5hp-r22-split-air-conditioner-golden-nas-j12-n1-eco/. Original images, in order: https://varibuy.com/wp-content/uploads/2025/06/NAS-J12-N1-ECO-1.webp, https://varibuy.com/wp-content/uploads/2025/06/NAS-J12-N1-ECO-NASCO-AC.webp, https://varibuy.com/wp-content/uploads/2025/06/NAS-J12-N1-ECO.webp, https://varibuy.com/wp-content/uploads/2025/06/NAS-J12-N1-ECO-AC.webp. Confirm image usage rights before reuse.

### Midea MDRF632FGN46D refrigerator gallery

The four locally hosted images `images/mdrf632fgn46d-2.webp.png` through `images/mdrf632fgn46d-5.webp.png` were obtained from the exact-model VariBuy listing: https://varibuy.com/product/midea-470l-frost-free-4-door-refrigerator-w-electronic-display-424l-net-capacity-quattro-inverter-compressor-mdrf632fgn46d/ . Sources in order:

- https://varibuy.com/wp-content/uploads/2024/10/MDRF632FGN46D.webp
- https://varibuy.com/wp-content/uploads/2024/10/MIDEA-MDRF632FGN46D-1.webp
- https://varibuy.com/wp-content/uploads/2024/10/MIDEA-MDRF632FGN46D.webp
- https://varibuy.com/wp-content/uploads/2024/10/MDRF632FGN46D-REF.webp

Confirm usage rights before reuse.

### Nasco NASF2-400FDR and TCL C211WDG galleries

`images/nasf2-400fdr-2.webp.png` is from the exact-model VariBuy listing: https://varibuy.com/product/nasco-360l-2-star-french-door-refrigerator-cross-door-fridge-freezer-combination-nasf2-400fdr/

`images/c211wdg-2.webp.png`, `images/c211wdg-3.webp.png`, and `images/c211wdg-4.webp.png` are from the exact-model VariBuy listing: https://varibuy.com/product/tcl-10-5kg-6kg-dd-inverter-washer-dryer-combo-1200-rpm-dark-grey-16-programs-c211wdg/

Confirm image usage rights before reuse.

### TCL TAC-12CSA/XA82I air conditioner gallery
- `images/tcl-xa82i-1.webp.png`: VariBuy exact-model listing, https://varibuy.com/wp-content/uploads/2023/07/TAC-12CSA-XA82I-1.webp
- `images/tcl-xa82i-2.webp.png`: VariBuy exact-model listing, https://varibuy.com/wp-content/uploads/2023/07/TAC-12CSA-XA82I.webp
- `images/tcl-tac-12csa-xa82i-angle3.jpg`: Omek Gigs exact-model listing, https://api.omekgh.com/wp-content/uploads/2026/10/tcl-1-5hp-inverter-split-air-conditioner-black-mirror-r410-t-3.png
- `images/tcl-tac-12csa-xa82i-angle4.jpg`: Omek Gigs exact-model listing, https://api.omekgh.com/wp-content/uploads/2026/10/tcl-1-5hp-inverter-split-air-conditioner-black-mirror-r410-t-4.png
Confirm image usage rights before reuse.

- `images/lg-s4-q12jartb-official-{1,2,3}.jpg`: LG S4-Q12JARTB product gallery, https://www.lg.com/africa/residential-air-conditioners/lg-s4-q12jartb . Confirm usage rights before reuse.
- 

### Samsung RS70F65K4TGH refrigerator gallery

The local images `images/samsung-rs70f65k4tgh-1.png` through `images/samsung-rs70f65k4tgh-3.png` are from Ghanaye Premier's exact-model listing https://ghanayepremier.com/?product=samsung-635l-side-by-side-refrigerator-rs70f65k4tgh . Source images in order: https://ghanayepremier.com/wp-content/uploads/2026/02/Samsung-Side-By-Side-Refrigerator-RS70F65K4TGH-1.png ; https://ghanayepremier.com/wp-content/uploads/2026/02/Samsung-Side-By-Side-Refrigerator-RS70F65K4TGH-3.png ; https://ghanayepremier.com/wp-content/uploads/2026/02/Samsung-Side-By-Side-Refrigerator-RS70F65K4TGH-2.png . Confirm image usage rights before reuse.
- Samsung RS80F65G4FGH photographs: VariBuy product listing. `images/samsung-rs80-front.webp.png`: https://varibuy.com/wp-content/uploads/2025/07/SAMSUNG-RS80F65G4FGH-REFRIGERATOR.webp ; `images/samsung-rs80-2.webp.png`: https://varibuy.com/wp-content/uploads/2025/07/RS80F65G4FGH.webp ; `images/samsung-rs80-3.webp.png`: https://varibuy.com/wp-content/uploads/2025/07/SAMSUNG-RS80F65G4FGH-1.webp . Confirm usage rights before reuse.

### Owner-selected product image sources
- `images/sunnywalk-2hp-r410.webp.png`: VariBuy Sunnywalk 2.0HP R410 split AC listing, https://varibuy.com/product/sunnywalk-2-0hp-r410-split-air-conditioner/ .
- `images/sunnywalk-55-smart-tv.webp.png`: VariBuy Sunnywalk 55-inch 4K Android Smart TV listing, https://varibuy.com/product/sunnywalk-55-4k-ultra-hd-android-smart-bezel-less-tv-w-bluetooth-connectivity/ .
- `images/nasco-j50fbfl-g-jumia.jpg`: Nasco NAS-J50FBFL-G product graphic on Jumia listing, https://www.jumia.com.gh/50-google-smart-4k-hdr-led-tv-nas-j50fbfl-g-black-nasco-mpg13389151.html .
- `images/tcl-43s5k-official-{1,2,3}`: TCL product gallery, https://www.tcl.com/global/en/tvs/s5k .
Confirm image reuse rights before use.
- `images/lg-p800r3agnc-{1,2,3}.jpg`: LG official product photos, https://www.lg.com/africa/washing-machines/lg-p800r3agnc . Confirm usage rights before reuse.
- `images/wanbo-vali1pro-{1,2,3}.png`: Wanbo official product photos, https://wanbo.cn/products/wanbo-vali-1-pro-google-tv-projector . Confirm usage rights before reuse.

### Owner-selected batch image credits
- `images/wanbo-cube2pro-beigegreen.png`: Wanbo Cube 2 Pro Beige Green official gallery, https://wanbo.cn/products/wanbo-cube-2-pro-projector
- `images/samsung-lsp7t-1.webp.png` through `images/samsung-lsp7t-3.webp.png`: VariBuy exact SP-LSP7TUAXGH listing, https://varibuy.com/product/samsung-120-the-premiere-lsp7t-ultra-short-throw-4k-smart-laser-projector-sp-lsp7tuaxgh/
- `images/samsung-wd90f22-1.webp.png` through `images/samsung-wd90f22-3.webp.png`: VariBuy exact WD90F22BCSNQ listing, https://varibuy.com/product/samsung-22kg-11kg-ai-eco-bubble-washer-dryer-wd90f22bcsnq/
- `images/cecotec-2500-1.png`, `images/cecotec-2500-2.png`, `images/cecotec-2500-third.png`: Cecotec official A01_EU01_100467 gallery, https://cecotec.es/es/mini-lavavajillas-compactos/bolero-aguazero-2500-s-bi-black-glass
Confirm usage rights before reuse.

### Samsung RF48A4000M9/GH photo credits
- `images/samsung-rf48a4000m9gh-1.jpg` and `images/samsung-rf48a4000m9gh-3.jpg`: Goodluck Africa exact-model listing, https://goodluckafrica.com/product/samsung-468ltr-refrigerators-4-doors-french-door-rf48a4000m9-gh/
- `images/samsung-rf48-supplier-3.webp.png` and `images/samsung-rf48-supplier-4.webp.png`: VariBuy exact-model listing, https://varibuy.com/product/samsung-511l-4-door-french-door-refrigerator-with-twin-cooling-plus-and-digital-inverter-technology-rf48a4000m9-gh/
Confirm image usage rights before reuse.
- `images/tcl75c6k-official.png`: TCL 75C6K manufacturer support page, https://www.tcl.com/westafrica/en/support/model/75c6k.
- `images/tcl-75c6k-side-1.png` and `images/tcl-75c6k-side-2.png`: Electroland exact-model 75C6K gallery, https://electrolandgh.com/product/tcl-75-qd-mini-4k-television/. Confirm usage rights before reuse.
- `images/midea-msaf-12crn1-official.png`: Midea official exact-model photo, https://www.midea.com/ng/air-conditioners/split-aircons/r410-forest-fixed-speed-split-air-conditioner.msaf-12crni. Confirm reuse rights.
- `images/midea-msaf-18crn1-official.png`: Midea official exact-model photo, https://www.midea.com/ng/air-conditioners/split-aircons/r410-forest-fixed-speed-split-air-conditioner.msaf-18crni. Confirm reuse rights.

### Midea MDRS925CIM46M and Bruhm BHG-90FB galleries
- `images/midea-mdrs925cim46m-{1,2,3,4}.webp.png`: VariBuy exact-model listing https://varibuy.com/product/midea-700l-4-star-frost-free-side-by-side-refrigerator-spacemaster-built-in-pitcher-auto-ice-maker-smart-home-connected-mdrs925cim46m/
- `images/bruhm-bhg90fb-{1,2,3}.jpg`: Bruhm official exact-model gallery https://bruhm.com/gh/cooking/hood/90cm-hood/90cm-cooker-hood
Confirm image usage rights before reuse.

- `images/corner-wing-black-hood.webp.png`: VariBuy product listing, https://varibuy.com/product/90cm-corner-wing-black-hood-extractor/ . Confirm usage rights before reuse.
- TCL F711TL gallery: Electroland, https://electrolandgh.com/product/tcl-top-load-washing-machine-11kg/ . The retailer title states 10.5 kg; its F711TL feature graphic states 11 kg. Confirm usage rights before reuse.

### TCL 85C6K television gallery
`images/tcl-85c6k-1.png`, `images/tcl-85c6k-2.webp`, and `images/tcl-85c6k-3.webp`: TCL official exact-model gallery, https://www.tcl.com/global/en/tvs/85c6k. Confirm image usage rights before reuse.
