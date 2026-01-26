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
              src="/cube1.jpeg" // Replace with an actual farm or equipment image
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
              About Deof Farmtech Systems
            </h2>
            <div className="w-20 h-1 bg-yellow-400 rounded-full mb-6"></div>
            <p className="text-green-700 leading-relaxed mb-4">
              Deof Farmtech Systems is a trusted agricultural equipment supplier
              based in Nairobi, Kenya. Our mission is to empower farmers with
              modern, reliable, and easy-to-use technologies that boost
              productivity and profitability.
            </p>
            <p className="text-green-700 leading-relaxed">
              From poultry incubators to mechanized farm tools, we provide
              solutions for both small-scale and commercial farmers. We believe
              that technology should simplify farming, making it more productive
              and sustainable for everyone.
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
              Founded in Nairobi, Deof Farmtech Systems started with a vision to
              bridge the gap between farmers and modern farming technology. Over
              the years, we’ve grown into a leading supplier of quality
              agricultural equipment, helping hundreds of farmers increase
              yields and efficiency.
            </p>
            <p className="text-green-700 leading-relaxed">
              Our approach combines high-quality products with personalized
              guidance, ensuring farmers know exactly how to use our equipment
              for the best results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/pellet1.jpeg" // Replace with an image showing farmers or fieldwork
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
              src="/bator2.jpeg" // Replace with actual product image
              alt="Poultry Incubators"
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              Poultry Equipments
            </h4>
            <p className="text-green-700 leading-relaxed">
              High-quality incubators designed for efficient egg hatching,
              perfect for both small and commercial poultry farmers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            <img
              src="/chopper3.jpeg" // Replace with actual product image
              alt="Chopper"
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              Feed Processing Equipments
            </h4>
            <p className="text-green-700 leading-relaxed">
              Efficient seed planting machines that save time and improve crop
              yields on every farm.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            <img
              src="/dryer.jpeg" // Replace with customer support or field guidance image
              alt="Farmer Support"
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h4 className="text-xl font-semibold text-green-900 mb-2">
              Farm Waste & management Equipments
            </h4>
            <p className="text-green-700 leading-relaxed">
              Personalized guidance to help farmers make the most of our
              equipment and improve productivity.
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
