import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple"> Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let’s talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div>
            <form className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300 resize-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Submit
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Location */}
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-purple text-2xl mr-4 mt-1" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Location
                </h3>

                <p className="text-gray-400">
                  Behrampur, Noida, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <FaEnvelope className="text-purple text-2xl mr-4 mt-1" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Email
                </h3>

                <p className="text-gray-400">
                  kpooja6648@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <FaPhoneAlt className="text-purple text-2xl mr-4 mt-1" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phone Number
                </h3>

                <p className="text-gray-400">
                  +91 9810747560
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex space-x-4">

                {/* GitHub */}
                <a
                  href="https://github.com/Pooja7345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pooja-kumari-37b742220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;