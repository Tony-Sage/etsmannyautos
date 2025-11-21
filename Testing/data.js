// data.js
// Manny Autos — sample autoParts dataset with variant pricing and compatibilities
// Exported as JS so you can `import { autoParts } from "./data.js";`

export const autoParts = [
  {
    id: 101,
    name: "Ceramic Brake Pad Set",
    description: "Premium ceramic brake pads. Quiet operation and long life.",
    category: "Brakes",
    images: ["../images/brake pads.jpg", "https://via.placeholder.com/600x400?text=Brake+Pad+2"],
    price_low: 9500,
    price_high: 12000,
    availability: "In stock",
    stockQty: 48,
    featured: true,
    newArrival: false,
    createdAt: "2025-08-14T09:00:00Z",
    oem: ["BP-TOY-001", "BP-HON-005"],
    keywords: ["brake", "pads", "ceramic", "front", "rear"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2014,2015,2016], price: 9500 },
      { brand: "Toyota", model: "Camry", years: [2017,2018], price: 11000 },
      { brand: "Honda", model: "Civic", years: [2016,2017,2018], price: 10500 },
      { brand: "Honda", model: "Accord", years: [2015,2016], price: 12000 }
    ]
  },

  {
    id: 102,
    name: "High-Flow Oil Filter",
    description: "High-flow spin-on oil filter. Extended service intervals supported.",
    category: "Filters",
    images: ["../images/linkage.jpg"],
    price_low: 1500,
    price_high: 2200,
    availability: "In stock",
    stockQty: 120,
    featured: false,
    newArrival: true,
    createdAt: "2025-11-01T08:30:00Z",
    oem: ["OF-UNI-101"],
    keywords: ["oil", "filter", "engine"],
    compatibilities: [
      { brand: "Nissan", model: "Almera", years: [2012,2013,2014], price: 1500 },
      { brand: "Toyota", model: "Yaris", years: [2015,2016], price: 1600 },
      { brand: "Honda", model: "Civic", years: [2012,2013,2014,2015], price: 2200 }
    ]
  },

  {
    id: 103,
    name: "Premium Air Filter",
    description: "High-efficiency air filter — improves airflow and engine life.",
    category: "Filters",
    images: ["../images/shaft heads.jpg"],
    price_low: 1800,
    price_high: 2600,
    availability: "In stock",
    stockQty: 60,
    featured: true,
    newArrival: true,
    createdAt: "2025-10-20T11:00:00Z",
    oem: ["AF-PR-200"],
    keywords: ["air", "filter", "engine", "breath"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2010,2011,2012], price: 1800 },
      { brand: "Mitsubishi", model: "Lancer", years: [2013,2014], price: 2400 },
      { brand: "Honda", model: "Civic", years: [2018,2019], price: 2600 }
    ]
  },

  {
    id: 104,
    name: "Halogen Headlight Bulb (H4)",
    description: "High-output halogen H4 bulb. Reliable light penetration.",
    category: "Lighting",
    images: ["https://via.placeholder.com/400x300?text=Headlight+H4"],
    price_low: 1000,
    price_high: 1400,
    availability: "Low stock",
    stockQty: 12,
    featured: false,
    newArrival: false,
    createdAt: "2025-06-02T07:00:00Z",
    oem: ["HB-H4-STD"],
    keywords: ["headlight", "bulb", "H4", "lighting"],
    compatibilities: [
      { brand: "Toyota", model: "Camry", years: [2012,2013,2014], price: 1200 },
      { brand: "Honda", model: "Accord", years: [2014,2015], price: 1400 },
      { brand: "Nissan", model: "Sentra", years: [2010,2011,2012], price: 1000 }
    ]
  },

  {
    id: 105,
    name: "Platinum Spark Plug",
    description: "Platinum-tipped spark plug for better ignition and economy.",
    category: "Electrical",
    images: ["../images/tie rod end.jpg"],
    price_low: 700,
    price_high: 1200,
    availability: "In stock",
    stockQty: 230,
    featured: false,
    newArrival: true,
    createdAt: "2025-10-28T10:00:00Z",
    oem: ["SP-PL-001"],
    keywords: ["spark", "plug", "ignition", "platinum"],
    compatibilities: [
      { brand: "Toyota", model: "Yaris", years: [2013,2014], price: 700 },
      { brand: "Honda", model: "Civic", years: [2018,2019], price: 900 },
      { brand: "Ford", model: "Focus", years: [2015,2016], price: 1200 }
    ]
  },

  {
    id: 106,
    name: "Reinforced Radiator Hose",
    description: "Heat-resistant reinforced rubber radiator hose — OEM fit.",
    category: "Cooling",
    images: ["https://via.placeholder.com/400x300?text=Radiator+Hose"],
    price_low: 3000,
    price_high: 3600,
    availability: "In stock",
    stockQty: 42,
    featured: false,
    newArrival: false,
    createdAt: "2025-03-11T13:20:00Z",
    oem: ["RH-RE-88"],
    keywords: ["radiator", "hose", "cooling"],
    compatibilities: [
      { brand: "Nissan", model: "Altima", years: [2010,2011,2012], price: 3000 },
      { brand: "Toyota", model: "Corolla", years: [2009,2010], price: 3200 },
      { brand: "Toyota", model: "Camry", years: [2016,2017], price: 3600 }
    ]
  },

  {
    id: 107,
    name: "Timing Belt (High Durability)",
    description: "High-quality timing belt with reinforced fibers for longer life.",
    category: "Engine",
    images: ["https://via.placeholder.com/400x300?text=Timing+Belt"],
    price_low: 5800,
    price_high: 6800,
    availability: "Low stock",
    stockQty: 8,
    featured: false,
    newArrival: false,
    createdAt: "2025-02-05T09:00:00Z",
    oem: ["TB-HI-500"],
    keywords: ["timing", "belt", "engine", "durable"],
    compatibilities: [
      { brand: "Honda", model: "Accord", years: [2010,2011], price: 5800 },
      { brand: "Toyota", model: "Corolla", years: [2012,2013], price: 6000 },
      { brand: "Mitsubishi", model: "Outlander", years: [2014,2015], price: 6800 }
    ]
  },

  {
    id: 108,
    name: "Front Shock Absorber (Pair)",
    description: "Gas-filled shock absorbers for improved ride comfort.",
    category: "Suspension",
    images: ["https://via.placeholder.com/400x300?text=Shock+Absorber"],
    price_low: 10500,
    price_high: 14000,
    availability: "In stock",
    stockQty: 26,
    featured: true,
    newArrival: false,
    createdAt: "2025-07-07T12:00:00Z",
    oem: ["SH-FR-220"],
    keywords: ["shock", "absorber", "suspension", "pair"],
    compatibilities: [
      { brand: "Toyota", model: "RAV4", years: [2016,2017], price: 14000 },
      { brand: "Honda", model: "CR-V", years: [2015,2016], price: 12000 },
      { brand: "Nissan", model: "X-Trail", years: [2014,2015], price: 10500 }
    ]
  },

  {
    id: 109,
    name: "Brake Disc Rotor (1pc)",
    description: "Precision-machined rotor for even wear and smooth braking.",
    category: "Brakes",
    images: ["https://via.placeholder.com/400x300?text=Brake+Rotor"],
    price_low: 6500,
    price_high: 8500,
    availability: "In stock",
    stockQty: 64,
    featured: false,
    newArrival: false,
    createdAt: "2025-04-12T10:15:00Z",
    oem: ["RD-STD-11"],
    keywords: ["rotor", "brake", "disc"],
    compatibilities: [
      { brand: "Honda", model: "Civic", years: [2017,2018], price: 6500 },
      { brand: "Toyota", model: "Corolla", years: [2014,2015], price: 7000 },
      { brand: "Ford", model: "Focus", years: [2013,2014], price: 8500 }
    ]
  },

  {
    id: 110,
    name: "Fuel Pump Assembly",
    description: "OEM-style fuel pump assembly; constant pressure, long life.",
    category: "Fuel System",
    images: ["https://via.placeholder.com/400x300?text=Fuel+Pump"],
    price_low: 14200,
    price_high: 18500,
    availability: "In stock",
    stockQty: 18,
    featured: false,
    newArrival: true,
    createdAt: "2025-09-02T09:00:00Z",
    oem: ["FP-ASM-77"],
    keywords: ["fuel", "pump", "assembly"],
    compatibilities: [
      { brand: "Toyota", model: "Hilux", years: [2010,2011,2012], price: 18500 },
      { brand: "Nissan", model: "Navara", years: [2013,2014], price: 16000 },
      { brand: "Mitsubishi", model: "L200", years: [2015,2016], price: 14200 }
    ]
  },

  {
    id: 111,
    name: "Battery Terminal Clamp Set",
    description: "Heavy-duty battery terminal clamps — corrosion resistant.",
    category: "Electrical",
    images: ["https://via.placeholder.com/400x300?text=Battery+Clamp"],
    price_low: 800,
    price_high: 1200,
    availability: "In stock",
    stockQty: 300,
    featured: false,
    newArrival: false,
    createdAt: "2024-12-15T08:00:00Z",
    oem: ["BT-CL-33"],
    keywords: ["battery", "terminal", "clamp"],
    compatibilities: [
      { brand: "Universal", model: "Universal Fit", years: [1990,2025], price: 800 },
      { brand: "Toyota", model: "Camry", years: [2010,2011], price: 1200 }
    ]
  },

  {
    id: 112,
    name: "Steering Tie Rod End",
    description: "OEM-spec tie rod end, precise steering response.",
    category: "Steering",
    images: ["../images/tie rod end.jpg"],
    price_low: 2200,
    price_high: 3000,
    availability: "In stock",
    stockQty: 56,
    featured: true,
    newArrival: false,
    createdAt: "2025-05-09T10:30:00Z",
    oem: ["TR-TIE-09"],
    keywords: ["tie", "rod", "steering"],
    compatibilities: [
      { brand: "Toyota", model: "Corolla", years: [2010,2011,2012], price: 2200 },
      { brand: "Honda", model: "Civic", years: [2013,2014], price: 3000 }
    ]
  },

  {
    id: 113,
    name: "Air Conditioning Compressor O-Ring Kit",
    description: "Seal kit for A/C compressor lines; prevents leaks.",
    category: "Cooling",
    images: ["https://via.placeholder.com/400x300?text=AC+O-Ring+Kit"],
    price_low: 450,
    price_high: 700,
    availability: "In stock",
    stockQty: 140,
    featured: false,
    newArrival: false,
    createdAt: "2025-01-20T09:00:00Z",
    oem: ["OR-KIT-12"],
    keywords: ["ac", "o-ring", "seal", "compressor"],
    compatibilities: [
      { brand: "Nissan", model: "Almera", years: [2009,2010], price: 450 },
      { brand: "Toyota", model: "Yaris", years: [2015,2016], price: 700 }
    ]
  },

  {
    id: 114,
    name: "Exhaust Gasket Set",
    description: "Complete exhaust manifold gasket set; OEM fit.",
    category: "Exhaust",
    images: ["https://via.placeholder.com/400x300?text=Exhaust+Gasket"],
    price_low: 1200,
    price_high: 1800,
    availability: "In stock",
    stockQty: 76,
    featured: false,
    newArrival: false,
    createdAt: "2025-06-30T08:00:00Z",
    oem: ["EG-SET-01"],
    keywords: ["exhaust", "gasket", "manifold"],
    compatibilities: [
      { brand: "Ford", model: "Ranger", years: [2013,2014], price: 1800 },
      { brand: "Toyota", model: "Hilux", years: [2010,2011], price: 1200 }
    ]
  },

  {
    id: 115,
    name: "Battery (Lead Acid, 60Ah)",
    description: "Reliable 60Ah lead-acid battery with high cranking power.",
    category: "Electrical",
    images: ["https://via.placeholder.com/400x300?text=Battery+60Ah"],
    price_low: 19500,
    price_high: 23500,
    availability: "In stock",
    stockQty: 40,
    featured: true,
    newArrival: false,
    createdAt: "2025-09-12T09:00:00Z",
    oem: ["BAT-60-LEAD"],
    keywords: ["battery", "lead acid", "60Ah"],
    compatibilities: [
      { brand: "Toyota", model: "Hilux", years: [2010,2011], price: 23500 },
      { brand: "Nissan", model: "Navara", years: [2014,2015], price: 21000 },
      { brand: "Universal", model: "Universal Fit", years: [1990,2025], price: 19500 }
    ]
  },

  {
    id: 116,
    name: "Clutch Pressure Plate",
    description: "High-torque pressure plate for heavy-duty use.",
    category: "Transmission",
    images: ["https://via.placeholder.com/400x300?text=Clutch+Plate"],
    price_low: 26000,
    price_high: 32000,
    availability: "Low stock",
    stockQty: 6,
    featured: false,
    newArrival: false,
    createdAt: "2025-03-22T09:00:00Z",
    oem: ["CP-HV-77"],
    keywords: ["clutch", "pressure plate", "transmission"],
    compatibilities: [
      { brand: "Toyota", model: "Hilux", years: [2012,2013], price: 32000 },
      { brand: "Mitsubishi", model: "L200", years: [2015,2016], price: 26000 }
    ]
  },

  {
    id: 117,
    name: "Engine Mount (Rubber)",
    description: "Vibration-damping engine mount for smoother ride.",
    category: "Engine",
    images: ["https://via.placeholder.com/400x300?text=Engine+Mount"],
    price_low: 4200,
    price_high: 5200,
    availability: "In stock",
    stockQty: 88,
    featured: false,
    newArrival: true,
    createdAt: "2025-10-05T09:00:00Z",
    oem: ["EM-RB-44"],
    keywords: ["engine", "mount", "rubber", "vibration"],
    compatibilities: [
      { brand: "Honda", model: "Civic", years: [2016,2017], price: 4200 },
      { brand: "Toyota", model: "Corolla", years: [2015,2016], price: 5200 }
    ]
  },

  {
    id: 118,
    name: "Wheel Bearing (Front)",
    description: "Sealed front wheel bearing — long life, OEM fit.",
    category: "Wheels",
    images: ["https://via.placeholder.com/400x300?text=Wheel+Bearing"],
    price_low: 4200,
    price_high: 6800,
    availability: "In stock",
    stockQty: 52,
    featured: false,
    newArrival: false,
    createdAt: "2025-04-01T09:00:00Z",
    oem: ["WB-FR-202"],
    keywords: ["wheel", "bearing", "front"],
    compatibilities: [
      { brand: "Nissan", model: "Sentra", years: [2012,2013], price: 4200 },
      { brand: "Ford", model: "Focus", years: [2013,2014], price: 6800 }
    ]
  }
];

// end of dataset