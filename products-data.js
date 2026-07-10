/* ==========================================================================
   ShopZone — shared product data
   Loaded by both index.html (catalog) and product.html (detail page).
   Plain JS array/object literals — no build step, no frameworks.
   ========================================================================== */

const PRODUCTS = [
  {
    id: "aurasound-pro-headphones",
    name: "AuraSound Pro Wireless Over-Ear Headphones",
    title: "AuraSound Pro Wireless Over-Ear Headphones, Active Noise Cancellation, 40H Battery, Adaptive EQ, Memory-Foam Cushions, Bluetooth 5.3 — Midnight Navy",
    brand: "AuraSound",
    category: "Electronics",
    price: 5499,
    originalPrice: 8999,
    rating: 4.3,
    reviewCount: 12847,
    badge: "Bestseller",
    stock: 7,
    images: ["images/gallery-1.svg","images/gallery-2.svg","images/gallery-3.svg","images/gallery-4.svg","images/gallery-5.svg"],
    colors: [
      { name: "Midnight Navy", hex: "#14213D" },
      { name: "Ember Coral", hex: "#FF6B4A" },
      { name: "Slate Grey", hex: "#5B6472" },
      { name: "Sunburst Gold", hex: "#F5A623" }
    ],
    variantLabel: "Storage / Edition",
    variantOptions: ["Standard","Pro (32GB EQ presets)","Studio (64GB + case)"],
    sizeOptions: ["S","M","L"],
    about: [
      "Industry-leading Adaptive Active Noise Cancellation adjusts in real time to your environment, from quiet rooms to airplane cabins.",
      "40-hour battery life on a single charge, with a quick 10-minute charge delivering up to 5 hours of playback.",
      "Bluetooth 5.3 with multi-point pairing — stay connected to two devices simultaneously, like your laptop and phone.",
      "Custom 40mm dynamic drivers tuned with Adaptive EQ for balanced bass, crisp mids, and detailed highs.",
      "Memory-foam ear cushions wrapped in breathable protein leather for all-day comfort during long listening sessions.",
      "Built-in 4-microphone array with wind-noise reduction for clear calls, even outdoors.",
      "Foldable, travel-friendly design with a rigid carry case and detachable braided audio cable for wired listening.",
      "Touch-sensitive controls on the ear cup for playback, calls, volume, and voice assistant access.",
      "Companion app support for custom EQ profiles, firmware updates, and personalized sound calibration.",
      "IPX4 splash resistance rating, suitable for light rain and workouts."
    ],
    specs: {
      "Brand": "AuraSound", "Model Name": "Pro Wireless ANC-40", "Processor / Chipset": "AuraCore DSP v3",
      "Driver Size": "40 mm Dynamic Drivers", "Connectivity": "Bluetooth 5.3, 3.5 mm Wired, USB-C",
      "Battery Life": "40 Hours (ANC On), 55 Hours (ANC Off)", "Charging": "USB-C, 10-min quick charge = 5 hrs playback",
      "Microphone": "4-Mic Array with Wind Reduction", "Operating System Support": "iOS, Android, Windows, macOS",
      "Colour": "Midnight Navy", "Item Weight": "268 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "aurasound-fit-smartwatch",
    name: "AuraSound Fit Smartwatch",
    title: "AuraSound Fit Smartwatch, Heart-Rate &amp; SpO2 Tracking, 14-Day Battery, AMOLED Display",
    brand: "AuraSound",
    category: "Electronics",
    price: 2299,
    originalPrice: 3499,
    rating: 4.1,
    reviewCount: 5320,
    badge: null,
    stock: 15,
    images: ["images/related-1.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: "Strap Material",
    variantOptions: ["Silicone", "Woven Nylon", "Leather"],
    sizeOptions: null,
    about: [
      "Continuous heart-rate and SpO2 monitoring with daily health insights delivered to the companion app.",
      "1.4-inch AMOLED always-on display, readable in direct sunlight with adjustable brightness.",
      "Up to 14 days of battery life in normal use, or 5 days with always-on display enabled.",
      "Tracks 100+ workout modes including running, cycling, swimming, and strength training.",
      "5ATM water resistance rating — safe for swimming and showering.",
      "Smart notifications for calls, messages, and apps, with quick-reply support on Android.",
      "Built-in GPS for accurate distance and pace tracking without a paired phone."
    ],
    specs: {
      "Brand": "AuraSound", "Model Name": "Fit SW-2", "Display": "1.4\" AMOLED, 450 nits",
      "Battery Life": "14 Days (Typical Use)", "Water Resistance": "5 ATM",
      "Connectivity": "Bluetooth 5.2, Built-in GPS", "Sensors": "Heart Rate, SpO2, Accelerometer, Gyroscope",
      "Compatibility": "iOS 12+, Android 8+", "Weight": "38 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "shopzone-boom-speaker",
    name: "ShopZone Boom Portable Bluetooth Speaker",
    title: "ShopZone Boom Portable Bluetooth Speaker, 20W, IPX7 Waterproof, 24-Hour Playtime",
    brand: "ShopZone Audio",
    category: "Electronics",
    price: 1799,
    originalPrice: 2999,
    rating: 4.4,
    reviewCount: 8410,
    badge: "Bestseller",
    stock: 22,
    images: ["images/related-2.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Ember Coral", hex: "#FF6B4A" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "20W stereo drivers with passive bass radiators deliver room-filling, distortion-free sound.",
      "IPX7 waterproof rating — fully submersible, perfect for pool days and rainy hikes.",
      "24-hour battery life on a single charge, with a rugged silicone shell built for drops.",
      "Pair two Boom speakers together for immersive stereo sound.",
      "Built-in speakerphone with echo cancellation for hands-free calls.",
      "USB-C fast charging — 15 minutes of charge gives 3 hours of playback."
    ],
    specs: {
      "Brand": "ShopZone Audio", "Model Name": "Boom 20", "Output Power": "20W RMS",
      "Water Resistance": "IPX7", "Battery Life": "24 Hours", "Connectivity": "Bluetooth 5.3, USB-C, AUX",
      "Charging Time": "2.5 Hours (Full Charge)", "Weight": "540 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "typewave-keyboard",
    name: "TypeWave Mechanical Keyboard",
    title: "TypeWave Mechanical Keyboard, RGB Backlit, Hot-Swappable Switches, 75% Layout",
    brand: "TypeWave",
    category: "Computers",
    price: 3499,
    originalPrice: 4999,
    rating: 4.5,
    reviewCount: 3190,
    badge: null,
    stock: 11,
    images: ["images/related-3.svg"],
    colors: [{ name: "Slate Grey", hex: "#5B6472" }, { name: "Midnight Navy", hex: "#14213D" }],
    variantLabel: "Switch Type",
    variantOptions: ["Linear Red", "Tactile Brown", "Clicky Blue"],
    sizeOptions: null,
    about: [
      "Hot-swappable switch sockets let you change key feel without soldering.",
      "Per-key RGB backlighting with 16.8 million colours and onboard lighting profiles.",
      "Compact 75% layout keeps arrow keys and function row without the bulk of a full-size board.",
      "Double-shot PBT keycaps resist shine and fading from years of daily typing.",
      "Detachable USB-C cable and 1000Hz polling rate for low-latency input.",
      "Aluminium top plate adds a premium, sturdy typing feel."
    ],
    specs: {
      "Brand": "TypeWave", "Model Name": "TW-75 Hot-Swap", "Layout": "75% (84 Keys)",
      "Switch Type": "Hot-Swappable Mechanical", "Backlighting": "Per-Key RGB", "Connectivity": "USB-C (Detachable), 2.4GHz, Bluetooth 5.1",
      "Keycap Material": "Double-Shot PBT", "Polling Rate": "1000 Hz", "Weight": "820 g", "Warranty": "2 Year Manufacturer Warranty"
    }
  },
  {
    id: "glidepoint-mouse",
    name: "GlidePoint Wireless Ergonomic Mouse",
    title: "GlidePoint Wireless Ergonomic Mouse, Silent Click, 6 Programmable Buttons",
    brand: "GlidePoint",
    category: "Computers",
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    reviewCount: 6045,
    badge: null,
    stock: 30,
    images: ["images/related-4.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "Ergonomic vertical grip reduces wrist strain during long work sessions.",
      "Silent-click switches rated for 5 million clicks, ideal for shared or quiet spaces.",
      "6 programmable buttons remap to shortcuts through the companion app.",
      "Adjustable DPI from 800 to 4000 for precision work or fast navigation.",
      "Dual connectivity via 2.4GHz USB receiver or Bluetooth 5.0.",
      "Up to 6 months of battery life on two AA batteries."
    ],
    specs: {
      "Brand": "GlidePoint", "Model Name": "Ergo-6", "Sensor": "Optical, 800–4000 DPI",
      "Buttons": "6 Programmable", "Connectivity": "2.4GHz USB Receiver, Bluetooth 5.0",
      "Battery Life": "Up to 6 Months (2x AA)", "Weight": "104 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "pixelsnap-camera",
    name: "PixelSnap Mirrorless Camera",
    title: "PixelSnap Mirrorless Camera, 24MP APS-C Sensor, 4K Video, In-Body Stabilization",
    brand: "PixelSnap",
    category: "Electronics",
    price: 34990,
    originalPrice: 42990,
    rating: 4.2,
    reviewCount: 1284,
    badge: null,
    stock: 5,
    images: ["images/related-5.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }],
    variantLabel: "Kit Option",
    variantOptions: ["Body Only", "With 18-55mm Lens"],
    sizeOptions: null,
    about: [
      "24MP APS-C sensor captures sharp, detailed stills even in low light.",
      "4K video recording at 30fps with in-body 5-axis image stabilization.",
      "Fast hybrid autofocus with 425 phase-detection points and eye tracking.",
      "3-inch vari-angle touchscreen for flexible shooting angles and vlogging.",
      "Weather-sealed magnesium-alloy body built for outdoor use.",
      "Dual card slots for overflow or backup recording.",
      "Wi-Fi and Bluetooth for instant photo transfer to your phone."
    ],
    specs: {
      "Brand": "PixelSnap", "Model Name": "PS-A24", "Sensor": "24MP APS-C CMOS",
      "Video": "4K30, 1080p120", "Stabilization": "5-Axis In-Body", "Autofocus Points": "425 Phase-Detection",
      "Screen": "3\" Vari-Angle Touchscreen", "Storage": "Dual SD Card Slots", "Weight": "445 g (Body Only)", "Warranty": "2 Year Manufacturer Warranty"
    }
  },
  {
    id: "trailpack-backpack",
    name: "TrailPack Everyday Backpack",
    title: "TrailPack Everyday Backpack, 25L, Padded Laptop Sleeve, Water-Resistant Fabric",
    brand: "TrailPack",
    category: "Fashion",
    price: 1299,
    originalPrice: 1999,
    rating: 4.4,
    reviewCount: 4102,
    badge: null,
    stock: 18,
    images: ["images/related-6.svg"],
    colors: [{ name: "Slate Grey", hex: "#5B6472" }, { name: "Midnight Navy", hex: "#14213D" }, { name: "Ember Coral", hex: "#FF6B4A" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: ["25L", "35L"],
    about: [
      "25-litre capacity fits daily essentials plus a change of clothes for overnight trips.",
      "Padded 15.6-inch laptop sleeve keeps devices protected and easy to access at security lines.",
      "Water-resistant ripstop fabric shrugs off light rain and spills.",
      "Ergonomic, breathable back panel and adjustable sternum strap for comfort on long walks.",
      "Multiple organizer pockets keep cables, chargers, and stationery sorted.",
      "Trolley strap slides over rolling luggage handles for easy airport transfers."
    ],
    specs: {
      "Brand": "TrailPack", "Model Name": "Everyday 25", "Capacity": "25 Litres",
      "Laptop Compartment": "Up to 15.6\"", "Material": "Water-Resistant Ripstop Nylon",
      "Closure Type": "Zip", "Weight": "620 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "hydraflow-bottle",
    name: "HydraFlow Insulated Steel Bottle",
    title: "HydraFlow Insulated Steel Bottle, 750ml, Keeps Drinks Cold for 24 Hours",
    brand: "HydraFlow",
    category: "Home & Kitchen",
    price: 549,
    originalPrice: 799,
    rating: 4.6,
    reviewCount: 9876,
    badge: null,
    stock: 40,
    images: ["images/related-7.svg"],
    colors: [{ name: "Sunburst Gold", hex: "#F5A623" }, { name: "Midnight Navy", hex: "#14213D" }, { name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: ["500ml", "750ml", "1L"],
    about: [
      "Double-wall vacuum insulation keeps drinks cold for 24 hours or hot for 12 hours.",
      "18/8 food-grade stainless steel construction resists dents and rust.",
      "Leak-proof lid with a carry loop for clipping onto bags.",
      "Condensation-free exterior — no wet rings on your desk or bag.",
      "Wide mouth opening fits standard ice cubes and makes cleaning easy.",
      "BPA-free and taste-neutral, so your water always tastes like water."
    ],
    specs: {
      "Brand": "HydraFlow", "Model Name": "Insulated 750", "Capacity": "750 ml",
      "Material": "18/8 Stainless Steel", "Insulation": "Double-Wall Vacuum", "Cold Retention": "24 Hours",
      "Hot Retention": "12 Hours", "Weight": "310 g", "Warranty": "Lifetime Manufacturer Warranty"
    }
  },
  {
    id: "lumenglow-lamp",
    name: "LumenGlow LED Desk Lamp",
    title: "LumenGlow LED Desk Lamp, Touch Dimmer, USB-C Charging Port, 5 Colour Modes",
    brand: "LumenGlow",
    category: "Home & Kitchen",
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    reviewCount: 2765,
    badge: null,
    stock: 25,
    images: ["images/related-8.svg"],
    colors: [{ name: "Sunburst Gold", hex: "#F5A623" }, { name: "Midnight Navy", hex: "#14213D" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "5 colour temperature modes and 10 brightness levels for reading, working, or relaxing.",
      "Touch-sensitive dimmer strip for quick, silent adjustments.",
      "Built-in USB-C port charges your phone or earbuds without an extra outlet.",
      "Foldable, adjustable arm directs light exactly where you need it.",
      "Flicker-free LEDs are gentle on the eyes during long study or work sessions.",
      "Memory function returns to your last-used brightness and colour setting."
    ],
    specs: {
      "Brand": "LumenGlow", "Model Name": "Glow Desk 5", "Light Source": "LED, Flicker-Free",
      "Colour Modes": "5", "Brightness Levels": "10", "Power Input": "USB-C, 5V/2A",
      "Extra Port": "USB-C Output for Charging", "Weight": "480 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "voltcube-charger",
    name: "VoltCube 65W GaN Fast Charger",
    title: "VoltCube 65W GaN Fast Charger, Dual-Port, Compact Travel Design",
    brand: "VoltCube",
    category: "Mobiles",
    price: 1199,
    originalPrice: 1799,
    rating: 4.5,
    reviewCount: 3541,
    badge: null,
    stock: 33,
    images: ["images/related-9.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "GaN technology packs 65W of power into a charger smaller than a matchbox.",
      "Dual USB-C ports charge a laptop and phone simultaneously at full speed.",
      "Smart power distribution automatically balances output across connected devices.",
      "Compatible with most USB-C laptops, phones, and tablets via Power Delivery.",
      "Foldable prongs make it easy to slip into a travel bag or pocket.",
      "Built-in safeguards against overheating, overcurrent, and short circuits."
    ],
    specs: {
      "Brand": "VoltCube", "Model Name": "GaN 65", "Output": "65W Max (Shared Across Ports)",
      "Ports": "2x USB-C (Power Delivery 3.0)", "Input Voltage": "100–240V", "Technology": "Gallium Nitride (GaN)",
      "Dimensions": "45 x 45 x 30 mm", "Weight": "112 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "clearview-monitor",
    name: "ClearView 27-inch QHD Monitor",
    title: "ClearView 27\" QHD Monitor, 165Hz Refresh Rate, IPS Panel, HDR400",
    brand: "ClearView",
    category: "Computers",
    price: 17999,
    originalPrice: 22999,
    rating: 4.5,
    reviewCount: 2018,
    badge: null,
    stock: 9,
    images: ["images/related-10.svg"],
    colors: [{ name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "27-inch QHD (2560x1440) IPS panel delivers sharp detail and wide viewing angles.",
      "165Hz refresh rate with 1ms response time keeps fast-motion content smooth and tear-free.",
      "HDR400 certification adds depth and contrast to supported games and video.",
      "Height, tilt, and swivel adjustable stand for an ergonomic setup.",
      "Dual HDMI 2.1 and DisplayPort 1.4 inputs cover consoles and PCs alike.",
      "Low blue-light and flicker-free modes reduce eye strain during long sessions."
    ],
    specs: {
      "Brand": "ClearView", "Model Name": "CV27-QHD165", "Panel Type": "IPS", "Resolution": "2560 x 1440 (QHD)",
      "Refresh Rate": "165Hz", "Response Time": "1ms (GtG)", "HDR": "HDR400", "Ports": "2x HDMI 2.1, 1x DisplayPort 1.4",
      "Weight": "5.4 kg", "Warranty": "3 Year Manufacturer Warranty"
    }
  },
  {
    id: "strideflex-sneakers",
    name: "StrideFlex Everyday Sneakers",
    title: "StrideFlex Everyday Sneakers, Breathable Knit, Memory-Foam Insole",
    brand: "StrideFlex",
    category: "Fashion",
    price: 1899,
    originalPrice: 2799,
    rating: 4.2,
    reviewCount: 3654,
    badge: "Bestseller",
    stock: 21,
    images: ["images/related-11.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Ember Coral", hex: "#FF6B4A" }, { name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    about: [
      "Breathable knit upper flexes with your foot and keeps you cool through the day.",
      "Memory-foam insole molds to your foot shape for lasting comfort.",
      "Lightweight rubber outsole grips well on pavement and indoor floors alike.",
      "Reflective heel tab improves visibility during evening walks.",
      "Machine washable upper — just remove the insoles before a gentle cycle.",
      "Padded collar and tongue prevent rubbing on the ankle."
    ],
    specs: {
      "Brand": "StrideFlex", "Model Name": "Everyday Knit", "Upper Material": "Breathable Knit Mesh",
      "Sole Material": "Rubber", "Insole": "Memory Foam", "Closure": "Lace-Up",
      "Weight (Per Shoe)": "260 g (Size UK 8)", "Warranty": "6 Month Manufacturer Warranty"
    }
  },
  {
    id: "glass-horizon-book",
    name: "The Glass Horizon (Paperback Novel)",
    title: "The Glass Horizon — A Novel, Paperback Edition, by Meera Anand",
    brand: "ShopZone Books",
    category: "Books",
    price: 349,
    originalPrice: 499,
    rating: 4.5,
    reviewCount: 1523,
    badge: null,
    stock: 60,
    images: ["images/related-12.svg"],
    colors: null,
    variantLabel: "Edition",
    variantOptions: ["Paperback", "Hardcover", "Collector's Edition"],
    sizeOptions: null,
    about: [
      "A fictional literary novel following three generations of a family in a coastal city.",
      "352 pages, printed on FSC-certified paper with a matte-finish cover.",
      "Includes an author's note and reading-group discussion questions.",
      "Winner of a fictional regional fiction prize, praised for its atmospheric prose.",
      "Compact paperback size, easy to carry for commutes and travel.",
      "Also available in hardcover and a collector's edition with sprayed edges."
    ],
    specs: {
      "Author": "Meera Anand (fictional)", "Publisher": "ShopZone Books", "Format": "Paperback",
      "Language": "English", "Pages": "352", "Genre": "Literary Fiction",
      "Dimensions": "13 x 20 cm", "Weight": "310 g"
    }
  },
  {
    id: "buildblocks-set",
    name: "BuildBlocks Creative Construction Set",
    title: "BuildBlocks Creative Construction Set, 350 Pieces, Compatible with Major Brick Brands",
    brand: "BuildBlocks",
    category: "Toys",
    price: 1099,
    originalPrice: 1599,
    rating: 4.6,
    reviewCount: 2894,
    badge: null,
    stock: 27,
    images: ["images/related-13.svg"],
    colors: null,
    variantLabel: "Set Theme",
    variantOptions: ["City Builder", "Space Explorer", "Fantasy Castle"],
    sizeOptions: null,
    about: [
      "350 interlocking bricks in 12 colours, compatible with most major building-brick systems.",
      "Includes an illustrated idea booklet with 5 build suggestions to get started.",
      "Non-toxic, BPA-free plastic that meets standard toy safety requirements.",
      "Encourages fine motor skills, spatial reasoning, and creative problem solving.",
      "Stored in a reusable, stackable storage tub with a snap-shut lid.",
      "Recommended for ages 6 and up, with adult supervision for younger children."
    ],
    specs: {
      "Brand": "BuildBlocks", "Set Name": "Creative Construction 350", "Piece Count": "350",
      "Material": "ABS Plastic (Non-Toxic)", "Recommended Age": "6+ Years",
      "Storage": "Reusable Tub Included", "Weight": "780 g"
    }
  },
  {
    id: "pulsebeat-earbuds",
    name: "PulseBeat True Wireless Earbuds",
    title: "PulseBeat True Wireless Earbuds, Active Noise Cancellation, 32H Total Playtime, IPX5",
    brand: "PulseBeat",
    category: "Electronics",
    price: 2499,
    originalPrice: 3999,
    rating: 4.3,
    reviewCount: 7420,
    badge: "Bestseller",
    stock: 19,
    images: ["images/related-14.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Ember Coral", hex: "#FF6B4A" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "Active Noise Cancellation with a Transparency mode for quick conversations without removing the earbuds.",
      "32 hours of total playtime with the charging case, 8 hours per charge on the buds themselves.",
      "IPX5 sweat and splash resistance, built for workouts and light rain.",
      "Touch controls for playback, calls, ANC toggling, and voice assistant access.",
      "Wireless charging case supports Qi charging pads for cable-free top-ups.",
      "Stable low-latency connection tuned for both music and mobile gaming."
    ],
    specs: {
      "Brand": "PulseBeat", "Model Name": "Pulse TWS-3", "Driver Size": "10mm Dynamic",
      "Battery Life": "8 Hrs (Buds), 32 Hrs (With Case)", "Water Resistance": "IPX5",
      "Connectivity": "Bluetooth 5.3", "Charging": "USB-C, Qi Wireless", "Weight": "4.5 g (Per Bud)",
      "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "swiftdock-station",
    name: "SwiftDock USB-C Docking Station",
    title: "SwiftDock 11-in-1 USB-C Docking Station, Dual 4K HDMI, 100W Power Delivery",
    brand: "SwiftDock",
    category: "Computers",
    price: 3999,
    originalPrice: 5999,
    rating: 4.4,
    reviewCount: 1876,
    badge: null,
    stock: 14,
    images: ["images/related-15.svg"],
    colors: [{ name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "11 ports in one hub: dual 4K HDMI, USB-A 3.0, USB-C, SD/microSD, Ethernet, and 100W pass-through charging.",
      "Drives two 4K monitors at 60Hz simultaneously from a single laptop cable.",
      "Aluminium unibody shell dissipates heat and resists scratches.",
      "Gigabit Ethernet port for stable, low-latency wired connections.",
      "Compact enough to slip into a laptop sleeve for travel setups.",
      "Compatible with most USB-C and Thunderbolt laptops."
    ],
    specs: {
      "Brand": "SwiftDock", "Model Name": "Dock-11 Pro", "Ports": "11-in-1",
      "Video Output": "2x HDMI (4K@60Hz)", "Power Delivery": "100W Pass-Through",
      "Data Transfer": "USB 3.0, 5Gbps", "Ethernet": "Gigabit RJ45", "Weight": "168 g",
      "Warranty": "2 Year Manufacturer Warranty"
    }
  },
  {
    id: "shieldarmor-case",
    name: "ShieldArmor MagSafe-Compatible Phone Case",
    title: "ShieldArmor Protective Phone Case, MagSafe-Compatible, Military-Grade Drop Protection",
    brand: "ShieldArmor",
    category: "Mobiles",
    price: 799,
    originalPrice: 1299,
    rating: 4.4,
    reviewCount: 5210,
    badge: null,
    stock: 45,
    images: ["images/related-16.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Slate Grey", hex: "#5B6472" }, { name: "Ember Coral", hex: "#FF6B4A" }],
    variantLabel: "Compatible Model",
    variantOptions: ["Model A (6.1\")", "Model B (6.7\")"],
    sizeOptions: null,
    about: [
      "Military-grade drop protection tested from up to 3 metres onto concrete.",
      "Built-in magnetic ring, fully compatible with MagSafe chargers and mounts.",
      "Raised bezel protects the camera and screen when placed face down.",
      "Anti-yellowing, scratch-resistant clear back shows off your phone's colour.",
      "Precise cutouts keep all ports, buttons, and speakers fully accessible.",
      "Slim profile that doesn't add bulk to your pocket or bag."
    ],
    specs: {
      "Brand": "ShieldArmor", "Model Name": "Armor Clear MagSafe", "Material": "TPU + Polycarbonate",
      "Drop Protection": "Up to 3 Metres", "MagSafe Compatible": "Yes",
      "Wireless Charging": "Supported", "Weight": "38 g", "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "brewmaster-coffee-maker",
    name: "BrewMaster Automatic Drip Coffee Maker",
    title: "BrewMaster Automatic Drip Coffee Maker, 12-Cup Carafe, Programmable Timer",
    brand: "BrewMaster",
    category: "Home & Kitchen",
    price: 2799,
    originalPrice: 3999,
    rating: 4.5,
    reviewCount: 3320,
    badge: null,
    stock: 12,
    images: ["images/related-17.svg"],
    colors: [{ name: "Slate Grey", hex: "#5B6472" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: ["6-Cup", "12-Cup"],
    about: [
      "Programmable 24-hour timer lets you wake up to fresh coffee automatically.",
      "12-cup glass carafe with a keep-warm hot plate that holds temperature for 2 hours.",
      "Reusable gold-tone filter — brew great coffee without paper filters.",
      "Adjustable brew strength selector for a milder or bolder cup.",
      "Anti-drip valve lets you pour a cup mid-brew without spilling.",
      "Dishwasher-safe carafe and filter basket for easy cleanup."
    ],
    specs: {
      "Brand": "BrewMaster", "Model Name": "Drip 12 Pro", "Capacity": "12 Cups (1.8 L)",
      "Filter Type": "Reusable Gold-Tone", "Timer": "24-Hour Programmable",
      "Keep-Warm Duration": "2 Hours", "Power": "900W", "Warranty": "2 Year Manufacturer Warranty"
    }
  },
  {
    id: "urbanweave-hoodie",
    name: "UrbanWeave Cotton Fleece Hoodie",
    title: "UrbanWeave Cotton Fleece Hoodie, Relaxed Fit, Brushed Interior",
    brand: "UrbanWeave",
    category: "Fashion",
    price: 1199,
    originalPrice: 1899,
    rating: 4.3,
    reviewCount: 4587,
    badge: null,
    stock: 32,
    images: ["images/related-18.svg"],
    colors: [{ name: "Midnight Navy", hex: "#14213D" }, { name: "Slate Grey", hex: "#5B6472" }, { name: "Sunburst Gold", hex: "#F5A623" }],
    variantLabel: null,
    variantOptions: null,
    sizeOptions: ["S", "M", "L", "XL", "XXL"],
    about: [
      "320 GSM cotton-blend fleece, brushed on the inside for extra warmth and softness.",
      "Relaxed, unisex fit that layers easily over t-shirts or under jackets.",
      "Ribbed cuffs and hem hold their shape wash after wash.",
      "Kangaroo pocket and adjustable drawstring hood for cooler days.",
      "Pre-shrunk fabric minimizes size changes after washing.",
      "Machine washable — tumble dry low to preserve the brushed interior."
    ],
    specs: {
      "Brand": "UrbanWeave", "Model Name": "Fleece Relaxed", "Material": "80% Cotton, 20% Polyester",
      "Fabric Weight": "320 GSM", "Fit": "Relaxed / Unisex", "Care Instructions": "Machine Wash Cold",
      "Weight": "480 g", "Warranty": "N/A"
    }
  },
  {
    id: "skydrift-drone",
    name: "SkyDrift Mini Stunt Drone",
    title: "SkyDrift Mini RC Stunt Drone, HD Camera, One-Touch Flips, Beginner-Friendly",
    brand: "SkyDrift",
    category: "Toys",
    price: 2199,
    originalPrice: 3299,
    rating: 4.1,
    reviewCount: 1932,
    badge: null,
    stock: 16,
    images: ["images/related-19.svg"],
    colors: null,
    variantLabel: null,
    variantOptions: null,
    sizeOptions: null,
    about: [
      "720p HD camera streams live video to the companion app for FPV flying.",
      "One-touch flips and rolls make tricks easy for beginners to pull off.",
      "Altitude-hold mode keeps the drone steady at a fixed height, hands-free.",
      "Propeller guards protect blades and nearby objects during indoor flights.",
      "Two swappable batteries extend total flight time to around 24 minutes.",
      "Recommended for ages 14 and up; requires 4 AA batteries for the controller."
    ],
    specs: {
      "Brand": "SkyDrift", "Model Name": "Mini Stunt X1", "Camera": "720p HD",
      "Flight Time": "12 Min Per Battery (2 Included)", "Control Range": "Approx. 80 Metres",
      "Recommended Age": "14+ Years", "Weight": "98 g", "Warranty": "6 Month Manufacturer Warranty"
    }
  },
  {
    id: "kitchen-chronicles-cookbook",
    name: "Kitchen Chronicles (Hardcover Cookbook)",
    title: "Kitchen Chronicles — A Regional Cookbook, Hardcover, by Chef Arjun Verma",
    brand: "ShopZone Books",
    category: "Books",
    price: 899,
    originalPrice: 1299,
    rating: 4.7,
    reviewCount: 2145,
    badge: "Bestseller",
    stock: 24,
    images: ["images/related-20.svg"],
    colors: null,
    variantLabel: "Edition",
    variantOptions: ["Hardcover", "Paperback"],
    sizeOptions: null,
    about: [
      "180 fictional regional recipes with step-by-step photography for every dish.",
      "Hardcover, lay-flat binding designed to survive daily use in the kitchen.",
      "Includes ingredient substitution tips for common dietary restrictions.",
      "Organized by course, with a handy index for quick weeknight lookups.",
      "Printed on wipeable, spill-resistant matte paper stock.",
      "Makes a popular gift for home cooks and aspiring chefs alike."
    ],
    specs: {
      "Author": "Arjun Verma (fictional)", "Publisher": "ShopZone Books", "Format": "Hardcover",
      "Language": "English", "Pages": "288", "Genre": "Cookbook",
      "Dimensions": "19 x 24 cm", "Weight": "820 g"
    }
  }
];

/* Category-based generic review templates, reused across products that don't
   have hand-written reviews. Keeps content plausible for each product family
   without hand-authoring dozens of near-duplicate reviews. */
const REVIEW_TEMPLATES = {
  "Electronics": [
    { rating: 5, title: "Works exactly as described", body: "Setup took two minutes and performance has been rock solid since. Build quality feels premium for the price, and it hasn't skipped a beat with daily use." },
    { rating: 4, title: "Great value, small quirks", body: "Does everything I need it to. The companion app could be a little more polished, but the hardware itself is dependable and well made." },
    { rating: 5, title: "Would buy again", body: "Genuinely impressed with how well this performs day to day. Battery life matches the listing, and it's held up well after a few weeks of regular use." }
  ],
  "Computers": [
    { rating: 5, title: "Noticeable upgrade to my setup", body: "Made an immediate difference to my daily workflow. Feels durable, well built, and the finish matches the product photos closely." },
    { rating: 4, title: "Solid choice for the price", body: "Does the job reliably. Not flashy, just consistent — exactly what I wanted for everyday work." },
    { rating: 5, title: "Exceeded expectations", body: "Wasn't expecting this level of quality at this price point. Arrived well packaged and has worked flawlessly since." }
  ],
  "Fashion": [
    { rating: 4, title: "Comfortable and true to size", body: "Fits as expected based on the size chart. Comfortable for all-day wear and the material feels durable after regular use." },
    { rating: 5, title: "Better than expected", body: "Looks even better in person. Holds up well to daily wear and the material quality feels a step above similar items I've bought." },
    { rating: 4, title: "Good everyday pick", body: "Practical, comfortable, and versatile enough for most days. Would consider getting another colour." }
  ],
  "Home & Kitchen": [
    { rating: 5, title: "Now a daily essential", body: "Use this every single day and it hasn't let me down once. Feels sturdy and does exactly what it promises." },
    { rating: 4, title: "Handy addition to the home", body: "Simple, functional, and well made. Not much more to say — it just works reliably." },
    { rating: 5, title: "Great gift idea too", body: "Bought one for myself and ended up getting a second as a gift. Quality feels well above the price point." }
  ],
  "Books": [
    { rating: 5, title: "Couldn't put it down", body: "The pacing pulled me in from the first chapter and never let up. One of the more memorable reads I've picked up this year." },
    { rating: 4, title: "Beautifully written", body: "The prose is lovely and the characters feel real. A slower build than I expected, but it pays off by the end." },
    { rating: 5, title: "Recommended to my whole book club", body: "Sparked one of our best discussions in months. Print quality of the paperback is also solid." }
  ],
  "Toys": [
    { rating: 5, title: "Kept my kids entertained for hours", body: "Great variety of pieces and the instruction booklet made it easy for my child to get started independently." },
    { rating: 4, title: "Good quality bricks", body: "Compatible with our existing sets as advertised. A couple of pieces were slightly loose but nothing that affected building." },
    { rating: 5, title: "Sparked a lot of creativity", body: "My kids have built a dozen different things beyond the booklet suggestions. Durable enough to survive daily play." }
  ]
};

const REVIEWERS = [
  { name: "Priya K.", avatar: "images/avatar-1.svg" },
  { name: "Rohit S.", avatar: "images/avatar-2.svg" },
  { name: "Ayesha M.", avatar: "images/avatar-3.svg" },
  { name: "Nikhil T.", avatar: "images/avatar-4.svg" }
];

const REVIEW_DATES = ["2 July 2026", "28 June 2026", "19 June 2026", "8 June 2026"];

function getProductById(id){
  return PRODUCTS.find(p => p.id === id) || null;
}

function getReviewsForProduct(product){
  const templates = REVIEW_TEMPLATES[product.category] || REVIEW_TEMPLATES["Electronics"];
  return templates.map((t, i) => ({
    ...t,
    reviewer: REVIEWERS[i % REVIEWERS.length],
    date: REVIEW_DATES[i % REVIEW_DATES.length],
    helpfulCount: 40 + (i * 27) + (product.name.length % 20)
  }));
}
