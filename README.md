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
