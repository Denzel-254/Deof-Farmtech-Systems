import { motion } from "framer-motion";

const products = [
  {
    name: "Poultry Egg Incubator (56 Eggs)",
    price: "KES 18,000",
    image: "/incubator.png",
    description:
      "Reliable automatic poultry incubator designed for small-scale farmers, ensuring high hatch rates and energy efficiency.",
  },
  {
    name: "Poultry Egg Incubator (112 Eggs)",
    price: "KES 28,000",
    image: "/incubator.png",
    description:
      "Medium-capacity incubator suitable for growing poultry farms, featuring temperature and humidity control.",
  },
  {
    name: "Seed Planter Machine",
    price: "KES 35,000",
    image: "/incubator.png",
    description:
      "Efficient seed planting equipment that saves time and improves crop spacing for better yields.",
  },
  {
    name: "Animal Feed Grinder",
    price: "KES 42,000",
    image: "/incubator.png",
    description:
      "Durable feed grinder for producing quality animal feeds for poultry and livestock farming.",
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
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900">
                  {product.name}
                </h3>

                <p className="mt-2 text-green-700 text-sm leading-relaxed">
                  {product.description}
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
