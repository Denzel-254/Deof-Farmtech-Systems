import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) =>
          categoryMap[activeCategory]?.includes(product.category)
        );

  return (
    <section className="bg-green-50 py-20">
      <div className="container pt-15 mx-auto px-6">
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

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
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

        <div className="mt-20 bg-white rounded-lg shadow-md p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Dispatch & Location Information
          </h3>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>

          <p className="text-green-700 mb-2">
            <strong>Location:</strong> Nairobi, Kenya
          </p>
          <p className="text-green-700 mb-2">
            <strong>Dispatch Point:</strong> Embakasi Area
          </p>
          <p className="text-green-700">
            <strong>Phone / WhatsApp:</strong> 0790 407 682
          </p>
        </div>

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
