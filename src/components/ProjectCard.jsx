import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-dark-300 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-60 object-cover"
      />

      {/* Project Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">

          {/* Demo */}
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            Code
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;