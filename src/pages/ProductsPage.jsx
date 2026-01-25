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
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
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
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
    name: "Seed Planter Machine",
    price: "KES 35,000",
    image: "/incubator.png",
    category: "Crop Farming Equipment",
    capacity: "Manual / Small-Scale Operation",
    motorPower: "Manual",
    pelletSize: "N/A",
    dimensions: "Standard Portable Size",
    weight: "Lightweight",
    usage: ["Maize", "Beans", "Vegetables"],
    description:
      "Efficient seed planting equipment that saves time and improves crop spacing for better yields.",
    benefits: [
      "Improves planting accuracy and spacing",
      "Reduces labor and planting time",
      "Ideal for small-scale farmers",
      "Easy to operate and maintain",
    ],
    notes: "Specifications may vary depending on model and availability.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
  {
    name: "Animal Feed Grinder",
    price: "KES 42,000",
    image: "/crusher.png",
    category: "Feed Processing Equipment",
    capacity: "Medium-Scale Grinding",
    motorPower: "Electric Motor",
    pelletSize: "Powdered Feed Output",
    dimensions: "Compact Floor Model",
    weight: "Moderate Weight",
    usage: ["Poultry", "Cattle", "Goats", "Pigs"],
    description:
      "Durable feed grinder for producing quality animal feeds for poultry and livestock farming.",
    benefits: [
      "Produces fine, consistent feed",
      "Improves feed mixing efficiency",
      "Reduces cost of commercial feeds",
      "Strong and durable build",
    ],
    notes: "Specifications may vary depending on model and availability.",
    contactInfo:
      "Contact us today for pricing, availability, and expert guidance for your farm.\n\nDeof FarmTech Systems — Smart Farming, Smart Results.",
  },
];

const ProductsPage = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="container pt-15 mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
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

        {/* Products Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
