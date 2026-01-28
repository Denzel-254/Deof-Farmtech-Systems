import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="container pt-15 mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/cube1.jpeg"
              alt="Deof Farmtech Systems"
              className="rounded-lg shadow-lg w-full h-80 lg:h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              About Deof FarmTech Systems
            </h2>
            <div className="w-20 h-1 bg-yellow-400 rounded-full mb-6"></div>
            <p className="text-green-700 leading-relaxed mb-4">
              Deof FarmTech Systems is a trusted agricultural equipment supplier
              based in Nairobi, Kenya, committed to helping farmers increase
              productivity through modern, reliable, and easy-to-use farming
              technologies.
            </p>
            <p className="text-green-700 leading-relaxed">
              We specialize in high-quality poultry and farm equipment designed
              to support both small-scale farmers and large commercial
              operations.
            </p>
          </motion.div>
        </div>

        {/* Story / Journey Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl font-bold text-green-900 mb-4">
              Our Journey
            </h3>
            <p className="text-green-700 leading-relaxed mb-4">
              At Deof FarmTech Systems, we do more than just supply machines — we
              guide our customers to ensure they get the best performance and
              value from their investment.
            </p>
            <p className="text-green-700 leading-relaxed">
              Whether you are starting your farming journey or expanding your
              operation, we provide dependable equipment and practical support
              every step of the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/pellet1.jpeg"
              alt="Our Journey"
              className="rounded-lg shadow-lg w-full h-80 lg:h-96 object-cover"
            />
          </motion.div>
        </div>

        {/* Highlights / Features */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-green-900 mb-4">
            What We Offer
          </h3>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid gap-10 md:grid-cols-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            <img
              src="/bator2.jpeg"
              alt="Egg Incubators"
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              Poultry Equipment
            </h4>
            <p className="text-green-700 leading-relaxed">
              Egg incubators, battery cages (A-Type and H-Type), drinkers, and
              feeders carefully selected to support efficient poultry farming.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            <img
              src="/chopper3.jpeg"
              alt="Feed Processing"
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              Feed Processing Equipment
            </h4>
            <p className="text-green-700 leading-relaxed">
              Feed pellet machines, mixers, and crushers built to improve feed
              quality and maximize livestock productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            <img
              src="/dryer.jpeg"
              alt="Customer Support"
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              Farmer Support & Guidance
            </h4>
            <p className="text-green-700 leading-relaxed">
              We proudly serve farmers across Kenya with quality products,
              professional advice, and reliable customer service.
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Get In Touch with Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
