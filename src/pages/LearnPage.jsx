import { motion } from "framer-motion";

const lessons = [
  {
    title: "How to Use a Poultry Egg Incubator",
    image: "/one.png",
    description:
      "Learn the correct steps for setting up, operating, and maintaining a poultry egg incubator to achieve high hatch rates.",
    points: [
      "Setting correct temperature and humidity levels",
      "Egg turning and positioning",
      "Daily monitoring and hygiene practices",
    ],
  },
  {
    title: "Proper Use of a Seed Planter Machine",
    image: "/planter.png",
    description:
      "Understand how to prepare your land and operate a seed planter for uniform planting and better crop yields.",
    points: [
      "Land preparation tips",
      "Seed spacing and depth adjustment",
      "Post-planting maintenance",
    ],
  },
  {
    title: "Using a Feed Grinder for Poultry & Livestock",
    image: "/tractor.png",
    description:
      "Learn how to safely operate a feed grinder to produce quality animal feed for improved growth and productivity.",
    points: [
      "Feed ingredient selection",
      "Grinding consistency",
      "Safety and machine care",
    ],
  },
];

const LearnPage = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="container pt-15 mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-900">
            Learn & Grow With Deof Farmtech
          </h1>
          <div className="w-20 h-1 mx-auto mt-4 bg-yellow-400 rounded-full"></div>
          <p className="mt-6 text-green-700 max-w-3xl mx-auto leading-relaxed">
            Our learning resources are designed to help farmers understand how
            to correctly use agricultural equipment for maximum efficiency,
            safety, and long-term value.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="space-y-16">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-green-900 mb-4">
                  {lesson.title}
                </h2>
                <p className="text-green-700 leading-relaxed mb-6">
                  {lesson.description}
                </p>

                <ul className="space-y-3">
                  {lesson.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-green-700"
                    >
                      <span className="mt-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
                  >
                    Get Expert Guidance
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Need Personalized Training?
          </h3>
          <p className="text-green-700 mb-6">
            Our team provides hands-on guidance and support for farmers using
            our equipment.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Contact Deof Farmtech Systems
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearnPage;
