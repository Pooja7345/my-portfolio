import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-12 md:py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 md:mb-16">
          A section of my recent work
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;