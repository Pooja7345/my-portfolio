
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech, demo, code, status }) => {
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
        
        {/* Title and Status */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <span
            className={`text-xs px-3 py-1 rounded-full ${
              status === "Live"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {status}
          </span>
        </div>

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
          <a
            href={demo && demo !== "#" ? demo : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!demo || demo === "#") e.preventDefault();
            }}
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>

          <a
            href={code && code !== "#" ? code : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!code || code === "#") e.preventDefault();
            }}
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
