import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Reliable Poultry Incubators",
    description:
      "Increase hatch rates with modern incubators designed for temperature control, humidity balance, and efficiency for both small and commercial poultry farmers.",
    image: "/incubator.png",
    cta: "View Incubators",
    link: "/products",
  },
  {
    title: "Modern Farm Technology",
    description:
      "We supply durable and efficient agricultural equipment that helps farmers reduce losses, save time, and improve productivity.",
    image: "/grinder.png",
    cta: "Our Equipment",
    link: "/products",
  },
  {
    title: "Support for Every Farmer",
    description:
      "From equipment selection to setup guidance, Deof Farmtech Systems supports farmers with practical knowledge and reliable after-sales service.",
    image: "/planter.png",
    cta: "Get Support",
    link: "/contact",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-green-50 pt-28 lg:pt-32">
      <div className="container mx-auto px-6 py-12 lg:h-136 lg:flex lg:items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-3xl font-bold text-green-900 lg:text-4xl">
                {slides[index].title}
              </h1>

              <p className="mt-4 text-green-700">{slides[index].description}</p>

              <div className="mt-6">
                <Link
                  to={slides[index].link}
                  className="inline-block px-6 py-3 text-sm font-semibold text-green-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
                >
                  {slides[index].cta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex mt-8 space-x-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? "bg-yellow-400"
                    : "bg-green-200 hover:bg-yellow-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full mt-10 lg:mt-0 lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].image}
              src={slides[index].image}
              alt="Farm equipment"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6 }}
              className="object-cover w-full h-80 max-w-xl rounded-lg shadow-md"
            />
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Hero;
