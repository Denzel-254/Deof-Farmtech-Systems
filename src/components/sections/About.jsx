import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/tractor.png"
              alt="Agricultural equipment and farming technology"
              className="w-full h-80 lg:h-104 object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-green-900">
              About Deof Farmtech Systems
            </h2>

            <div className="w-16 h-1 mt-3 bg-yellow-400 rounded-full"></div>

            <p className="mt-6 text-green-700 leading-relaxed">
              Deof Farmtech Systems is an agricultural equipment supplier based
              in Nairobi, Kenya, dedicated to helping farmers improve
              productivity through modern, reliable, and easy-to-use farming
              technologies.
            </p>

            <p className="mt-4 text-green-700 leading-relaxed">
              We specialize in poultry incubators and other essential farm
              equipment designed to support both small-scale and commercial
              farmers. Beyond selling equipment, we provide guidance to ensure
              farmers get the best results from their investments.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-green-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
