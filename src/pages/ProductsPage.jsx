import { useState } from "react";
import { motion } from "framer-motion";


const products = [
  {
    name: "Feed Pelleting Machine (400kg/hour)",
    price: "KES 210,500",
    image: "/feed1.jpeg",
    category: "Feed Processing Equipment",
    capacity: "300–400 kg/hour",
    motorPower: "16 HP, 3-Phase",
    pelletSize: "2–6 mm (Customizable Dies)",
    dimensions: "1300 × 460 × 1050 mm",
    weight: "220 kg",
    usage: ["Poultry", "Dairy", "Pigs", "Rabbits"],
    description:
      "The 400kg/hour Feed Pelleting Machine is designed for expanding farms and small-scale feed businesses that demand high efficiency and productivity. It converts powdered feed into dense, uniform pellets, improving feed intake, animal growth, and reducing wastage. Built for durability and long-term use, this heavy-duty machine ensures professional and consistent feed production.",
    benefits: [
      "High-volume pellet production for growing farms",
      "Uniform pellets improve digestion and feed efficiency",
      "Reduces dependency on commercial feeds",
      "Heavy-duty construction for long-term durability",
      "Stable operation with powerful 3-phase motor",
      "Customizable pellet sizes for different livestock needs",
      "Cost-saving through in-house feed production",
    ],
    notes:
      "Price subject to change based on market conditions and availability.",
    contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
    name: "Feed Pelleting Machine (600kg/hour)",
    price: "KES 275,500",
    image: "/feed2.jpeg",
    category: "Feed Processing Equipment",
    capacity: "600 kg/hour",
    motorPower: "15 kW (20 HP), 3-Phase",
    pelletSize: "2.5–8 mm (Customizable Dies)",
    dimensions: "1400 × 650 × 1450 mm",
    weight: "320 kg",
    usage: ["Poultry", "Dairy", "Pigs", "Rabbits"],
    description:
      "The 600kg/hour Feed Pelleting Machine is designed for large farms and professional feed producers who require high output, uniform, and durable pellets. It efficiently converts powdered feed into dense, high-quality pellets, improving animal nutrition while reducing feed wastage. Built with a powerful 3-phase motor and heavy-duty frame, this machine delivers consistent performance and long-term reliability.",
    benefits: [
      "High-volume pellet production for large and expanding operations",
      "Uniform pellets improve digestion and feed intake",
      "Reduces dependency on commercial feeds",
      "Heavy-duty construction ensures stability and long lifespan",
      "Customizable pellet sizes (2.5–8 mm) for different livestock needs",
      "Saves time, effort, and operational costs in large-scale feed production",
    ],
    notes:
      "Price subject to change based on market conditions and availability.",
    contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
    name: "Feed Pelleting Machine (100kg)",
    price: "KES 95,000",
    image: "/pellet1.jpeg",
    category: "Feed Processing Equipment",
    capacity: "100 kg/hour",
    motorPower: "4.5 kW Single Phase Motor",
    pelletSize: "2–6 mm (Customizable Dies)",
    dimensions: "780 × 320 × 850 mm",
    weight: "90 kg",
    usage: ["Poultry", "Dairy", "Pigs", "Rabbits"],
    description:
      "The 100kg Feed Pelleting Machine is designed for small to medium-scale farmers who want to produce high-quality, uniform animal feed pellets. It efficiently converts powdered feed into compact pellets that are easy to store, transport, and digest by animals. Ideal for poultry, dairy, pig, and rabbit farming.",
    benefits: [
      "Produces uniform, high-quality feed pellets",
      "Improves feed intake and digestion",
      "Reduces feed wastage",
      "Saves costs on commercial feed",
      "Compact design and easy to operate",
    ],
    notes:
      "Price subject to change based on market conditions and availability.",
    contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
    name: "Feed Pelleting Machine (200kg/hour)",
    price: "KES 160,000",
    image: "/pellet2.jpeg",
    category: "Feed Processing Equipment",
    capacity: "200–250 kg/hour",
    motorPower: "10 HP",
    pelletSize: "2–6 mm (Customizable Dies)",
    dimensions: "1260 × 450 × 1000 mm",
    weight: "170 kg",
    usage: ["Poultry", "Dairy", "Pigs", "Rabbits", "Other Livestock"],
    description:
      "The 200kg/hour Feed Pelleting Machine is designed for serious farmers and small-scale feed producers who demand high productivity and consistency. This robust machine converts powdered feed into dense, uniform pellets that enhance animal nutrition, reduce wastage, and improve overall farm efficiency. It delivers industrial-level results in a farm-scale setup.",
    benefits: [
      "High output capacity of 200–250 kg/hour",
      "Uniform pellets improve digestion and feed intake",
      "Reduces dependency on commercial feed",
      "Durable, stable, and easy to operate",
      "Adjustable pellet sizes for different livestock requirements",
    ],
    notes:
      "Price subject to change based on market conditions and availability.",
    contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },

  {
  name: "Diesel Engine Silage Chopper (2.5 Ton/Hour)",
  price: "KES 130,000",
  image: "/chopper3.jpeg",
  category: "Fodder & Silage Equipment",
  capacity: "2.5 Tons per Hour",
  motorPower: "4.85 kW (6.5 HP) Diesel Engine — Air Cooled",
  pelletSize: "N/A",
  dimensions: "Compact Farm-Scale Design",
  weight: "60 kg",
  usage: [
    "Silage Preparation",
    "Forage Processing",
    "Small & Medium-Scale Livestock Farms",
  ],
  description:
    "The 2.5 Ton/Hour Diesel Engine Silage Chopper is designed for efficient silage and forage preparation on small to medium-scale farms. Powered by a fuel-efficient, air-cooled diesel engine, it delivers reliable chopping performance without the need for electricity. Its durable build and easy maintenance make it suitable for continuous farm operations.",
  benefits: [
    "Efficient chopping for silage and forage preparation",
    "Diesel-powered operation for off-grid use",
    "Low fuel consumption for economical operation",
    "Durable and easy to maintain",
    "Ideal for small to medium-scale livestock farms",
  ],
  notes:
    "Specifications and pricing are subject to change based on market conditions and availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}
,

  {
    name: "Electric High-Speed Silage Chopper (2 Ton/Hour)",
    price: "Contact for Price",
    image: "/chopper4.jpeg",
    category: "Fodder & Silage Equipment",
    capacity: "Up to 2 Tons per Hour",
    motorPower: "4.5 kW (6 HP)",
    pelletSize: "N/A",
    dimensions: "Compact Design",
    weight: "28 kg",
    usage: [
      "Napier Grass",
      "Maize Stalks",
      "Sugarcane Tops",
      "Sorghum",
      "Fodder",
      "Dry & Green Materials",
    ],
    description:
      "The 2 Ton/Hour Electric High-Speed Silage Chopper is designed for efficient silage preparation on small to medium-scale livestock farms. It delivers fast, uniform chopping of both dry and green materials, improving feed handling and storage. With a compact, lightweight build and high rotational speed, this machine is easy to operate and ideal for continuous farm use.",
    benefits: [
      "High-speed chopping for efficient silage preparation",
      "Handles both dry and green fodder materials",
      "Compact and lightweight for easy handling and transport",
      "Suitable for small to medium-scale livestock farms",
      "Durable construction for continuous farm operations",
    ],
    notes:
      "Specifications and pricing may vary depending on availability and market conditions.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },

  {
    name: "Diesel Engine Silage Chopper (4.8 Ton/Hour)",
    price: "KES 175,500",
    image: "/chopper2.jpeg",
    category: "Fodder & Silage Equipment",
    capacity: "4.8 Tons per Hour",
    motorPower: "5.67 kW (7.5 HP) Diesel Engine — Air Cooled",
    pelletSize: "N/A",
    dimensions: "Heavy-Duty Compact Frame",
    weight: "70 kg",
    usage: [
      "Maize Stalks",
      "Sugarcane Tops",
      "Napier Grass",
      "Sorghum",
      "Dry & Green Materials",
    ],
    description:
      "The 4.8 Ton/Hour Diesel Engine Silage Chopper is built for high-capacity silage preparation in areas without reliable electricity. Powered by a robust air-cooled diesel engine, it efficiently chops both dry and green fodder into uniform pieces, improving feed handling and storage. Its durable construction makes it ideal for continuous use on small to medium-scale livestock farms.",
    benefits: [
      "High-capacity chopping for efficient silage production",
      "Diesel-powered for operation without electricity",
      "Handles a wide range of dry and green fodder materials",
      "Suitable for small to medium-scale livestock farms",
      "Durable design for continuous farm operations",
    ],
    notes:
      "Price and specifications are subject to change based on market conditions and availability.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
    name: "Electric Silage Baler (10 HP)",
    price: "KES 1,050,000",
    image: "/silage1.jpeg",
    category: "Fodder & Silage Equipment",
    capacity: "Continuous High-Density Baling",
    motorPower: "10 HP Electric Motor (3-Phase, 50 Hz)",
    pelletSize: "N/A",
    dimensions: "Industrial Compact Frame",
    weight: "Heavy-Duty Build",
    usage: [
      "Silage Baling",
      "Professional Livestock Operations",
      "Commercial & Large-Scale Farms",
    ],
    description:
      "The 10 HP Electric Silage Baler is designed for professional livestock operations requiring consistent, high-density silage baling. Powered by a 3-phase electric motor, it delivers stable performance with uniform bale density, quiet operation, and low running costs. Ideal for farms with reliable electricity and continuous baling needs.",
    benefits: [
      "High-torque continuous compression system",
      "Uniform bale density for better silage storage",
      "Quiet and stable electric operation",
      "Low operating cost and minimal maintenance",
      "Ideal for professional and commercial livestock farms",
    ],
    notes:
      "Specifications and pricing are subject to change based on availability and market conditions.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },

  {
    name: "Diesel Engine Silage Baler (16 HP)",
    price: "KES 1,100,530",
    image: "/silage2.jpeg",
    category: "Fodder & Silage Equipment",
    capacity: "Continuous High-Density Baling",
    motorPower: "16 HP Diesel Engine (Water Cooled)",
    pelletSize: "N/A",
    dimensions: "Heavy-Duty Mobile Frame",
    weight: "Heavy-Duty Build",
    usage: [
      "Silage Baling",
      "Off-Grid Farming",
      "Remote Livestock Operations",
      "Commercial & Large-Scale Farms",
    ],
    description:
      "The 16 HP Diesel Engine Silage Baler is built for heavy-duty silage baling in off-grid and remote farming locations. Powered by a water-cooled diesel engine, it delivers high-torque compression with uniform bale density and consistent performance under continuous operation. Ideal for farmers who require mobility, independence, and reliable baling without electricity.",
    benefits: [
      "High-torque diesel-powered compression system",
      "Uniform bale density for improved silage storage",
      "Operates efficiently without electricity",
      "Consistent output under continuous heavy-duty use",
      "Ideal for remote, off-grid, and mobile farm operations",
    ],
    notes:
      "Specifications and pricing are subject to change based on market conditions and availability.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },

  {
    name: "Diesel Engine Chaff Cutter with Hammers (6.5 Ton/Hour)",
    price: "KES 570,320",
    image: "/silage3.jpeg",
    category: "Fodder & Silage Equipment",
    capacity: "6.5 Tons per Hour",
    motorPower: "18 HP Diesel Engine (Water Cooled, Fuel Efficient)",
    pelletSize: "N/A",
    dimensions: "2286 × 1914 × 2591 mm",
    weight: "550 kg",
    usage: [
      "Napier Grass",
      "Maize Stalks",
      "Sugarcane Tops",
      "Sorghum",
      "All Types of Forage",
    ],
    description:
      "The 6.5 Ton/Hour Diesel Engine Chaff Cutter with Hammers is a high-capacity, heavy-duty machine built for professional forage processing. Featuring a dual chopping mechanism using blades and hammers, it delivers efficient and versatile cutting for a wide range of dry and green materials. Designed with a conveyor feeding system, double gearbox, and adjustable discharge, it ensures safe, continuous, and reliable operation on demanding farm setups.",
    benefits: [
      "High-capacity chaff cutting for large-scale operations",
      "Dual chopping mechanism (blades + hammers) for versatility",
      "Conveyor belt feeding system with safety guards",
      "Double gearbox for torque and speed adjustment",
      "Adjustable discharge system for easy collection and handling",
      "Durable construction for heavy-duty farm use",
    ],
    notes:
      "Specifications and pricing are subject to change based on market conditions and availability.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
  name: "Automatic Manure Dryer (3-Phase Electric)",
  price: "KES 240,128",
  image: "/dryer.jpeg",
  category: "Waste Management & Recycling Equipment",
  capacity: "300–500 kg/hour (Wet Manure)",
  motorPower: "11 kW Total (5.5 kW Drying Motor + 5.5 kW Pumping Motor)",
  pelletSize: "N/A",
  dimensions: "Compact Industrial Design",
  weight: "Heavy-Duty Build",
  usage: [
    "Poultry Manure",
    "Pig Manure",
    "Livestock Waste",
    "Organic Fertilizer Preparation",
  ],
  description:
    "The 3-Phase Electric Automatic Manure Dryer is a fully automatic, continuous drying system designed to efficiently process poultry, pig, and livestock manure. It reduces moisture content by up to 60–70%, producing dry, manageable output suitable for fertilizer use. With stable performance, low energy consumption, and compact design, it is ideal for small to medium-scale farms seeking efficient waste management solutions.",
  benefits: [
    "Fully automatic operation reduces labor costs",
    "Continuous drying system ensures consistent output",
    "Reduces moisture content by up to 60–70%",
    "Low energy consumption with stable performance",
    "Compact design suitable for small to medium farms",
  ],
  notes:
    "Specifications and pricing are subject to change based on market conditions and availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
},

{
  name: "A-Type Galvanized Battery Cage",
  price: "KES 36,500",
  image: "/cage.jpeg",
  category: "Poultry Housing Equipment",
  capacity: "128 Birds",
  motorPower: "N/A",
  pelletSize: "N/A",
  dimensions: "7 × 8 × 8 ft",
  weight: "Heavy-Duty Galvanized Steel",
  usage: ["Layer Chickens", "Egg Production"],
  description:
    "The A-Type Galvanized Battery Cage is designed for efficient and organized layer farming. Built with durable galvanized steel, it supports four tiers and houses up to 128 birds, ensuring easy egg collection, hygiene, and long-term use.",
  benefits: [
    "Durable galvanized steel construction",
    "Efficient egg collection design",
    "Easy to clean and maintain",
    "Free installation included",
    "Optimized space utilization with 4-tier structure",
  ],
  notes:
    "Free installation included. Specifications may vary depending on farm setup.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
},

{
  name: "Chicken Transporting Crate (Compact)",
  price: "KES 3,900",
  image: "/crate.jpeg",
  category: "Poultry Transport Equipment",
  capacity: "10–12 Birds",
  motorPower: "N/A",
  pelletSize: "N/A",
  dimensions: "66 × 45 × 27 cm",
  weight: "Lightweight Durable Plastic",
  usage: ["Small Batch Transport", "Chicks & Layer Birds"],
  description:
    "The Compact Chicken Transporting Crate is designed for safe, efficient transport of smaller batches of birds. Its lightweight, durable construction makes it easy to handle, clean, and load, while ensuring the safety and comfort of your poultry.",
  benefits: [
    "Lightweight and durable for safe transport",
    "Compact design ideal for smaller batches",
    "Easy to clean and handle",
    "Safe for chicks and adult birds",
  ],
  notes: "Specifications may vary slightly depending on batch.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
},

{
  name: "Automatic Egg Incubator (56-Egg, Dual Power)",
  price: "KES 11,500",
  image: "/bator1.jpeg",
  category: "Poultry Equipment",
  capacity: "Up to 56 Eggs",
  motorPower: "80 W (AC/DC Dual Power)",
  pelletSize: "N/A",
  dimensions: "50 × 43 × 17 cm",
  weight: "6 kg",
  usage: ["Chicken", "Goose", "Duck", "Pheasant", "Quails"],
  description:
    "The 56-Egg Automatic Incubator with Dual Power is perfect for small to medium-scale farms and hobbyists. It features automatic temperature and humidity control for reliable hatching, and dual power AC/DC operation ensures uninterrupted performance even with unstable electricity. Compact and lightweight, it’s easy to handle and store.",
  benefits: [
    "Automatic temperature and humidity control for reliable hatching",
    "Dual AC/DC power supply for stable operation",
    "Compact and lightweight design for easy handling",
    "Ideal for small to medium-scale farms and hobbyists",
    "Supports multiple poultry types (Chicken, Goose, Duck, Pheasant, Quails)",
  ],
  notes: "Specifications may vary slightly depending on batch and availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}
,

{
  name: "Automatic Egg Incubator (68-Egg, Dual Power AC/DC)",
  price: "KES 14,500",
  image: "/bator2.jpeg",
  category: "Poultry Equipment",
  capacity: "Up to 68 Eggs",
  motorPower: "Dual Power AC/DC",
  pelletSize: "N/A",
  dimensions: "53 × 53 × 25 cm",
  weight: "8 kg",
  usage: ["Chicken", "Duck", "Goose", "Pheasant", "Quail"],
  description:
    "The 68-Egg Automatic Incubator with Dual Power AC/DC is perfect for small to medium-scale farms and hobbyists. It features automatic temperature and humidity control for reliable hatching, and dual power operation ensures uninterrupted performance even with unstable electricity. Compact and lightweight, it is easy to handle and store.",
  benefits: [
    "Automatic temperature and humidity control for reliable hatching",
    "Dual AC/DC power supply for stable operation",
    "Compact and lightweight design for easy handling",
    "Ideal for small to medium-scale farms and hobbyists",
    "Supports multiple poultry types (Chicken, Duck, Goose, Pheasant, Quail)",
  ],
  notes: "Specifications may vary slightly depending on batch and availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}
,
{
  name: "Automatic Egg Incubator (204-Egg, AC/DC)",
  price: "KES 24,000",
  image: "/bator3.jpeg",
  category: "Poultry Equipment",
  capacity: "Up to 204 Eggs",
  motorPower: "200 W (Dual Power AC/DC)",
  pelletSize: "N/A",
  dimensions: "Compact Farm-Scale Design",
  weight: "19 kg",
  usage: ["Chicken", "Duck", "Goose", "Pheasant", "Quail"],
  description:
    "The 204-Egg Automatic Incubator with AC/DC dual power is designed for small to medium-scale farms requiring higher capacity hatching. It provides reliable temperature and humidity control and dual power operation ensures uninterrupted performance. Its durable build supports consistent hatching results.",
  benefits: [
    "High-capacity incubator for up to 204 eggs",
    "Dual AC/DC power supply ensures stable operation",
    "Durable and reliable temperature and humidity control",
    "Ideal for small to medium-scale farms",
    "Supports multiple poultry types (Chicken, Duck, Goose, Pheasant, Quail)",
  ],
  notes: "Specifications may vary slightly depending on batch and availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}
,

{
  name: "Automatic Egg Incubator (136-Egg, AC/DC)",
  price: "KES 19,580",
  image: "/bator4.jpeg",
  category: "Poultry Equipment",
  capacity: "Up to 136 Eggs",
  motorPower: "120 W (Dual Power AC/DC)",
  pelletSize: "N/A",
  dimensions: "53 × 54 × 40 cm",
  weight: "12 kg",
  usage: ["Chicken", "Duck", "Goose", "Pheasant", "Quail"],
  description:
    "The 136-Egg Automatic Incubator with AC/DC dual power is designed for small to medium-scale farms and hobbyists. Its drawer-type layout allows easy access to eggs, while automatic temperature and humidity control ensures reliable hatching. Dual power operation guarantees uninterrupted performance even with unstable electricity.",
  benefits: [
    "Drawer-type design for easy egg access",
    "Automatic temperature and humidity control for reliable hatching",
    "Dual AC/DC power supply ensures stable operation",
    "Compact and lightweight for easy handling",
    "Ideal for small to medium-scale farms",
    "Supports multiple poultry types (Chicken, Duck, Goose, Pheasant, Quail)",
  ],
  notes: "Specifications may vary slightly depending on batch and availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}
,

{
  name: "Industrial Automatic Egg Incubator (528-Egg)",
  price: "KES 53,500",
  image: "/bator5.jpeg",
  category: "Poultry Equipment",
  capacity: "Up to 528 Eggs",
  motorPower: "250 W (AC Power)",
  dimensions: "98 × 71 × 106 cm",
  weight: "45 kg",
  usage: ["Chicken", "Duck", "Goose", "Pheasant", "Quail"],
  description:
    "The Industrial 528-Egg Automatic Incubator is built for commercial poultry farmers and hatcheries that require high capacity and consistent hatch results. With efficient AC power operation and a robust industrial design, it delivers stable temperature control for reliable large-scale hatching.",
  benefits: [
    "Large capacity ideal for commercial hatcheries",
    "Automatic temperature control for consistent hatch rates",
    "Industrial-grade build for long-term use",
    "Efficient 250W AC power consumption",
    "Suitable for multiple poultry egg types",
    "Stable and reliable operation for continuous hatching cycles",
  ],
  notes: "Specifications and pricing may vary slightly depending on market availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}
,
{
  name: "Industrial Automatic Egg Incubator (1056-Egg)",
  price: "KES 98,000",
  image: "/bator6.jpeg",
  category: "Poultry Equipment",
  capacity: "Up to 1,056 Eggs",
  motorPower: "500 W (AC Power)",
  dimensions: "150 × 85 × 120 cm",
  weight: "85 kg",
  usage: ["Chicken", "Duck", "Goose", "Pheasant", "Quail"],
  description:
    "The Industrial 1056-Egg Automatic Incubator is designed for large-scale poultry farms and commercial hatcheries that require very high capacity and dependable performance. Its powerful AC system and industrial-grade construction ensure stable temperature control and consistent hatching results across large batches.",
  benefits: [
    "Very high capacity suitable for commercial hatcheries",
    "Automatic temperature control for reliable hatch rates",
    "Heavy-duty industrial construction for long-term use",
    "Efficient 500W AC power operation",
    "Supports multiple poultry egg types",
    "Stable performance for continuous large-scale hatching",
  ],
  notes: "Specifications and pricing may vary depending on market availability.",
  contactInfo:
    "Contact us today for pricing, availability, and expert guidance for your farm.\n\nPhone: 0790 407 682\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
}



];

const categoryMap = {
  "Feed Processing": [
    "Feed Processing Equipment",
    "Fodder & Silage Equipment",
  ],
  "Farm Waste & Management": ["Waste Management & Recycling Equipment"],
  "Poultry Equipment": [
    "Poultry Equipment",
    "Poultry Housing Equipment",
    "Poultry Transport Equipment",
  ],
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) =>
          categoryMap[activeCategory]?.includes(product.category)
        );

  return (
    <section className="bg-green-50 py-20">
      <div className="container pt-15 mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900">
            Our Agricultural Equipment
          </h1>
          <div className="w-20 h-1 mx-auto mt-4 bg-yellow-400 rounded-full"></div>
          <p className="mt-6 text-green-700 max-w-2xl mx-auto leading-relaxed">
            At Deof Farmtech Systems, we supply modern, reliable, and affordable
            agricultural equipment designed to improve productivity for both
            small-scale and commercial farmers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Feed Processing", "Farm Waste & Management", "Poultry Equipment"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-green-900 text-white"
                    : "bg-white text-green-900 border border-green-200 hover:bg-green-100"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900">
                  {product.name}
                </h3>

                <p className="mt-2 text-green-700 text-sm leading-relaxed">
                  {product.description}
                </p>

                <p className="mt-4 text-xs text-green-600 whitespace-pre-line">
                  {product.contactInfo}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-900">
                    {product.price}
                  </span>

                  <a
                    href="/contact"
                    className="px-4 py-2 bg-yellow-400 text-green-900 text-sm font-semibold rounded-lg hover:bg-yellow-500 transition"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-green-700 mb-6">
            Need help choosing the right equipment for your farm?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
