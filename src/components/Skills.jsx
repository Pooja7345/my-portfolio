import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern web technologies.",
    icon: FaReact,
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    description:
      "Learning and developing server-side applications and backend functionality.",
    icon: FaNodeJs,
    tags: ["Node.js", "REST APIs"],
  },
  {
    title: "Programming",
    description:
      "Developing programming and problem-solving skills using object-oriented programming concepts.",
    icon: FaJs,
    tags: ["Python", "Numpy", "OOP", "Problem Solving"],
  },
  {
    title: "Database",
    description:
      "Working with databases to store, manage, and retrieve application data.",
    icon: FaDatabase,
    tags: ["MySQL", "Database Management"],
  },
  {
    title: "Version Control",
    description:
      "Managing projects and tracking code changes using version control tools.",
    icon: FaGithub,
    tags: ["Git", "GitHub", "Version Control"],
  },
  {
    title: "Development Tools",
    description:
      "Using modern development tools to build, test, and manage web applications.",
    icon: FaTools,
    tags: ["VS Code", "Vite", "npm"],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                {/* Icon */}
                <Icon className="text-4xl text-purple mb-5" />

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {skill.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-dark-100 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </motion.div>
  );
};

export default Skills;