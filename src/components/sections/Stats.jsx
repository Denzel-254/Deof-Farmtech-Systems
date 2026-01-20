import { motion } from "framer-motion";
import { FaUsers, FaSeedling, FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaSeedling size={28} />,
    value: "500+",
    label: "Farmers Supported",
  },
  {
    icon: <FaUsers size={28} />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <FaMapMarkerAlt size={28} />,
    value: "Coast Region",
    label: "Based in Mombasa",
  },
];

const Stats = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-green-900 p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-yellow-400">
                {stat.icon}
              </div>

              <h3 className="mt-4 text-3xl font-bold text-yellow-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-yellow-400 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
