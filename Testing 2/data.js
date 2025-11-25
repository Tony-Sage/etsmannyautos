// storeData — 20 items (categories constrained to the five primary categories)
export const storeData = [
  {
    id: 1,
    name: "Ceramic Brake Pad Set",
    slug: "ceramic-brake-pad-set",
    description: "High-friction ceramic pads — quiet, long life, low dust.",
    image: "../images/brake pads.jpg",
    category: " Engine Parts",
    tracks: ["featured", "chassis", "brakes"],
    tags: ["ceramic", "quiet", "dust-free"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2010,2011,2012] },
      { brand: "Honda", model: "Civic", years: [2014,2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2010, price: 9500, availability: "In stock" },
      { brand: "Toyota", model: "Corolla", year: 2011, price: 10000, availability: "In stock" },
      { brand: "Honda", model: "Civic", year: 2014, price: 12000, availability: "Low stock" },
      { brand: "Honda", model: "Civic", year: 2015, price: 11500, availability: "Low stock" }
    ]
  },

  {
    id: 2,
    name: "High-Flow Oil Filter",
    slug: "high-flow-oil-filter",
    description: "Premium oil filter for extended service intervals.",
    image: "../images/oil-filter.jpg",
    category: "Engine Accessories",
    tracks: ["featured", "engine", "filters"],
    tags: ["filter", "maintenance", "engine-care"],
    compatibilities: [
      { brand: "Toyota", model: "Camry", years: [2012,2013,2014] },
      { brand: "Nissan", model: "Altima", years: [2014,2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Camry", year: 2013, price: 1800, availability: "In stock" },
      { brand: "Nissan", model: "Altima", year: 2014, price: 2000, availability: "In stock" }
    ]
  },

  {
    id: 3,
    name: "Halogen Headlight Bulb (H4)",
    slug: "halogen-headlight-h4",
    description: "Standard H4 halogen bulb with long life coating.",
    image: "https://via.placeholder.com/400x300?text=Headlight+H4",
    category: "Electrical Accessories",
    tracks: ["lighting", "featured", "electrical"],
    tags: ["lighting", "halogen", "bulb"],
    compatibilities: [
      { brand: "Toyota", model: "Avanza", years: [2010,2011] },
      { brand: "Honda", model: "Civic", years: [2014,2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Avanza", year: 2010, price: 1200, availability: "Low stock" },
      { brand: "Honda", model: "Civic", year: 2014, price: 1400, availability: "In stock" }
    ]
  },

  {
    id: 4,
    name: "Panel Air Filter",
    slug: "panel-air-filter",
    description: "High-capacity air filter for improved engine breathing.",
    image: "../images/shaft heads.jpg",
    category: "Engine Accessories",
    tracks: ["new-arrivals", "filters", "engine"],
    tags: ["filter", "air", "performance"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2011,2012,2013] },
      { brand: "Honda", model: "Accord", years: [2012,2013] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2012, price: 2200, availability: "In stock" },
      { brand: "Honda", model: "Accord", year: 2012, price: 2400, availability: "In stock" }
    ]
  },

  {
    id: 5,
    name: "Reinforced Radiator Hose",
    slug: "reinforced-radiator-hose",
    description: "Durable rubber hose, reinforced for high-heat systems.",
    image: "https://via.placeholder.com/400x300?text=Radiator+Hose",
    category: "Engine Accessories",
    tracks: ["engine", "chassis"],
    tags: ["hose", "cooling", "durable"],
    compatibilities: [
      { brand: "Nissan", model: "Altima", years: [2014,2015] },
      { brand: "Toyota", model: "Camry", years: [2013,2014] }
    ],
    variants: [
      { brand: "Nissan", model: "Altima", year: 2014, price: 3400, availability: "In stock" },
      { brand: "Toyota", model: "Camry", year: 2013, price: 3600, availability: "Low stock" }
    ]
  },

  {
    id: 6,
    name: "High-Durability Timing Belt",
    slug: "timing-belt-high",
    description: "Reinforced timing belt with heat-stable compound.",
    image: "https://via.placeholder.com/400x300?text=Timing+Belt",
    category: "Engine Accessories",
    tracks: ["engine", "featured"],
    tags: ["belt", "timing", "maintenance"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2010,2011] },
      { brand: "Honda", model: "Accord", years: [2012,2013] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2010, price: 6200, availability: "Low stock" },
      { brand: "Honda", model: "Accord", year: 2012, price: 6500, availability: "In stock" }
    ]
  },

  {
    id: 7,
    name: "Spark Plug (Platinum)",
    slug: "spark-plug-platinum",
    description: "Platinum spark plug for efficient ignition and fuel savings.",
    image: "../images/spark-plug.jpg",
    category: "Engine Accessories",
    tracks: ["new-arrivals", "engine"],
    tags: ["spark", "ignition", "platinum"],
    compatibilities: [
      { brand: "Honda", model: "Civic", years: [2014,2015] },
      { brand: "Toyota", model: "Yaris", years: [2016,2017] }
    ],
    variants: [
      { brand: "Honda", model: "Civic", year: 2015, price: 900, availability: "In stock" },
      { brand: "Toyota", model: "Yaris", year: 2016, price: 850, availability: "In stock" }
    ]
  },

  {
    id: 8,
    name: "Headlamp Assembly (LH)",
    slug: "headlamp-assembly-lh",
    description: "Full headlamp assembly — left-hand side, includes housing and lens.",
    image: "../images/headlamp.jpg",
    category: "Body Parts",
    tracks: ["featured", "lighting", "body"],
    tags: ["assembly", "headlamp", "body"],
    compatibilities: [
      { brand: "Nissan", model: "Sentra", years: [2015,2016] },
      { brand: "Toyota", model: "Corolla", years: [2017] }
    ],
    variants: [
      { brand: "Nissan", model: "Sentra", year: 2015, price: 12500, availability: "Low stock" },
      { brand: "Toyota", model: "Corolla", year: 2017, price: 13800, availability: "In stock" }
    ]
  },

  {
    id: 9,
    name: "Front Bumper Cover",
    slug: "front-bumper-cover",
    description: "OEM-fit front bumper cover — primered and ready for paint.",
    image: "../images/bumper.jpg",
    category: "Body Parts",
    tracks: ["body", "featured"],
    tags: ["bumper", "body", "paintable"],
    compatibilities: [
      { brand: "Toyota", model: "Camry", years: [2013,2014] },
      { brand: "Honda", model: "Accord", years: [2012,2013] }
    ],
    variants: [
      { brand: "Toyota", model: "Camry", year: 2013, price: 22000, availability: "In stock" },
      { brand: "Honda", model: "Accord", year: 2012, price: 21000, availability: "Low stock" }
    ]
  },

  {
    id: 10,
    name: "LED Interior Dome Light",
    slug: "led-interior-dome-light",
    description: "Energy-efficient LED dome light with soft-white output.",
    image: "https://via.placeholder.com/400x300?text=LED+Dome+Light",
    category: "Interior Decorations",
    tracks: ["lighting", "interior", "new-arrivals"],
    tags: ["LED", "interior", "lighting"],
    compatibilities: [
      { brand: "Toyota", model: "Yaris", years: [2016,2017] },
      { brand: "Honda", model: "Fit", years: [2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Yaris", year: 2016, price: 1800, availability: "In stock" },
      { brand: "Honda", model: "Fit", year: 2015, price: 1750, availability: "In stock" }
    ]
  },

  {
    id: 11,
    name: "Door Sill Protector (Stainless)",
    slug: "door-sill-protector-stainless",
    description: "Stainless door sill protector — prevents scuffs and scratches.",
    image: "../images/door-sill.jpg",
    category: "Interior Decorations",
    tracks: ["interior", "featured"],
    tags: ["sill", "stainless", "trim"],
    compatibilities: [
      { brand: "Nissan", model: "Altima", years: [2014,2015] },
      { brand: "Toyota", model: "Camry", years: [2013] }
    ],
    variants: [
      { brand: "Nissan", model: "Altima", year: 2014, price: 5200, availability: "In stock" },
      { brand: "Toyota", model: "Camry", year: 2013, price: 5000, availability: "Low stock" }
    ]
  },

  {
    id: 12,
    name: "Floor Mat Set (All-Weather)",
    slug: "floor-mat-all-weather",
    description: "All-weather floor mat set — easy to clean, anti-slip backing.",
    image: "../images/floor-mats.jpg",
    category: "Interior Decorations",
    tracks: ["interior", "others", "featured"],
    tags: ["mat", "all-weather", "easy-clean"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2010,2011,2012] },
      { brand: "Honda", model: "Civic", years: [2014,2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2011, price: 4500, availability: "In stock" },
      { brand: "Honda", model: "Civic", year: 2014, price: 4800, availability: "In stock" }
    ]
  },

  {
    id: 13,
    name: "Side Mirror (Electric)",
    slug: "side-mirror-electric",
    description: "Power-adjustable side mirror with heating option.",
    image: "../images/side-mirror.jpg",
    category: "Body Parts",
    tracks: ["body", "electrical"],
    tags: ["mirror", "electric", "heating"],
    compatibilities: [
      { brand: "Nissan", model: "Sentra", years: [2015,2016] },
      { brand: "Honda", model: "Accord", years: [2012,2013] }
    ],
    variants: [
      { brand: "Nissan", model: "Sentra", year: 2015, price: 7200, availability: "Low stock" },
      { brand: "Honda", model: "Accord", year: 2012, price: 6800, availability: "In stock" }
    ]
  },

  {
    id: 14,
    name: "Shock Absorber (Front)",
    slug: "shock-absorber-front",
    description: "Gas-filled front shock absorber for smooth ride control.",
    image: "../images/shock.jpg",
    category: "Chassis Accessories",
    tracks: ["chassis", "featured"],
    tags: ["shock", "ride", "gas-filled"],
    compatibilities: [
      { brand: "Toyota", model: "Rav4", years: [2015,2016] },
      { brand: "Honda", model: "CR-V", years: [2014,2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Rav4", year: 2015, price: 9500, availability: "In stock" },
      { brand: "Honda", model: "CR-V", year: 2014, price: 9800, availability: "Low stock" }
    ]
  },

  {
    id: 15,
    name: "Brake Disc (Ventilated)",
    slug: "brake-disc-ventilated",
    description: "Ventilated front brake disc for improved cooling.",
    image: "../images/brake-disc.jpg",
    category: "Chassis Accessories",
    tracks: ["chassis", "brakes"],
    tags: ["disc", "ventilated", "brakes"],
    compatibilities: [
      { brand: "Toyota", model: "Camry", years: [2013,2014] },
      { brand: "Nissan", model: "Altima", years: [2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Camry", year: 2013, price: 7800, availability: "In stock" },
      { brand: "Nissan", model: "Altima", year: 2015, price: 8200, availability: "Low stock" }
    ]
  },

  {
    id: 16,
    name: "90A Alternator",
    slug: "90a-alternator",
    description: "90-amp alternator — reliable charging for accessory-heavy cars.",
    image: "../images/alternator.jpg",
    category: "Electrical Accessories",
    tracks: ["electrical", "featured"],
    tags: ["alternator", "charging", "electrical"],
    compatibilities: [
      { brand: "Honda", model: "Civic", years: [2014,2015] },
      { brand: "Toyota", model: "Corolla", years: [2012,2013] }
    ],
    variants: [
      { brand: "Honda", model: "Civic", year: 2014, price: 15200, availability: "In stock" },
      { brand: "Toyota", model: "Corolla", year: 2012, price: 14800, availability: "Low stock" }
    ]
  },

  {
    id: 17,
    name: "Universal Roof Rack",
    slug: "universal-roof-rack",
    description: "Adjustable roof rack for crossbars and rooftop cargo.",
    image: "../images/roof-rack.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "chassis"],
    tags: ["rack", "cargo", "universal"],
    compatibilities: [
      { brand: "Toyota", model: "Rav4", years: [2015,2016] },
      { brand: "Nissan", model: "X-Trail", years: [2014,2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Rav4", year: 2015, price: 22000, availability: "In stock" },
      { brand: "Nissan", model: "X-Trail", year: 2014, price: 21000, availability: "Low stock" }
    ]
  },

  {
    id: 18,
    name: "Waterproof Seat Covers (Front Pair)",
    slug: "seat-covers-front-pair",
    description: "Splash-resistant seat covers — neoprene blend with reinforced seams.",
    image: "../images/seat-covers.jpg",
    category: "Interior Decorations",
    tracks: ["interior", "others"],
    tags: ["seat", "waterproof", "comfort"],
    compatibilities: [
      { brand: "Toyota", model: "Yaris", years: [2016,2017] },
      { brand: "Honda", model: "Fit", years: [2015] }
    ],
    variants: [
      { brand: "Toyota", model: "Yaris", year: 2016, price: 5200, availability: "In stock" },
      { brand: "Honda", model: "Fit", year: 2015, price: 5000, availability: "In stock" }
    ]
  },

  {
    id: 19,
    name: "USB Phone Charger (Dual Port)",
    slug: "usb-phone-charger-dual",
    description: "Dual-port USB charger — fast charge and overcurrent protection.",
    image: "https://via.placeholder.com/400x300?text=USB+Charger",
    category: "Electrical Accessories",
    tracks: ["electrical", "others"],
    tags: ["usb", "charger", "accessory"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2010,2011,2012] },
      { brand: "Nissan", model: "Sentra", years: [2015,2016] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2011, price: 2500, availability: "In stock" },
      { brand: "Nissan", model: "Sentra", year: 2015, price: 2300, availability: "In stock" }
    ]
  },

  {
    id: 20,
    name: "Rubber Door Seal (Per Meter)",
    slug: "rubber-door-seal-per-meter",
    description: "EPDM rubber door seal — weatherproof and noise-damping.",
    image: "../images/door-seal.jpg",
    category: "Body Parts",
    tracks: ["body", "others"],
    tags: ["seal", "weatherproof", "rubber"],
    compatibilities: [
      { brand: "Toyota", model: "Camry", years: [2013,2014] },
      { brand: "Honda", model: "Accord", years: [2012] }
    ],
    variants: [
      { brand: "Toyota", model: "Camry", year: 2013, price: 350, availability: "In stock" }, // per meter
      { brand: "Honda", model: "Accord", year: 2012, price: 360, availability: "In stock" }  // per meter
    ]
  },
  
  {
    id: 21,
    name: "Steering Rack",
    slug: "steering-rack",
    description: "Precision steering rack assembly for smooth steering response and long service life.",
    image: "../images/steering rack.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["steering rack", "rack assembly", "power steering", "camry steering"],
    compatibilities: [
      { brand: "Toyota", model: "Camry", years: [2007,2008,2009,2010,2011] },
      { brand: "Honda", model: "Accord", years: [2008,2009,2010,2011,2012] }
    ],
    variants: [
      { brand: "Toyota", model: "Camry", year: 2007, price: 52000, availability: "Low Stock" },
      { brand: "Honda", model: "Accord", year: 2008, price: 52000, availability: "Low Stock" }
    ]
  },

  {
    id: 22,
    name: "Shaft Head (Drive Shaft End)",
    slug: "shaft-head-drive-shaft-end",
    description: "High-strength drive shaft head for secure coupling and reduced vibration.",
    image: "../images/shaft heads.jpg",
    category: "Engine Accessories",
    tracks: ["others", "Engine Accessories"],
    tags: ["shaft head", "drive shaft end", "cv joint", "prop shaft head"],
    compatibilities: [
      { brand: "Nissan", model: "X-Trail", years: [2010,2011,2012,2013,2014,2015] },
      { brand: "Mitsubishi", model: "Pajero", years: [2006,2007,2008,2009,2010,2011] }
    ],
    variants: [
      { brand: "Nissan", model: "X-Trail", year: 2010, price: 14500, availability: "In Stock" },
      { brand: "Mitsubishi", model: "Pajero", year: 2006, price: 14500, availability: "In Stock" }
    ]
  },

  {
    id: 23,
    name: "Basket Bearing (Wheel Bearing)",
    slug: "basket-bearing-wheel-bearing",
    description: "Durable wheel bearing (basket style) to ensure smooth wheel rotation and longevity.",
    image: "../images/basket bearing.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["bearing", "wheel bearing", "basket bearing", "corolla bearing"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2003,2004,2005,2006,2007,2008] },
      { brand: "Toyota", model: "Yaris", years: [2006,2007,2008,2009,2010,2011] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2003, price: 7200, availability: "In Stock" },
      { brand: "Toyota", model: "Yaris", year: 2006, price: 7200, availability: "In Stock" }
    ]
  },

  {
    id: 24,
    name: "Hub Assembly",
    slug: "hub-assembly",
    description: "Complete hub assembly with flange for secure wheel mounting and reliable operation.",
    image: "../images/hubs.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["hub", "hub assembly", "wheel hub", "hub bearing"],
    compatibilities: [
      { brand: "Honda", model: "Fit", years: [2007,2008,2009,2010,2011,2012,2013] },
      { brand: "Nissan", model: "Note", years: [2006,2007,2008,2009,2010,2011,2012] }
    ],
    variants: [
      { brand: "Honda", model: "Fit", year: 2007, price: 12800, availability: "In Stock" },
      { brand: "Nissan", model: "Note", year: 2006, price: 12800, availability: "In Stock" }
    ]
  },

  {
    id: 25,
    name: "Brake Pads (Front Set)",
    slug: "brake-pads-front-set",
    description: "Ceramic front brake pad set delivering quiet operation and long life.",
    image: "../images/brake pads.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["brake pads", "front pads", "ceramic pads", "brakes"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2008,2009,2010,2011,2012,2013] },
      { brand: "Honda", model: "Civic", years: [2006,2007,2008,2009,2010,2011] },
      { brand: "Nissan", model: "Almera", years: [2007,2008,2009,2010,2011,2012] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2008, price: 9800, availability: "In Stock" },
      { brand: "Honda", model: "Civic", year: 2006, price: 9800, availability: "In Stock" },
      { brand: "Nissan", model: "Almera", year: 2007, price: 9800, availability: "In Stock" }
    ]
  },

  {
    id: 26,
    name: "Shock Absorber (Rear)",
    slug: "shock-absorber-rear",
    description: "Rear shock absorber tuned for comfort and control on mixed road conditions.",
    image: "../images/shock.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["shock absorber", "rear shock", "suspension", "rx350 shock"],
    compatibilities: [
      { brand: "Lexus", model: "RX350", years: [2010,2011,2012,2013,2014,2015] },
      { brand: "Toyota", model: "Highlander", years: [2008,2009,2010,2011,2012] }
    ],
    variants: [
      { brand: "Lexus", model: "RX350", year: 2010, price: 16500, availability: "In Stock" },
      { brand: "Toyota", model: "Highlander", year: 2008, price: 16500, availability: "In Stock" }
    ]
  },

  {
    id: 27,
    name: "Ball Joint",
    slug: "ball-joint",
    description: "Forged ball joint for reliable steering geometry and long-lasting durability.",
    image: "../images/ball joint.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["ball joint", "suspension joint", "steering joint"],
    compatibilities: [
      { brand: "Toyota", model: "Hilux", years: [2005,2006,2007,2008,2009,2010,2011] },
      { brand: "Nissan", model: "Navara", years: [2006,2007,2008,2009,2010,2011,2012] }
    ],
    variants: [
      { brand: "Toyota", model: "Hilux", year: 2005, price: 7600, availability: "Low Stock" },
      { brand: "Nissan", model: "Navara", year: 2006, price: 7600, availability: "Low Stock" }
    ]
  },

  {
    id: 28,
    name: "Center Bearing",
    slug: "center-bearing",
    description: "Center support bearing for multi-piece drive shafts to reduce vibration and wear.",
    image: "../images/center bearing.jpg",
    category: "Engine Accessories",
    tracks: ["others", "Engine Accessories"],
    tags: ["center bearing", "prop shaft bearing", "drive shaft bearing"],
    compatibilities: [
      { brand: "Mitsubishi", model: "L200", years: [2006,2007,2008,2009,2010,2011,2012] },
      { brand: "Isuzu", model: "D-Max", years: [2008,2009,2010,2011,2012,2013,2014] }
    ],
    variants: [
      { brand: "Mitsubishi", model: "L200", year: 2006, price: 6800, availability: "In Stock" },
      { brand: "Isuzu", model: "D-Max", year: 2008, price: 6800, availability: "In Stock" }
    ]
  },

  {
    id: 29,
    name: "Universal Joint (U-Joint)",
    slug: "universal-joint-u-joint",
    description: "Robust universal joint for reliable torque transfer in drive shafts under load.",
    image: "../images/universal joint.jpg",
    category: "Engine Accessories",
    tracks: ["others", "Engine Accessories"],
    tags: ["universal joint", "u-joint", "prop shaft u-joint"],
    compatibilities: [
      { brand: "Nissan", model: "Navara", years: [2006,2007,2008,2009,2010,2011,2012,2013,2014] },
      { brand: "Toyota", model: "Hilux", years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015] }
    ],
    variants: [
      { brand: "Nissan", model: "Navara", year: 2006, price: 5400, availability: "In Stock" },
      { brand: "Toyota", model: "Hilux", year: 2005, price: 5400, availability: "In Stock" }
    ]
  },

  {
    id: 30,
    name: "Shaft Joint (CV Joint)",
    slug: "shaft-joint-cv-joint",
    description: "Constant velocity shaft joint to maintain smooth power transfer at varying angles.",
    image: "../images/shaft joint.jpg",
    category: "Engine Accessories",
    tracks: ["others", "Engine Accessories"],
    tags: ["cv joint", "shaft joint", "constant velocity joint"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2008,2009,2010,2011,2012,2013] },
      { brand: "Honda", model: "Civic", years: [2006,2007,2008,2009,2010,2011] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2008, price: 11200, availability: "Low Stock" },
      { brand: "Honda", model: "Civic", year: 2006, price: 11200, availability: "Low Stock" }
    ]
  },

  {
    id: 31,
    name: "Shaft Hose (Drive Shaft Dust Boot)",
    slug: "shaft-hose-drive-shaft-dust-boot",
    description: "Protective dust boot for CV/drive shaft joints — prevents contamination and premature wear.",
    image: "../images/shaft hose.jpg",
    category: "Engine Accessories",
    tracks: ["others", "Engine Accessories"],
    tags: ["shaft boot", "dust boot", "cv boot", "drive shaft hose"],
    compatibilities: [
      { brand: "Honda", model: "CR-V", years: [2007,2008,2009,2010,2011,2012] },
      { brand: "Nissan", model: "X-Trail", years: [2010,2011,2012,2013,2014,2015,2016] }
    ],
    variants: [
      { brand: "Honda", model: "CR-V", year: 2007, price: 2400, availability: "In Stock" },
      { brand: "Nissan", model: "X-Trail", year: 2010, price: 2400, availability: "In Stock" }
    ]
  },

  {
    id: 32,
    name: "Arm Bushing",
    slug: "arm-bushing",
    description: "Polyurethane control arm bushing for improved handling and reduced play.",
    image: "../images/arm bushing.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["arm bush", "bushing", "control arm bushing", "polyurethane bushing"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2003,2004,2005,2006,2007,2008] },
      { brand: "Toyota", model: "Matrix", years: [2003,2004,2005,2006,2007,2008] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2003, price: 4200, availability: "In Stock" },
      { brand: "Toyota", model: "Matrix", year: 2003, price: 4200, availability: "In Stock" }
    ]
  },

  {
    id: 33,
    name: "Control Arm",
    slug: "control-arm",
    description: "Stamped steel control arm for dependable suspension geometry and strength.",
    image: "../images/control arm.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["control arm", "suspension arm", "lower arm"],
    compatibilities: [
      { brand: "Honda", model: "Accord", years: [2008,2009,2010,2011,2012] },
      { brand: "Toyota", model: "Camry", years: [2007,2008,2009,2010,2011] }
    ],
    variants: [
      { brand: "Honda", model: "Accord", year: 2008, price: 15800, availability: "In Stock" },
      { brand: "Toyota", model: "Camry", year: 2007, price: 15800, availability: "In Stock" }
    ]
  },

  {
    id: 34,
    name: "Stabilizer Rubber (Anti-roll Bush)",
    slug: "stabilizer-rubber-anti-roll-bush",
    description: "Rubber stabilizer bush to reduce sway and maintain handling stability.",
    image: "../images/stabilizer rubber.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["stabilizer bush", "anti roll bush", "sway bar bush"],
    compatibilities: [
      { brand: "Toyota", model: "RAV4", years: [2006,2007,2008,2009,2010,2011,2012] },
      { brand: "Nissan", model: "Qashqai", years: [2007,2008,2009,2010,2011,2012] }
    ],
    variants: [
      { brand: "Toyota", model: "RAV4", year: 2006, price: 1200, availability: "In Stock" },
      { brand: "Nissan", model: "Qashqai", year: 2007, price: 1200, availability: "In Stock" }
    ]
  },

  {
    id: 35,
    name: "Linkage (Steering Linkage)",
    slug: "linkage-steering-linkage",
    description: "Steering linkage/component to maintain precise wheel alignment and steering feel.",
    image: "../images/linkage.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["linkage", "steering linkage", "tie rod linkage"],
    compatibilities: [
      { brand: "Toyota", model: "Hilux", years: [2005,2006,2007,2008,2009,2010,2011,2012] },
      { brand: "Isuzu", model: "D-Max", years: [2008,2009,2010,2011,2012,2013,2014] }
    ],
    variants: [
      { brand: "Toyota", model: "Hilux", year: 2005, price: 7800, availability: "Low Stock" },
      { brand: "Isuzu", model: "D-Max", year: 2008, price: 7800, availability: "Low Stock" }
    ]
  },

  {
    id: 36,
    name: "Tie Rod End",
    slug: "tie-rod-end",
    description: "Adjustable tie rod end for secure steering linkage and precise toe settings.",
    image: "../images/tie rod end.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["tie rod end", "tie rod", "steering end"],
    compatibilities: [
      { brand: "Nissan", model: "Almera", years: [2007,2008,2009,2010,2011,2012] },
      { brand: "Toyota", model: "Yaris", years: [2006,2007,2008,2009,2010,2011] }
    ],
    variants: [
      { brand: "Nissan", model: "Almera", year: 2007, price: 3400, availability: "In Stock" },
      { brand: "Toyota", model: "Yaris", year: 2006, price: 3400, availability: "In Stock" }
    ]
  },

  {
    id: 37,
    name: "Tie Rod Socket (Outer Socket)",
    slug: "tie-rod-socket-outer-socket",
    description: "Outer tie rod socket for secure connection between steering rack and wheel assembly.",
    image: "../images/tie rod socket.jpg",
    category: "Chassis Accessories",
    tracks: ["others", "Chassis Accessories"],
    tags: ["tie rod socket", "outer socket", "tie rod"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2008,2009,2010,2011,2012,2013] },
      { brand: "Honda", model: "Civic", years: [2006,2007,2008,2009,2010,2011] }
    ],
    variants: [
      { brand: "Toyota", model: "Corolla", year: 2008, price: 2200, availability: "In Stock" },
      { brand: "Honda", model: "Civic", year: 2006, price: 2200, availability: "In Stock" }
    ]
  }
];




