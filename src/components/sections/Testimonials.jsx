import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Deof Farmtech’s poultry incubators completely transformed our farm operations. We now hatch eggs more efficiently and with minimal losses.",
    name: "Grace Mwikali",
    role: "Poultry Farmer, Mombasa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    text: "The guidance and training provided by Deof Farmtech helped us understand how to use modern farm equipment effectively. Our yield increased significantly.",
    name: "David Ochieng",
    role: "Commercial Farmer, Kilifi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    text: "We purchased several farming tools from Deof Farmtech, and the delivery was fast and reliable. Their support team ensures we get the best use out of each product.",
    name: "Fatuma Hassan",
    role: "Smallholder Farmer, Mombasa",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-green-900 py-16">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-center">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold text-yellow-400">
            What our <span className="text-yellow-400">customers</span> are
            saying
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="mt-10 bg-green-100 p-8 rounded-xl shadow-lg"
            >
              <p className="text-green-900">{testimonials[current].text}</p>

              <div className="flex items-center mt-6">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-green-900">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-green-700">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 text-green-700 border border-green-700 rounded-full hover:bg-green-200"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-green-700 border border-green-700 rounded-full hover:bg-green-200"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
