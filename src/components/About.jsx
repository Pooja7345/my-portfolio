import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaReact } from "react-icons/fa";
import { FaNodeJs, FaGithub, FaJs } from "react-icons/fa6";

const aboutInfo = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.",
    icon: <FaReact />,
  },
  {
    title: "Backend Development",
    description:
      "Learning and working with Node.js and backend development concepts.",
    icon: <FaNodeJs />,
  },
  {
    title: "Programming",
    description:
      "Developing programming and problem-solving skills using Python and Numpy.",
    icon: <FaJs />,
  },
  {
    title: "Version Control",
    description:
      "Using Git and GitHub to manage and maintain projects.",
    icon: <FaGithub />,
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full h-auto object-cover"
              src={assets.profile_img}
              alt="Profile"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">

              {/* My Journey */}
              <h3 className="text-2xl font-semibold mb-6">
                My Journey
              </h3>

              <p className="text-gray-300 mb-6">
                I am a passionate and motivated aspiring Full Stack Developer
                with a strong interest in web development and software
                development. As a fresher, I have been continuously improving
                my programming and development skills by learning and working
                with technologies such as HTML, CSS, JavaScript, React,
                Node.js, Python, SQL and GitHub.
              </p>

              <p className="text-gray-300 mb-6">
                My learning journey has helped me develop a strong understanding
                of frontend and backend development, programming concepts,
                problem-solving, and version control. I enjoy learning new
                technologies and applying my knowledge to create responsive,
                interactive, and user-friendly web applications.
              </p>

              <p className="text-gray-300 mb-10">
                As I begin my professional career, my goal is to work as a
                Software or Full Stack Developer, contribute to real-world
                projects, and continuously grow my technical and
                problem-solving skills.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-dark-300 rounded-2xl p-6 cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="text-4xl text-purple-500 mb-4">
                      {data.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">
                      {data.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {data.description}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;