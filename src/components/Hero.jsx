import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      {/* Main Container */}
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-purple">
              Pooja Kumari
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I am a passionate software developer focused on building
            responsive, user-friendly and modern web applications.
            I am continuously improving my programming and development
            skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 bg-purple border border-purple rounded-full font-medium text-white hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-full font-medium text-white hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* ================= PROFILE IMAGE ================= */}
        <div className="w-full md:w-1/2 flex justify-center">

          <motion.div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Purple Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-60 blur-xl animate-pulse" />

            {/* Image */}
            <motion.img
              src={assets.profile_img}
              alt="Pooja Kumari"
              className="relative rounded-full w-full h-full object-cover border-4 border-purple z-10"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Hero;