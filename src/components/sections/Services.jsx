import { motion } from "framer-motion";
import {
  FaSeedling,
  FaTools,
  FaChalkboardTeacher,
  FaTruck,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-900">Our Services</h2>

          <div className="mt-2 flex items-center gap-2">
            <span className="inline-block w-24 h-1 bg-yellow-400 rounded-full"></span>
            <span className="inline-block w-3 h-1 bg-yellow-400 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-yellow-400 rounded-full"></span>
          </div>

          <p className="mt-6 max-w-2xl text-green-700">
            At Deof Farmtech Systems, we provide modern agricultural equipment
            and expert support to help farmers improve productivity, efficiency,
            and profitability.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 lg:flex lg:items-center lg:gap-12">
          {/* Services Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-1/2"
          >
            {/* Service Item */}
            <div className="space-y-3">
              <span className="inline-flex items-center justify-center p-3 bg-green-100 text-green-800 rounded-xl">
                <FaSeedling size={22} />
              </span>

              <h3 className="text-xl font-semibold text-green-900">
                Poultry Incubators Supply
              </h3>

              <p className="text-green-700">
                We supply high-quality poultry incubators designed for reliable
                hatching, temperature control, and energy efficiency for both
                small and commercial farmers.
              </p>
            </div>

            {/* Service Item */}
            <div className="space-y-3">
              <span className="inline-flex items-center justify-center p-3 bg-green-100 text-green-800 rounded-xl">
                <FaTools size={22} />
              </span>

              <h3 className="text-xl font-semibold text-green-900">
                Farm Equipment Sales
              </h3>

              <p className="text-green-700">
                We provide a range of essential agricultural tools and equipment
                that help farmers modernize operations and increase efficiency.
              </p>
            </div>

            {/* Service Item */}
            <div className="space-y-3">
              <span className="inline-flex items-center justify-center p-3 bg-green-100 text-green-800 rounded-xl">
                <FaChalkboardTeacher size={22} />
              </span>

              <h3 className="text-xl font-semibold text-green-900">
                Farmer Training & Guidance
              </h3>

              <p className="text-green-700">
                We educate farmers on proper equipment usage, maintenance, and
                best farming practices to maximize results and reduce losses.
              </p>
            </div>

            {/* Service Item */}
            <div className="space-y-3">
              <span className="inline-flex items-center justify-center p-3 bg-green-100 text-green-800 rounded-xl">
                <FaTruck size={22} />
              </span>

              <h3 className="text-xl font-semibold text-green-900">
                Equipment Delivery & Support
              </h3>

              <p className="text-green-700">
                Based in Mombasa, we offer timely delivery and ongoing support
                to ensure farmers receive reliable service when they need it.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              src="/planter.png"
              alt="Modern agricultural equipment"
              className="w-md h-112 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
