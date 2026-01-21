import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer guidance on how to use your equipment?",
    answer:
      "Yes. We provide clear guidance and support on how to properly use all our agricultural equipment to ensure the best results.",
  },
  {
    question: "Where is Deof Farmtech Systems located?",
    answer:
      "We are based in Mombasa, Kenya, and serve farmers across the region.",
  },
  {
    question: "Do you sell equipment to both small and commercial farmers?",
    answer:
      "Absolutely. Our equipment is suitable for both small-scale and large-scale commercial farming operations.",
  },
  {
    question: "How can I inquire about prices or availability?",
    answer:
      "You can contact us directly via phone, WhatsApp, or email, and our team will be happy to assist you.",
  },
];

const ContactPage = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="container pt-15 mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-900">
            Contact Deof Farmtech Systems
          </h1>
          <div className="w-20 h-1 mx-auto mt-4 bg-yellow-400 rounded-full"></div>
          <p className="mt-6 text-green-700 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? Below are answers to common
            questions and our official contact details to reach us directly.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-green-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            Get in Touch With Us
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-400 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-green-900">Phone</h4>
                <p className="text-green-700">+254 790 407682</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-yellow-400 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-green-900">WhatsApp</h4>
                <p className="text-green-700">+254 790 407682</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-yellow-400 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-green-900">Email</h4>
                <p className="text-green-700">deofpoultrytech@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-green-900">Location</h4>
                <p className="text-green-700">
                  Chai Logistic off Old Mombasa Road, Embakasi-Nairobi
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-green-700 mb-4">
              Our team is ready to assist you with product selection and usage.
            </p>
            <a
              href="https://wa.me/254790407682?text=Hello%20Deof%20Farmtech%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Chat With Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
